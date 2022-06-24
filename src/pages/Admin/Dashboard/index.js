import React, { Component } from 'react';
import HeaderAdminIn from '../../../components/Header/Admin/AdminIn';
import Helmet from 'react-helmet';
import { decodeToken } from '../../../config/auth';
import api from '../../../config/api';
import { Chart } from 'react-google-charts'
import _ from 'lodash'
import { translation, customAlert } from '../../../Helpers';

export const options = {
    title: "Projetos",
};

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: decodeToken(),
            projects: []
        }

        this.componentDidMount = () => {
            this.loadProjects()
        }
    }

    async loadProjects() {
        await api.get(`/projects`)
            .then((response) => {
                const data = response.data;
                this.setState({ projects: data });
            })
            .catch(() => {
                customAlert(translation(localStorage.getItem('language')).error.loadProjects, "error");
            })
    }

    loadData(data) {
        const values = _.groupBy(data, (value) => {
            return value.status;
        })

        const result = Object.entries(values).reduce((r, v) => {
            r[v[0]] = v[1].length
            return r
        }, {})

        let resultArray = []
        Object.keys(result).forEach((doc) => {
            let array = []
            array.push(doc)
            array.push(result[doc])
            resultArray.push(array)
        })

        return [
            ["Status", "Quantidade"], ...resultArray
        ]
    }

    render() {
        return (
            <div className="dashboard">

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Dashboard | All4One</title>
                </Helmet>

                <div className="container-fluid">
                    <div className="row flex-nowrap">
                        <HeaderAdminIn />
                        <div className="col-auto col-md-9 col-xl-10 px-sm-2 px-0">
                            <div className="container-lg">
                                <div className="row text-lg-start text-center">
                                    <div className="col-12">
                                        <h1 className="titulo-1 mt-4 mb-5">Dashboard</h1>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="box-item">
                                            <Chart
                                                chartType="PieChart"
                                                data={this.loadData(this.state.projects)}
                                                options={options}
                                                width={"100%"}
                                                height={"400px"}
                                            />
                                        </div>
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

export default Dashboard
