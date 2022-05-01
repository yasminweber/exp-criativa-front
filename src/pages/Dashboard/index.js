import React, { Component } from 'react';
import HeaderLogin from '../../components/Header';
import Helmet from 'react-helmet';
import api from '../../config/api'

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }

        this.componentDidMount = () => {
            this.getProjects()
        }
    }

    async getProjects() {

        await api.get('/projects')
            .then((response) => {
                const data = response.data;
                this.setState({ projects: data });
                console.log(this.state.projects)
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
                    <title>Dashboard</title>
                </Helmet>

                <HeaderLogin />

                <section className="banner-titulo">
                    <div className="container-fluid">
                        <div className="row text-lg-start text-center">
                            <div className="col-12">
                                <h1 className="titulo-1">Ver todos os projetos</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="projetos">
                    <div className="container-lg">
                        <div className="row">
                            <div className="col-lg-10 col-12 mx-auto">
                                <div className="row my-4 text-start">
                                    {this.state.projects.map((child, id) => (
                                        <div className="col-lg-4 col-12" key={id}>
                                            <div className="projeto my-4 mx-2">
                                                <div className="fundo bg-dog"></div>
                                                <div className="projeto-interno">
                                                    <h2 className="titulo-projeto mb-2">{child.projectName}</h2>
                                                    <h3 className="categoria">{child.category}</h3>
                                                    <a className="criador" href={'/usuario'}>{child.creator.name}</a>
                                                    <p className="descricao mt-3">{child.description}</p>
                                                    <div className="text-center enviar mt-4">
                                                        <button className="btn-1" onClick={() => { window.location.href = `/project/${child._id}` }}>
                                                            Entrar no projeto
                                                        </button>
                                                       {console.log(this.props)} 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        )
    }
}

export default Dashboard