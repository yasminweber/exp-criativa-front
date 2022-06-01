import React, { Component } from 'react';
import HeaderLogin from '../../components/Header/User';
import Helmet from 'react-helmet';
import api from '../../config/api'
import { currentUrl } from '../../Helpers';

class Cause extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            cause: ""
        }

        this.componentDidMount = () => {
            this.getProjects()
        }
    }

    async getProjects() {

        let url = currentUrl()
        let filter = ''
        if (url === "saude") {
            filter = "Saúde"
        } else if (url === "maus-tratos-aos-animais") {
            filter = "Maus tratos aos animais"
        } else if (url === "empoderamento-feminino") {
            filter = "Empoderamento Feminino"
        } else if (url === "fome") {
            filter = "Fome"
        } else if (url === "sem-teto") {
            filter = "Sem teto"
        }
        
        this.setState({
            cause: filter
        })

        await api.get(`/projects/filter/?filterCause1=${filter}`)
            .then((response) => {
                const data = response.data;
                this.setState({ projects: data });
                //console.log(this.state.projects)
            })
            .catch(() => {
                alert('Erro para carregar os projetos');
            })
    }

    render() {
        return (
            <div className="dashboard-interesses">

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.state.cause}</title>
                </Helmet>

                <HeaderLogin />

                <section className="banner-titulo">
                    <div className="container-fluid">
                        <div className="row text-lg-start text-center">
                            <div className="col-12">
                                <h1 className="titulo-1">Ver projetos da causa: {this.state.cause}</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="projetos">
                    <div className="container-lg">
                        <div className="row">
                            <div className="col-lg-10 col-12 mx-auto">

                                {/* Se a lista for vazia */}
                                {(!this.state.projects.length) ?
                                    <div className="mt-3" style={{ textAlignLast: "center" }}>
                                        <p>No momento não temos nenhum projeto para: {this.state.cause}</p>
                                    </div> : <></>
                                }

                                <div className="row my-4 text-start">
                                    {this.state.projects.map((child, id) => (
                                        <div className="col-lg-4 col-12" key={id}>
                                            <div className="projeto my-4 mx-2">
                                                <div className="fundo bg-dog"></div>
                                                <div className="projeto-interno">
                                                    <h2 className="titulo-projeto mb-2">{child.projectName}</h2>
                                                    <h3 className="categoria">{child.cause}</h3>
                                                    <a className="criador" href={'/usuario'}>{child.creator.name}</a>
                                                    <p className="descricao mt-3">{child.description}</p>
                                                    <div className="text-center enviar mt-4">
                                                        <button className="btn-1" onClick={() => { window.location.href = `/project/${child._id}` }}>
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

export default Cause