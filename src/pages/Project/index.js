import React, { Component } from 'react';
import Helmet from 'react-helmet'
import { currentUrl, formatDate, checkMonthYear } from '../../Helpers'
import HeaderLogin from '../../components/Header';
import Member from '../../components/Project/Member';
import api from '../../config/api';
import { decodeToken } from '../../config/auth';

class ProjectPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: decodeToken(),
            projectCreator: "",
            id: "",
            projectName: "",
            category: "",
            where: "",
            startDate: "",
            endDate: "",
            description: "",
            quantityBenefited: "",
            quantityVolunteers: "",
            volunteers: [],
            //projectColor: "",
            status: ""
        }

        this.componentDidMount = () => {
            this.getProject()
        }
    }

    async getProject() {
        await api.get(`/project/${currentUrl()}`)
            .then((response) => {
                const data = response.data;
                this.setState({
                    projectCreator: data.creator.username,
                    id: data._id,
                    projectName: data.projectName,
                    category: data.category,
                    where: data.where,
                    startDate: data.startDate,
                    endDate: data.endDate,
                    description: data.description,
                    quantityBenefited: data.quantityBenefited,
                    quantityVolunteers: data.quantityVolunteers,
                    volunteers: data.volunteers,
                    //projectColor: data.projectColor,
                    status: data.status
                });
                console.log("Projeto carregado");
            })
            .catch((error) => {
                console.log("erro carregar projeto ", error)
                alert('Erro para carregar o projeto');
            })
    }

    async inscrever(id) {
        await api.put(`/project/signup/${id}`)
            .then((response) => {
                console.log("Deu certo");
                alert("Inscrição feita");
                this.getProject();
            })
            .catch((error) => {
                console.log("error inscrever no projeto: ", error)
                alert('Erro para inscrver no');
            })
    }

    render() {
        return (
            <div className='project'>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.state.projectName}</title>
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

                        {/* check if user is the one watching -- username unique */}
                        {(this.state.user.user.username !== this.state.projectCreator) ?
                        <div className="col-lg-4 col-12 subscription-column d-flex">
                            {(this.state.volunteers.indexOf(this.state.user.user._id) === -1) ?
                                <button className='subscription-button' onClick={() => this.inscrever(this.state.id)}> Quero Participar </button>
                                : <></>
                            }
                            {(this.state.volunteers.indexOf(this.state.user.user._id) !== -1) ?
                                <button className='subscription-button' onClick={() => this.inscrever(this.state.id)}> Deixar de Participar </button>
                                : <></>
                            }
                        </div> : <></>
                        }
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
                                                        <p className="descricao mb-4">{formatDate(this.state.startDate)} - {formatDate(this.state.endDate)}</p>
                                                        <h2 className="titulo-1 mb-1">Onde?</h2>
                                                        <p className="descricao mb-4">{this.state.where}</p>
                                                        <h2 className="titulo-1 mb-1">Quantidade estimada de pessoas que serão ajudadas?</h2>
                                                        <p className="descricao mb-4">{this.state.quantityBenefited}</p>
                                                        <h2 className="titulo-1 mb-1">Quantidade de voluntários necessários?</h2>
                                                        <p className="descricao mb-4">{this.state.quantityVolunteers}</p>
                                                        <h2 className="titulo-1 mb-1">Quantidade de voluntários inscritos?</h2>
                                                        <p className="descricao mb-4">{this.state.volunteers.length}</p>
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