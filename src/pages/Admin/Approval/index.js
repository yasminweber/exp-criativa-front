import React, { Component } from 'react';
import HeaderAdminIn from '../../../components/Header/Admin/AdminIn';
import Helmet from 'react-helmet';
import { decodeToken } from '../../../config/auth';
import { currentUrl } from '../../../Helpers';
import api from '../../../config/api';

class Approval extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: decodeToken(),
            title: "",
            currentPage: "",
            projects: []
        }

        this.componentDidMount = () => {
            this.adminURL()
            this.loadProjects()
        }
    }

    adminURL() {
        let page = currentUrl();

        if (page === "approval?all") {
            this.setState({
                title: "Todos os projetos",
                currentPage: "all"
            })
        } else if (page === "approval?progress") {
            this.setState({
                title: "Projetos em progresso",
                currentPage: "progress"
            })
        } else if (page === "approval?pending") {
            this.setState({
                title: "Projetos pendentes",
                currentPage: "pending"
            })
        } else if (page === "approval?rejected") {
            this.setState({
                title: "Projetos rejeitados",
                currentPage: "rejected"
            })
        } else {
            this.setState({
                title: "Projetos finalizados",
                currentPage: "finished"
            })
        }
    }

    async loadProjects() {
        await api.get(`/projects`)
            .then((response) => {
                const data = response.data;
                this.setState({ projects: data });
                console.log(data)
            })
            .catch(() => {
                alert('Erro para carregar os projetos');
            })
    }

    render() {
        return (
            <div className="dashboard">

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.state.title}</title>
                </Helmet>

                <div className="container-fluid">
                    <div className="row flex-nowrap">
                        <HeaderAdminIn />
                        <div className="col-auto col-md-9 col-xl-10 px-sm-2 px-0">
                            <div className="container-lg">
                                <div className="row text-lg-start text-center">
                                    <div className="col-12">
                                        <h1 className="titulo-1 mt-4 mb-5" style={{ fontSize: "24px" }}>{this.state.title}</h1>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 text-start">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Approval