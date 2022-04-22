import React, { Component } from 'react';
import HeaderLogin from '../../components/Header';
import Helmet from 'react-helmet';

class NewProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projectName: "",
            category: "",
            where: "",
            startDate: new Date(),
            endDate: new Date(),
            quantityBenefited: "",
            quantityVolunteers: ""
        }
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
                                <h1 class="titulo-1">Novo projeto</h1>
                                <p class="descricao">Por favor preencha as informações para enviar um novo projeto</p>
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
                                        <div class="mb-3 form-floating">
                                            <input autoFocus type="text" class="form-control" id="inputNome" placeholder="Nome"
                                                onChange={(e) => this.setState({ projectName: e.target.value })} />
                                            <label for="inputNome" class="form-label">Nome</label>
                                        </div>

                                        <div class="mb-3 form-floating">
                                            <select class="form-select" id="selectCategory"
                                                aria-label="Default select example"
                                                onChange={(e) => this.setState({ category: e.target.value })} >
                                                <option defaultValue>Selecione uma opção</option>
                                                <option value="empoderamentoFeminino">empoderamentoFeminino</option>
                                                <option value="doacoes">doacoes</option>
                                                <option value="fome">fome</option>
                                                <option value="saude">saude</option>
                                                <option value="meioAmbiente">meioAmbiente</option>
                                            </select>
                                            <label for="selectCategory" class="form-label">Categoria</label>
                                        </div>

                                        <div class="mb-3 form-floating">
                                            <input type="text" class="form-control" id="inputWhere" placeholder="Localização (bairro)"
                                                onChange={(e) => this.setState({ where: e.target.value })} />
                                            <label for="inputWhere" class="form-label">Localização (bairro)</label>
                                        </div>

                                        <div class="row form-data">
                                            <div class="col-md mb-3 form-floating">
                                                <input type="date" class="form-control" id="dateStart"
                                                    onChange={(e) => this.setState({ startDate: e.target.value })} />
                                                <label for="dateStart" class="form-label">Data inicio</label>
                                            </div>

                                            <div class="col-md mb-3 form-floating">
                                                <input type="date" class="form-control" id="dateEnd"
                                                    onChange={(e) => this.setState({ endDate: e.target.value })} />
                                                <label for="dateEnd" class="form-label">Data fim</label>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-column">
                                            <div class="mb-3 form-floating order-md-0 order-1">
                                                <textarea class="form-control" id="floatingTextarea2" placeholder="Descrição"
                                                    onChange={(e) => this.setState({ description: e.target.value })} />
                                                <label for="floatingTextarea2">Descrição</label>
                                            </div>

                                            <div class="row form-quantidades order-md-1 order-0">
                                                <div class="col-md mb-3 form-floating">
                                                    <select class="form-select" id="selectBenefited"
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
                                                    <label for="selectBenefited" class="form-label">Quantidade estimado beneficiados</label>
                                                </div>

                                                <div class="col-md mb-3 form-floating">
                                                    <select class="form-select" id="selectVolunteers"
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
                                                    <label for="selectVolunteers" class="form-label">Quantidade de voluntários</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="enviar mt-3">
                                        <button type="submit" class="btn-1">Enviar</button>
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
export default NewProject