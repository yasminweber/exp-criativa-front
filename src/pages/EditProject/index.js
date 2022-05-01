import React, { Component } from 'react';
import HeaderLogin from '../../components/Header';
import Helmet from 'react-helmet';
import { currentUrl, dateInput } from '../../Helpers'
import api from '../../config/api';

class EditProject extends Component {

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
        }

        this.updateProject = this.updateProject.bind(this);
        this.deletePost = this.deletePost.bind(this);
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
                console.log("Projeto carregado");
            })
            .catch((error) => {
                console.log("erro carregar projeto ", error)
                alert('Erro para carregar o projeto');
            })
    }

    async updateProject(e) {
        e.preventDefault();

        const project = {
            projectName: this.state.projectName,
            category: this.state.category,
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
        window.location = '/dashboard';
    }

    async deletePost() {
        await api.delete(`/project/${this.state.id}`)
            .then(() => {
                alert("Projeto apagado");
                window.location = '/dashboard';
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
                        <div className="row text-lg-start text-center">
                            <div className="col-12">
                                <h1 className="titulo-1">Editar projeto</h1>
                                <p className="descricao">Colocar qualquer texto que não seja esse de criar novo projeto</p>
                                <button type="submit" onClick={this.deletePost}>apagar projeto</button>
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
                                                value={this.state.projectName}
                                                onChange={(e) => this.setState({ projectName: e.target.value })} />
                                            <label for="inputNome" className="form-label">Nome</label>
                                        </div>

                                        <div className="mb-3 form-floating">
                                            <select className="form-select" id="selectCategory"
                                                aria-label="Default select example"
                                                value={this.state.category} disabled >
                                                <option defaultValue>Selecione uma opção</option>
                                                <option value="empoderamentoFeminino">empoderamentoFeminino</option>
                                                <option value="doacoes">doacoes</option>
                                                <option value="fome">fome</option>
                                                <option value="saude">saude</option>
                                                <option value="meioAmbiente">meioAmbiente</option>
                                            </select>
                                            <label for="selectCategory" className="form-label">Categoria</label>
                                        </div>

                                        <div className="mb-3 form-floating">
                                            <input type="text" className="form-control" id="inputWhere" placeholder="Localização (bairro)"
                                                value={this.state.where}
                                                onChange={(e) => this.setState({ where: e.target.value })} />
                                            <label for="inputWhere" className="form-label">Localização (bairro)</label>
                                        </div>

                                        <div className="row form-data">
                                            <div className="col-md mb-3 form-floating">
                                                <input type="date" className="form-control" id="dateStart"
                                                    value={dateInput(this.state.startDate)}
                                                    onChange={(e) => this.setState({ startDate: e.target.value })} />
                                                <label for="dateStart" className="form-label">Data inicio</label>
                                            </div>

                                            <div className="col-md mb-3 form-floating">
                                                <input type="date" className="form-control" id="dateEnd"
                                                    value={dateInput(this.state.endDate)}
                                                    onChange={(e) => this.setState({ endDate: e.target.value })} />
                                                <label for="dateEnd" className="form-label">Data fim</label>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-column">
                                            <div className="mb-3 form-floating order-md-0 order-1">
                                                <textarea className="form-control" id="floatingTextarea2" placeholder="Descrição"
                                                    value={this.state.description}
                                                    onChange={(e) => this.setState({ description: e.target.value })} />
                                                <label for="floatingTextarea2">Descrição</label>
                                            </div>

                                            <div className="row form-quantidades order-md-1 order-0">
                                                <div className="col-md mb-3 form-floating">
                                                    <select className="form-select" id="selectBenefited"
                                                        aria-label="Default select example"
                                                        value={this.state.quantityBenefited}
                                                        onChange={(e) => this.setState({ quantityBenefited: e.target.value })} >
                                                        <option defaultValue>Selecione uma opção</option>
                                                        <option value="0-10">0-10</option>
                                                        <option value="11-25">11-25</option>
                                                        <option value="26-50">26-50</option>
                                                        <option value="51-100">51-100</option>
                                                        <option value="101-150">101-150</option>
                                                        <option value="Outro">Outro</option>
                                                    </select>
                                                    <label for="selectBenefited" className="form-label">Quantidade estimado beneficiados</label>
                                                </div>

                                                <div className="col-md mb-3 form-floating">
                                                    <select className="form-select" id="selectVolunteers"
                                                        aria-label="Default select example"
                                                        value={this.state.quantityVolunteers}
                                                        onChange={(e) => this.setState({ quantityVolunteers: e.target.value })} >
                                                        <option defaultValue>Selecione uma opção</option>
                                                        <option value="0-10">0-10</option>
                                                        <option value="11-25">11-25</option>
                                                        <option value="26-50">26-50</option>
                                                        <option value="51-100">51-100</option>
                                                        <option value="101-150">101-150</option>
                                                        <option value="Outro">Outro</option>
                                                    </select>
                                                    <label for="selectVolunteers" className="form-label">Quantidade de voluntários</label>
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

