import React, { Component } from 'react';
import HeaderLogin from '../../components/Header';
import Helmet from 'react-helmet';
import api from '../../config/api'
import { decodeToken } from '../../config/auth';

class MeusInteresses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: decodeToken(),
            projects: []
        }

        this.componentDidMount = () => {
            this.getProjects()
        }
    }

    async getProjects() {

        var causas = this.state.user.user.selectedCauses
        console.log("user causes", causas)

        await api.get(`/projects/filter/?filterCause1=${causas[0]}&filterCause2=${causas[1]}&filterCause3=${causas[2]}&filterCause4=${causas[3]}&filterCause5=${causas[4]}`)
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
                    <title>Meus Interesses</title>
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
                                {(this.state.projects.length !== 0) ?
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
                                    :
                                    <div class="row mt-5">
                                        <div class="col-12 mx-0">
                                            <h2>Ainda não temos nenhum projeto cadastrado para seus interesses.</h2>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        )
    }
}

export default MeusInteresses