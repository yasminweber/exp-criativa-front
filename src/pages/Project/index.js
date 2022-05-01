import React, { Component } from 'react';
import Helmet from 'react-helmet'
import { currentUrl } from '../../Helpers'
import HeaderLogin from '../../components/Header';
import Member from '../../components/Project/Member';
import api from '../../config/api';

class ProjectPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            projectName: "",
            category: "",
            where: "",
            startDate: new Date(),
            endDate: new Date(),
            description: "",
            quantityBenefited: "",
            quantityVolunteers: "",
            status: ""
        }

        this.componentDidMount = () => {
            this.getProject()
            let variavel = currentUrl()
            console.log(variavel)
        }
    }

    async getProject() {
        await api.get(`/project/${currentUrl()}`)
            .then((response) => {
                const data = response.data;
                this.setState({
                    id: data._id,
                    projectName: data.projectName,
                    category: data.category,
                    where: data.where,
                    startDate: data.startDate,
                    endDate: data.endDate,
                    description: data.description,
                    quantityBenefited: data.quantityBenefited,
                    quantityVolunteers: data.quantityVolunteers,
                    status: data.status
                });
                console.log("data", data)
                console.log("Pedidos carregadas");
            })
            .catch((error) => {
                console.log("erro carregar projeto ", error)
                alert('Erro para carregar o projeto');
            })
    }

    render() {
        return (
            <div className='project'>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Nome do projeto</title>
                </Helmet>

                <HeaderLogin />


                <header className="container-fluid project-info d-flex">
                    <div className="row">
                        <div className="col-lg-2 col-4">
                            <div className='project-image d-flex'>
                                Image
                            </div>
                        </div>

                        <div className="col-lg-6 col-8 d-flex name-causes">
                            <h2 className='project-name'> {this.state.projectName} </h2>
                            <h3 className='project-cause'> {this.state.category} </h3>
                        </div>

                        <div className="col-lg-4 col-12 subscription-column d-flex">
                            <button className='subscription-button'> Quero Participar </button>
                        </div>
                    </div>
                </header>

                <section className='project-header'>
                    <ul className="nav nav-tabs project-navbar" id="myTab" role="tablist">
                        <li className="item" role="presentation">
                            <button className="link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Página inicial</button>
                        </li>
                        <li className="item" role="presentation">
                            <button className="link disabled" id="pictures-tab" data-bs-toggle="tab" data-bs-target="#pictures" type="button" role="tab" aria-controls="pictures" aria-selected="false">Fotos</button>
                        </li>
                        <li className="item" role="presentation">
                            <button className="link disabled" id="acoes-e-eventos-tab" data-bs-toggle="tab" data-bs-target="#acoes-e-eventos" type="button" role="tab" aria-controls="acoes-e-eventos" aria-selected="false">Ações & Eventos</button>
                        </li>
                        <li className="item" role="presentation">
                            <button className="link" id="members-tab" data-bs-toggle="tab" data-bs-target="#members" type="button" role="tab" aria-controls="members" aria-selected="false">Membros</button>
                        </li>
                        <li className="item" role="presentation">
                            <button className="link disabled" id="donations-tab" data-bs-toggle="tab" data-bs-target="#donations" type="button" role="tab" aria-controls="donations" aria-selected="false">Doações</button>
                        </li>
                    </ul>
                </section>

                <section className="project-content">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <section className="project-infos text-start my-5" id="project-infos">
                                <div className="container-lg">
                                    <div className="row">
                                        <div className="col-md-8 col-12 order-md-0 order-1">
                                            <div className="left-down mt-4">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h2 className="titulo-1 mb-3">Descrição do projeto</h2>
                                                        {/* de 200 characteres até 500 */}
                                                        <p className="descricao">{this.state.description}</p>
                                                    </div>
                                                </div>
                                                <section className="creator-projects text-start mt-5">
                                                    <h1>teste</h1>

                                                </section>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-12 order-md-1 order-0">
                                            <div className="right-up">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h2 className="titulo-1 mb-1">Quando?</h2>
                                                        <p className="descricao mb-4">start-end - back</p>
                                                        <h2 className="titulo-1 mb-1">Onde?</h2>
                                                        <p className="descricao mb-4">{this.state.where}</p>
                                                        <h2 className="titulo-1 mb-1">Quantidade estimada de pessoas que serão ajudadas?</h2>
                                                        <p className="descricao mb-4">{this.state.quantityBenefited}</p>
                                                        <h2 className="titulo-1 mb-1">Quantidade de voluntários necessários?</h2>
                                                        <p className="descricao mb-4">{this.state.quantityVolunteers}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                        <div className="tab-pane fade" id="pictures" role="tabpanel" aria-labelledby="pictures-tab">
                            <h1 className="mt-3"> conteudo de fotos </h1>
                        </div>
                        <div className="tab-pane fade" id="acoes-e-eventos" role="tabpanel" aria-labelledby="acoes-e-eventos-tab">
                            <h1 className="mt-3"> conteudo de ações e eventos </h1>
                        </div>
                        <div className="tab-pane fade" id="members" role="tabpanel" aria-labelledby="members-tab">
                            <Member />
                        </div>
                        <div className="tab-pane fade" id="donations" role="tabpanel" aria-labelledby="donations-tab">
                            <h1 className="mt-3"> conteúdo de doações </h1>
                        </div>
                    </div>
                    
                </section>

            </div>

        )
    }
}

export default ProjectPage