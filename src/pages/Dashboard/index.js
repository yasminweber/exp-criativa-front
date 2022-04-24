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
                                <h1 class="titulo-1">Ver todos os projetos</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="projetos">
                    <div class="container-lg">
                        <div class="row">
                            <div className="col-lg-10 col-12 mx-auto">
                                <div class="row my-4 text-start">
                                    {this.state.projects.map((child, id) => (
                                        <div class="col-lg-4 col-12" key={id}>
                                            {console.log(child)}
                                            <div className="projeto my-4 mx-2">
                                                <div class="fundo"></div>
                                                <div class="projeto-interno">
                                                    <h2 class="titulo-projeto mb-2">{child.projectName}</h2>
                                                    <h3 class="categoria">{child.category}</h3>
                                                    <h3 class="categoria">{child.creator.name}</h3>
                                                    <p class="descricao mt-3">{child.description}</p>
                                                    <div className="text-center enviar mt-4">
                                                        <button className="btn-1" onClick={() => { window.location.href = `/editProject/${child._id}` }}>
                                                            Entrar no projeto
                                                        </button>
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