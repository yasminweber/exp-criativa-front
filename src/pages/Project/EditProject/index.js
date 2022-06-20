import React, { Component } from 'react';
import Helmet from 'react-helmet';
import HeaderLogin from '../../../components/Header/User';
import { currentUrl, dateInput } from '../../../Helpers'
import api from '../../../config/api';
import { decodeToken } from '../../../config/auth';
import { translation, customAlert } from '../../../Helpers';

class EditProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: decodeToken(),
            id: "",
            projectName: "",
            causes: [],
            cause: "",
            where: "",
            startDate: new Date(),
            endDate: new Date(),
            description: "",
            quantityBenefited: "",
            quantityVolunteers: "",
            creator: "waitingSetState",
            improvement: "",
            status: ""
        }

        this.componentDidMount = () => {
            this.getProject();
            this.loadCauses();
        }

        this.updateProject = this.updateProject.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
    }

    async loadCauses() {
        api.get('/cause').then(res => {
            if (res.data.length > 0) {
                this.setState({
                    causes: res.data.map(cause => cause.cause),
                    cause: res.data[0].cause
                })
            }
        })
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
                    creator: data.creator._id,
                    improvement: data.improvement,
                    status: data.status
                });
                console.log("Projeto carregado");

                this.checkUser()
            })
            .catch((error) => {
                console.log("erro carregar projeto ", error)
                customAlert(translation(localStorage.getItem('language')).error.loadProject, "error");
            })
    }

    checkUser() {
        if (this.state.creator !== "waitingSetState") {
            if (this.state.user.user._id === this.state.creator) {
                console.log("É o mesmo user")
            } else {
                console.log("Não é o mesmo user")
                customAlert(translation(localStorage.getItem('language')).error.permission, "error");
                window.location.href = "/meusInteresses"
            }
        }
    }

    async updateProject(e) {
        e.preventDefault();

        const project = {
            projectName: this.state.projectName,
            cause: this.state.cause,
            where: this.state.where,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            description: this.state.description,
            quantityBenefited: this.state.quantityBenefited,
            quantityVolunteers: this.state.quantityVolunteers,
            status: "solicitação"
        }

        console.log(project);

        await api.put(`/project/${this.state.id}`, project)
        .then(() => {
            customAlert(translation(localStorage.getItem('language')).success.projectUpdate, "success");
            window.setTimeout(function() {
                window.location.href = '/profile';
            }, 2000)
        }).catch((error) => {
            console.log(error)
            customAlert(translation(localStorage.getItem('language')).error.updateProject, "error");
        });
    }

    async deleteProject() {
        await api.delete(`/project/${this.state.id}`)
            .then(() => {
                customAlert(translation(localStorage.getItem('language')).success.projectDelete, "success");
                window.setTimeout(function() {
                    window.location.href = '/profile';
                }, 2000)
            })
            .catch((error) => {
                console.log(error)
                customAlert(translation(localStorage.getItem('language')).error.deleteProject, "error");
            })
    }

    render() {
        const t = translation(localStorage.getItem('language'));
        return (
            <div className="newProject">

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{t.project.editProject.title}</title>
                </Helmet>

                <HeaderLogin />

                <section className="banner-titulo">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-md-8 col-12 text-lg-start text-center">
                                <h1 className="titulo-1">{t.project.editProject.title1}</h1>
                            </div>
                            <div className="col-md-4 col-12 d-flex flex-column-reverse align-items-end mt-md-0 mt-4">
                                <button className="btn-1" onClick={() => { if (window.confirm('Tem certeza que deseja deletar esse projeto?')) this.deleteProject() }}> {t.project.editProject.btn1} </button>
                            </div>
                        </div>
                    </div>

                    {(this.state.improvement !== "" && this.state.status === "pendente") ?
                        <div className="container">
                            <div className="row my-4">
                                <div className="col-12 text-start">
                                    <h2 className="titulo-2 mb-3">{t.project.editProject.title2}</h2>
                                    <p style={{border: "1px solid", padding: "10px"}}>{this.state.improvement}</p>
                                </div>
                            </div>
                        </div>
                        : <></>
                    }
                </section>

                <section className="form pb-5">
                    <div className="container-lg">
                        <div className="row">
                            <div className="col-lg-8 col-12 mx-auto">
                                <div className="projectForm">
                                    <div className="text-start">
                                        <div className="mb-3 form-floating">
                                            <input type="text" className="form-control" id="inputNome" placeholder={t.project.form.name}
                                                onChange={(e) => this.setState({ projectName: e.target.value })}
                                                value={this.state.projectName} required />
                                            <label htmlFor="inputNome" className="form-label">{t.project.form.name}</label>
                                        </div>

                                        <div className="mb-3 form-floating">
                                            <select className="form-select" id="selectCause"
                                                aria-label="Default select example"
                                                onChange={(e) => this.setState({ cause: e.target.value })}
                                                value={this.state.cause} required >
                                                <option key={0} value={""}> {t.project.form.selectCause} </option>
                                                {this.state.causes.map(function (cause) {
                                                    return <option key={cause} value={cause}> {cause} </option>;
                                                })
                                                }
                                            </select>
                                            <label htmlFor="selectCause" className="form-label">{t.project.form.causes}</label>
                                        </div>

                                        <div className="mb-3 form-floating">
                                            <input type="text" className="form-control" id="inputWhere" placeholder={t.project.form.localization}
                                                onChange={(e) => this.setState({ where: e.target.value })}
                                                value={this.state.where} required />
                                            <label htmlFor="inputWhere" className="form-label">{t.project.form.localization}</label>
                                        </div>

                                        <div className="row form-data">
                                            <div className="col-md mb-3 form-floating">
                                                <input type="date" className="form-control" id="dateStart"
                                                    onChange={(e) => this.setState({ startDate: e.target.value })}
                                                    value={dateInput(this.state.startDate)} required />
                                                <label htmlFor="dateStart" className="form-label">{t.project.form.startDate}</label>
                                            </div>

                                            <div className="col-md mb-3 form-floating">
                                                <input type="date" className="form-control" id="dateEnd"
                                                    onChange={(e) => this.setState({ endDate: e.target.value })}
                                                    value={dateInput(this.state.endDate)} />
                                                <label htmlFor="dateEnd" className="form-label">{t.project.form.endDate}</label>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-column">
                                            <div className="mb-3 form-floating order-md-0 order-1">
                                                <textarea className="form-control" id="floatingTextarea2" placeholder="Descrição"
                                                    onChange={(e) => this.setState({ description: e.target.value })}
                                                    value={this.state.description} required />
                                                <label htmlFor="floatingTextarea2">{t.project.form.description}</label>
                                            </div>

                                            <div className="row form-quantidades order-md-1 order-0">
                                                <div className="col-md form-floating mb-3">
                                                    <input type="number" className="form-control" id="inputBenefited" placeholder={t.project.form.qntBenefited}
                                                        onChange={(e) => this.setState({ quantityBenefited: e.target.value })}
                                                        value={this.state.quantityBenefited} required />
                                                    <label htmlFor="inputBenefited" className="form-label">{t.project.form.qntBenefited}</label>
                                                </div>

                                                <div className="col-md form-floating mb-3">
                                                    <input type="number" className="form-control" id="inputVolunteers" placeholder={t.project.form.qntVolunteers}
                                                        onChange={(e) => this.setState({ quantityVolunteers: e.target.value })}
                                                        value={this.state.quantityVolunteers} required />
                                                    <label htmlFor="inputVolunteers" className="form-label">{t.project.form.qntVolunteers}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="enviar mt-3">
                                        <button type="submit" className="btn-1" onClick={this.updateProject}>{t.common.send}</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default EditProject
