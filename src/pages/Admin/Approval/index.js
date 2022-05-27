import React, { Component } from 'react';
import HeaderAdminIn from '../../../components/Header/Admin/AdminIn';
import Helmet from 'react-helmet';
import { decodeToken } from '../../../config/auth';
import { currentUrl } from '../../../Helpers';
import api from '../../../config/api';
import ProjectAdminCard from '../../../components/Project/AdminCard'

class AdminApproval extends Component {

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

    loadProjectModal() {
        var exampleModal = document.getElementById('modalProject')
        // console.log("modal", exampleModal)

        exampleModal.addEventListener('show.bs.modal', function (event) {
            var button = event.relatedTarget
            var recipient = button.getAttribute('data-bs-projectid')

            api.get(`/project/${recipient}`)
                .then((response) => {
                    valores(response.data)
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                    alert('Erro para carregar o projeto');
                })

            function valores(project) {
                let projectName = project.projectName
                let cause = project.cause
                let where = project.where
                let description = project.description
                let quantityBenefited = project.quantityBenefited
                let quantityVolunteers = project.quantityVolunteers
                let status = project.status
                let improvement = project.improvement
                let id = project._id
                console.log("usseerrr", projectName, cause, where, description, quantityBenefited, quantityVolunteers, status, improvement, id)

                exampleModal.querySelector('.modal#modalProject .modal-title').textContent = "Projeto - " + projectName
                exampleModal.querySelector('.modal#modalProject #cause').textContent = cause
                exampleModal.querySelector('.modal#modalProject #where').textContent = where
                exampleModal.querySelector('.modal#modalProject #description').textContent = description
                exampleModal.querySelector('.modal#modalProject #benefited').textContent = quantityBenefited
                exampleModal.querySelector('.modal#modalProject #volunteers').textContent = quantityVolunteers
                exampleModal.querySelector('.modal#modalProject #status').textContent = status
                if (improvement !== undefined) {
                    exampleModal.querySelector('.modal#modalProject #improvement').value = improvement
                }
                exampleModal.querySelector('.modal#modalProject #id').value = id
            }
        })
    }

    async approveProject() {
        var id = document.getElementById('id').value

        const project = {
            status: "approved"
        }

        await api.put(`/project/${id}`, project)
            .then(() => {
                alert("Projeto aprovado com sucesso");
                this.loadAdmins()
            })
            .catch((error) => {
                console.log(error)
                alert('Erro para alterar o projeto');
            });
    }

    async improveProject() {
        var id = document.getElementById('id').value

        const project = {
            status: "pending",
            improvement: document.getElementById('improvement').value
        }

        console.log(id, project)

        await api.put(`/project/${id}`, project)
            .then(() => {
                alert("Projeto enviado para pendência com sucesso");
                // this.loadAdmins()
            })
            .catch((error) => {
                console.log(error)
                alert('Erro para atualizar o projeto');
            });
    }

    async rejectProject() {
        var id = document.getElementById('id').value

        const project = {
            status: "rejected"
        }

        console.log(id, project)

        await api.put(`/project/${id}`, project)
            .then(() => {
                alert("O projeto foi rejeitado");
                // this.loadAdmins()
            })
            .catch((error) => {
                console.log(error)
                alert('Erro para rejeitar o projeto');
            });
    }

    render() {
        return (
            <>
                <div className="approval">

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
                                        {this.state.projects.map((child, id) => (
                                            <div className="col-lg-6 col-10 text-start" key={id}>
                                                {/* Todos os projetos */}
                                                {(this.state.currentPage === "all") ?
                                                    <ProjectAdminCard onClick={this.loadProjectModal()} projectId={child._id} projectName={child.projectName} cause={child.cause} description={child.description} startDate={child.startDate} endDate={child.endDate} status={child.status} />
                                                    : <></>
                                                }
                                                {/* Em progresso */}
                                                {(this.state.currentPage === "progress") ?
                                                    <>
                                                        {(child.status === "progress") ?
                                                            <ProjectAdminCard onClick={this.loadProjectModal()} projectId={child._id} projectName={child.projectName} cause={child.cause} description={child.description} startDate={child.startDate} endDate={child.endDate} status={child.status} />
                                                            : <></>
                                                        }
                                                    </> : <></>
                                                }
                                                {/* Pendentes */}
                                                {(this.state.currentPage === "pending") ?
                                                    <>
                                                        {(child.status === "pending") ?
                                                            <ProjectAdminCard onClick={this.loadProjectModal()} projectId={child._id} projectName={child.projectName} cause={child.cause} description={child.description} startDate={child.startDate} endDate={child.endDate} status={child.status} />
                                                            : <></>
                                                        }
                                                    </> : <></>
                                                }
                                                {/* Rejeitados */}
                                                {(this.state.currentPage === "rejected") ?
                                                    <>
                                                        {(child.status === "rejected") ?
                                                            <ProjectAdminCard onClick={this.loadProjectModal()} projectId={child._id} projectName={child.projectName} cause={child.cause} description={child.description} startDate={child.startDate} endDate={child.endDate} status={child.status} />
                                                            : <></>
                                                        }
                                                    </> : <></>
                                                }
                                                {/* Finalizados */}
                                                {(this.state.currentPage === "finished") ?
                                                    <>
                                                        {(child.status === "finished") ?
                                                            <ProjectAdminCard onClick={this.loadProjectModal()} projectId={child._id} projectName={child.projectName} cause={child.cause} description={child.description} startDate={child.startDate} endDate={child.endDate} status={child.status} />
                                                            : <></>
                                                        }
                                                    </> : <></>
                                                }
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Modal project */}
                <div className="modal fade" id="modalProject" tabIndex="-1" aria-labelledby="modalProjectLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalProjectLabel">Projeto</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-start">
                                <div id="id" className="d-none"></div>
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <h2 className="titulo-1">
                                            <span id="cause">Causa</span> - <span id="where">Onde</span>
                                        </h2>
                                    </div>

                                    <div className="col-md-6 col-12 text-end">
                                        <h2 className="titulo-2">
                                            <span id="startDate">Data inicio</span> - <span id="endDate">Data final</span>
                                            <p className="sub-titulo-1" id="status">Status</p>
                                        </h2>
                                    </div>

                                    <div className="col-12 my-3">
                                        <p className="sub-titulo-1" id="description">Descrição</p>
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <h3 className="">Quantidade beneficiados: <span id="benefited">beneficiados</span></h3>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <h3 className="">Quantidade voluntários: <span id="volunteers">voluntários</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer flex-column">
                                <div className="row w-100 pb-1">
                                    <div className="col-12 d-flex footer-btn justify-content-end">
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={this.rejectProject}>Rejeitar projeto</button>
                                        <button type="button" className="btn btn-warning" onClick={showImproove}>Solicitar alteração</button>
                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={this.approveProject}>Aprovar projeto</button>
                                    </div>
                                </div>

                                <div className="row w-100" id="showImproove" style={{ display: "none" }}>
                                    <hr />
                                    <div className="col-12 d-flex flex-column">
                                        <h4 className="mb-3">O que precisa ser alterado no projeto?</h4>
                                        <textarea id="improvement" />
                                        <button type="button" className="btn btn-warning mt-3" data-bs-dismiss="modal" onClick={this.improveProject}>Enviar alterações necessárias</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AdminApproval

function showImproove() {
    var x = document.getElementById("showImproove");
    if (x !== null) {
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
}
