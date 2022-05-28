import React, { Component } from 'react';
import HeaderLogin from '../../components/Header/User';
import Helmet from 'react-helmet';
import { currentUrl, dateInput } from '../../Helpers'
import api from '../../config/api';
import { decodeToken } from '../../config/auth';

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
                //console.log(this.state.causes)
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
                    status: data.status
                });
                console.log("Projeto carregado");

                this.checkUser()
            })
            .catch((error) => {
                console.log("erro carregar projeto ", error)
                alert('Erro para carregar o projeto');
            })
    }

    checkUser() {
        if (this.state.creator !== "waitingSetState") {
            if (this.state.user.user._id === this.state.creator) {
                console.log("É o mesmo user")
            } else {
                console.log("Não é o mesmo user")
                alert("Desculpe, mas você não tem permissão para editar esse projeto")
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
            status: this.state.status
        }

        console.log(project);

        await api.put(`/project/${this.state.id}`, project);

        alert("Projeto atualizado com sucesso");
        window.location = '/profile';
    }

    async deleteProject() {
        await api.delete(`/project/${this.state.id}`)
            .then(() => {
                alert("Projeto apagado");
                window.location = '/profile';
            })
            .catch((error) => {
                console.log(error)
                alert('Erro para deletar projeto');
            })
    }

    render() {
        return (
            <div className="newProject">

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Editar Projeto</title>
                </Helmet>

                <HeaderLogin />

                <section className="banner-titulo">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8 col-12 text-lg-start text-center">
                                <h1 className="titulo-1">Editar projeto</h1>
                                <p className="descricao">Colocar qualquer texto que não seja esse de criar novo projeto</p>
                            </div>
                            <div className="col-md-4 col-12 d-flex flex-column-reverse flex-wrap-reverse align-items-end mt-md-0 mt-4">
                                <button className="btn-1" onClick={() => { if (window.confirm('Tem certeza que deseja deletar esse projeto?')) this.deleteProject() }}> Apagar projeto </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="form">
                    <div className="container-lg">
                        <div className="row">
                            <div className="col-lg-8 col-12 mx-auto">
                                <div className="projectForm">
                                    <div className="text-start">
                                        <div className="mb-3 form-floating">
                                            <input type="text" className="form-control" id="inputNome" placeholder="Nome"
                                                onChange={(e) => this.setState({ projectName: e.target.value })}
                                                value={this.state.projectName} required />
                                            <label htmlFor="inputNome" className="form-label">Nome</label>
                                        </div>

                                        <div className="mb-3 form-floating">
                                            <select className="form-select" id="selectCause"
                                                aria-label="Default select example"
                                                onChange={(e) => this.setState({ cause: e.target.value })}
                                                value={this.state.cause} required >
                                                <option key={0} value={""}> Selecionar causa </option>
                                                {this.state.causes.map(function (cause) {
                                                    return <option key={cause} value={cause}> {cause} </option>;
                                                })
                                                }
                                            </select>
                                            <label htmlFor="selectCause" className="form-label">Causas</label>
                                        </div>

                                        <div className="mb-3 form-floating">
                                            <input type="text" className="form-control" id="inputWhere" placeholder="Localização (bairro)"
                                                onChange={(e) => this.setState({ where: e.target.value })}
                                                value={this.state.where} required />
                                            <label htmlFor="inputWhere" className="form-label">Localização (bairro)</label>
                                        </div>

                                        <div className="row form-data">
                                            <div className="col-md mb-3 form-floating">
                                                <input type="date" className="form-control" id="dateStart"
                                                    onChange={(e) => this.setState({ startDate: e.target.value })}
                                                    value={dateInput(this.state.startDate)} required />
                                                <label htmlFor="dateStart" className="form-label">Data inicio</label>
                                            </div>

                                            <div className="col-md mb-3 form-floating">
                                                <input type="date" className="form-control" id="dateEnd"
                                                    onChange={(e) => this.setState({ endDate: e.target.value })}
                                                    value={dateInput(this.state.endDate)} />
                                                <label htmlFor="dateEnd" className="form-label">Data fim</label>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-column">
                                            <div className="mb-3 form-floating order-md-0 order-1">
                                                <textarea className="form-control" id="floatingTextarea2" placeholder="Descrição"
                                                    onChange={(e) => this.setState({ description: e.target.value })}
                                                    value={this.state.description} required />
                                                <label htmlFor="floatingTextarea2">Descrição</label>
                                            </div>

                                            <div className="row form-quantidades order-md-1 order-0">
                                                <div className="col-md form-floating mb-3">
                                                    <input type="number" className="form-control" id="inputBenefited" placeholder="Quantidade estimada beneficiados"
                                                        onChange={(e) => this.setState({ quantityBenefited: e.target.value })}
                                                        value={this.state.quantityBenefited} required />
                                                    <label htmlFor="inputBenefited" className="form-label">Quantidade estimado beneficiados</label>
                                                </div>

                                                <div className="col-md form-floating mb-3">
                                                    <input type="number" className="form-control" id="inputVolunteers" placeholder="Quantidade de voluntários"
                                                        onChange={(e) => this.setState({ quantityVolunteers: e.target.value })}
                                                        value={this.state.quantityVolunteers} required />
                                                    <label htmlFor="inputVolunteers" className="form-label">Quantidade de voluntários</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="enviar mt-3">
                                        <button type="submit" className="btn-1" onClick={this.updateProject}>Enviar</button>
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

