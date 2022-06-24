import React, { Component } from 'react';
import Helmet from 'react-helmet'
import { currentUrl, formatDate, translation, customAlert } from '../../Helpers'
import HeaderLogin from '../../components/Header/User';
import api from '../../config/api';
import { decodeToken } from '../../config/auth';
import ProjectVolunteers from '../../components/Project/Volunteers';
import Posts from '../../components/Project/Posts';
import ProjectInfos from '../../components/Project/ProjectInfos';
import { FiCamera } from 'react-icons/fi'
import { storage } from '../../firebase';

class ProjectPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: decodeToken(),
            projectCreator: "",
            id: "",
            projectName: "",
            cause: "",
            where: "",
            startDate: "",
            endDate: "",
            description: "",
            quantityBenefited: "",
            quantityVolunteers: "",
            volunteers: [],
            status: "",
            posts: [],
            projectImage: "",
        }

        this.componentDidMount = () => {
            this.getProject()
        }

        this.getProject = this.getProject.bind(this)
        this.profilePhotoUpload = this.profilePhotoUpload.bind(this)
    }

    async getProject() {
        await api.get(`/project/${currentUrl()}`)
            .then((response) => {
                const data = response.data;
                console.log(data)
                this.setState({
                    projectCreator: data.creator._id,
                    id: data._id,
                    projectName: data.projectName,
                    cause: data.cause,
                    where: data.where,
                    startDate: data.startDate,
                    endDate: data.endDate,
                    description: data.description,
                    quantityBenefited: data.quantityBenefited,
                    quantityVolunteers: data.quantityVolunteers,
                    volunteers: data.volunteers,
                    volunteersParticipated: data.volunteersParticipated,
                    status: data.status,
                    projectImage: data.projectImage
                });
                // console.log("Projeto carregado");
            })
            .catch((error) => {
                console.log("erro carregar projeto ", error)
                customAlert(translation(localStorage.getItem('language')).error.loadProject, "error");
            })
    }

    async inscrever(id) {
        await api.put(`/project/signup/${id}`)
            .then((response) => {
                if (this.state.volunteers.filter(item => item._id === this.state.user.user._id).length > 0) {
                    customAlert(translation(localStorage.getItem('language')).success.unsubscribe, "success");
                } else {
                    customAlert(translation(localStorage.getItem('language')).success.subscribe, "success");
                }
                this.getProject();
            })
            .catch((error) => {
                console.log("error inscrever no projeto: ", error)
                customAlert(translation(localStorage.getItem('language')).error.subscribe, "error");
            })


        await api.get(`/changeToken/${this.state.user.user._id}`)
            .then((res) => {
                localStorage.setItem("TOKEN_KEY", res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    async closeProject() {

        const project = {
            status: "finalizado"
        }

        await api.put(`/project/${this.state.id}`, project);
        alert("Projeto finalizado com sucesso");
        // load membros section
    }

    async profilePhotoUpload(e) {
        // Verificar se não foi selecionado arquivos.
        if (e.target.files[0] === undefined) {
            return;
        }

        let photo = e.target.files[0]
        let url = await storage.ref("projects").child(this.state.id).put(photo)
            .then(snapshot => snapshot.ref.getDownloadURL())
            .catch(error => console.log("Erro ao gravar imagem no banco", error))

        // Atualiza usuário com link da imagem
        await api.put(`/project/${this.state.id}`, {projectImage: url})

        await api.get(`/changeToken/${this.state.user.user._id}`)
            .then((res) => {
                localStorage.setItem("TOKEN_KEY", res.data);
            })
            .catch((err) => {
                console.log(err)
            })

        window.location.reload();
    }

    render() {
        const t = translation(localStorage.getItem('language'))
        return (
            <div className='project'>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.state.projectName}</title>
                </Helmet>

                <HeaderLogin />

                <header className="container-fluid project-info d-flex">
                    <div className="row">
                        <div className="col-lg-2 col-4 project-image-section">
                            <div className='project-image d-flex'>
                                <img className="project-photo" src={this.state.projectImage} alt="Imagem projeto" />
                            </div>

                            <div className='project-image-input'>
                                <input type="file" id="change-photo" className='d-none' onChange={this.profilePhotoUpload} accept="image/*"/>
                                <label className="project-image-icon" htmlFor="change-photo"> <FiCamera /> </label>
                            </div>
                        </div>

                        <div className="col-lg-6 col-8 d-flex name-causes">
                            <h2 className='project-name'> {this.state.projectName} </h2>
                            <h3 className='project-cause'> {this.state.cause} </h3>
                        </div>

                        {/* check if user is the one watching -- userId unique */}
                        {(this.state.user.user._id !== this.state.projectCreator && (this.state.status !== "finalizado")) ?
                            <div className="col-lg-4 col-12 subscription-column d-flex">
                                {(this.state.volunteers.filter(item => item._id === this.state.user.user._id).length > 0) ?
                                    <button className='subscription-button' onClick={() => this.inscrever(this.state.id)}> {t.project.info.btnSignOut} </button>
                                    :
                                    <button className='subscription-button' onClick={() => this.inscrever(this.state.id)}> {t.project.info.btnSignIn} </button>
                                }
                            </div> :
                            <>
                                {(this.state.status === "solicitação") || (this.state.status === "pendente") ?
                                    <div className="col-lg-4 col-12 subscription-column d-flex">
                                        <button className='subscription-button' onClick={() => { window.location.href = `/editproject/${this.state.id}` }}> {t.project.info.btnEdit} </button>
                                    </div>
                                    : <></>
                                }
                                {(this.state.status === "progresso") ?
                                    <div className="col-lg-4 col-12 subscription-column d-flex">
                                        <button className='subscription-button' onClick={() => { this.closeProject() }}> {t.project.info.btnEnd} </button>
                                    </div>
                                    : <></>
                                }
                            </>
                        }
                    </div>
                </header>

                <section className='project-header'>
                    <ul className="nav nav-tabs project-navbar" id="myTab" role="tablist">
                        <li className="item" role="presentation">
                            <button className="link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">{t.project.info.main.title}</button>
                        </li>
                        <li className="item" role="presentation">
                            <button className="link disabled pe-none" id="pictures-tab" data-bs-toggle="tab" data-bs-target="#pictures" type="button" role="tab" aria-controls="pictures" aria-selected="false">{t.project.info.pictures.title}</button>
                        </li>
                        <li className="item" role="presentation">
                            <button className="link" id="acoes-e-eventos-tab" data-bs-toggle="tab" data-bs-target="#acoes-e-eventos" type="button" role="tab" aria-controls="acoes-e-eventos" aria-selected="false">{t.project.info.posts.title}</button>
                        </li>
                        {(this.state.user.user._id === this.state.projectCreator) ?
                            <li className="item" role="presentation">
                                <button className="link" id="volunteers-tab" data-bs-toggle="tab" data-bs-target="#volunteers" type="button" role="tab" aria-controls="volunteers" aria-selected="false">{t.project.info.volunteers.title}</button>
                            </li> : <></>}
                        <li className="item" role="presentation">
                            <button className="link disabled pe-none" id="donations-tab" data-bs-toggle="tab" data-bs-target="#donations" type="button" role="tab" aria-controls="donations" aria-selected="false">{t.project.info.donations.title}</button>
                        </li>
                    </ul>
                </section>

                <section className="project-content">
                    <div className="tab-content" id="myTabContent">

                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <ProjectInfos description={this.state.description} status={this.state.status} startDate={this.state.startDate} endDate={this.state.endDate} where={this.state.where} quantityBenefited={this.state.quantityBenefited} quantityVolunteers={this.state.quantityVolunteers} volunteers={this.state.volunteers} />
                        </div>

                        <div className="tab-pane fade" id="pictures" role="tabpanel" aria-labelledby="pictures-tab">
                            <h1 className="mt-3"> conteudo de fotos </h1>
                        </div>

                        <div className="tab-pane fade" id="acoes-e-eventos" role="tabpanel" aria-labelledby="acoes-e-eventos-tab">
                            <Posts projectCreator={this.state.projectCreator} userId={this.state.user.user._id} />
                        </div>

                        <div className="tab-pane fade" id="volunteers" role="tabpanel" aria-labelledby="volunteers-tab">
                            <ProjectVolunteers projectId={this.state.id} />
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
