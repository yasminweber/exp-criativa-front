import React, { Component } from 'react';
import HeaderLogin from '../../components/Header';
import Helmet from 'react-helmet';
import api from '../../config/api'

class NewProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projectName: "",
            category: "",
            where: "",
            startDate: new Date(),
            endDate: new Date(),
            description: "",
            quantityBenefited: "",
            quantityVolunteers: "",
            projectColor: ""
        }

        this.createProject = this.createProject.bind(this);
    }

    async createProject(e) {
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
            projectColor: this.state.projectColor,
            status: "aberto"
        }

        console.log(project)

        await api.post('/newProject', project);

        alert("A sua ideia de projeto foi enviada com sucesso");
        window.location = '/dashboard';
    }

    render() {
        return (
            <div className="newProject">

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Novo Projeto</title>
                </Helmet>

                <HeaderLogin />

                <section className="banner-titulo">
                    <div className="container-fluid">
                        <div className="row text-lg-start text-center">
                            <div className="col-12">
                                <h1 className="titulo-1">Novo projeto</h1>
                                <p className="descricao">Por favor preencha as informações para enviar um novo projeto</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="form">
                    <div className="container-lg">
                        <div className="row">
                            <div className="col-lg-8 col-12 mx-auto">
                                <form className="projectForm" onSubmit={this.createProject}>
                                    <div className="text-start">
                                        <div className="mb-3 form-floating mb-3">
                                            <input autoFocus type="text" className="form-control" id="inputNome" placeholder="Nome"
                                                onChange={(e) => this.setState({ projectName: e.target.value })} />
                                            <label for="inputNome" className="form-label">Nome</label>
                                        </div>

                                        <div className="row form-cat-color">
                                            <div className="col-md-8 form-floating mb-3">
                                                <select className="form-select" id="selectCategory"
                                                    aria-label="Default select example"
                                                    onChange={(e) => this.setState({ category: e.target.value })} >
                                                    <option defaultValue>Selecione uma opção</option>
                                                    <option value="empoderamentoFeminino">empoderamentoFeminino</option>
                                                    <option value="doacoes">doacoes</option>
                                                    <option value="fome">fome</option>
                                                    <option value="saude">saude</option>
                                                    <option value="meioAmbiente">meioAmbiente</option>
                                                </select>
                                                <label for="selectCategory" className="form-label">Categoria</label>
                                            </div>
                                            <div className="col-md mb-3">
                                                <label for="exampleColorInput" class="form-label">Escolha a cor do projeto</label>
                                                <input type="color" class="form-control form-control-color" id="exampleColorInput" value={this.state.projectColor} title="Choose your color" onChange={(e) => this.setState({ projectColor: e.target.value })}></input>
                                            </div>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="inputWhere" placeholder="Localização (bairro)"
                                                onChange={(e) => this.setState({ where: e.target.value })} />
                                            <label for="inputWhere" className="form-label">Localização (bairro)</label>
                                        </div>

                                        <div className="row form-data">
                                            <div className="col-md form-floating mb-3">
                                                <input type="date" className="form-control" id="dateStart"
                                                    onChange={(e) => this.setState({ startDate: e.target.value })} />
                                                <label for="dateStart" className="form-label">Data inicio</label>
                                            </div>

                                            <div className="col-md form-floating mb-3">
                                                <input type="date" className="form-control" id="dateEnd"
                                                    onChange={(e) => this.setState({ endDate: e.target.value })} />
                                                <label for="dateEnd" className="form-label">Data fim</label>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-column">
                                            <div className="form-floating mb-3 order-md-0 order-1">
                                                <textarea className="form-control" id="floatingTextarea2" placeholder="Descrição"
                                                    onChange={(e) => this.setState({ description: e.target.value })} />
                                                <label for="floatingTextarea2">Descrição</label>
                                            </div>

                                            <div className="row form-quantidades order-md-1 order-0">
                                                <div className="col-md form-floating mb-3">
                                                    <select className="form-select" id="selectBenefited"
                                                        aria-label="Default select example"
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

                                                <div className="col-md form-floating mb-3">
                                                    <select className="form-select" id="selectVolunteers"
                                                        aria-label="Default select example"
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
                                        <button type="submit" className="btn-1">Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        )
    }
}
export default NewProject