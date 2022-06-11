import React, { Component } from 'react';
import HeaderLogin from '../../components/Header/User';
import Helmet from 'react-helmet';
import api from '../../config/api'

class NewProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projectName: "",
            causes: [],
            cause: "",
            where: "",
            startDate: new Date(),
            endDate: new Date(),
            description: "",
            quantityBenefited: "",
            quantityVolunteers: ""
        }

        this.componentDidMount = () => {
            this.loadCauses();
        }

        this.createProject = this.createProject.bind(this);
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

    async createProject(e) {
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

        console.log(project)

        await api.post('/newProject', project);

        alert("A sua ideia de projeto foi enviada. Aguarde a aprovação!");
        window.location = '/meusInteresses';
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
                                <p className="descricao">Por favor preencha as informações para solicitar um novo projeto</p>
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
                                                onChange={(e) => this.setState({ projectName: e.target.value })} required />
                                            <label htmlFor="inputNome" className="form-label">Nome</label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <select className="form-select" id="selectCause"
                                                aria-label="Default select example"
                                                onChange={(e) => this.setState({ cause: e.target.value })} required >
                                                <option key={0} value={""}> Selecionar causa </option>
                                                {this.state.causes.map(function (cause) {
                                                    return <option key={cause} value={cause}> {cause}
                                                    </option>;
                                                })
                                                }
                                            </select>
                                            <label htmlFor="selectCause" className="form-label">Causas</label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="inputWhere" placeholder="Localização (bairro)"
                                                onChange={(e) => this.setState({ where: e.target.value })} required />
                                            <label htmlFor="inputWhere" className="form-label">Localização (bairro)</label>
                                        </div>

                                        <div className="row form-data">
                                            <div className="col-md form-floating mb-3">
                                                <input type="date" className="form-control" id="dateStart"
                                                    onChange={(e) => this.setState({ startDate: e.target.value })} required />
                                                <label htmlFor="dateStart" className="form-label">Data inicio</label>
                                            </div>

                                            <div className="col-md form-floating mb-3">
                                                <input type="date" className="form-control" id="dateEnd"
                                                    onChange={(e) => this.setState({ endDate: e.target.value })} />
                                                <label htmlFor="dateEnd" className="form-label">Data fim</label>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-column">
                                            <div className="form-floating mb-3 order-md-0 order-1">
                                                <textarea className="form-control" id="floatingTextarea2" placeholder="Descrição"
                                                    onChange={(e) => this.setState({ description: e.target.value })} required />
                                                <label htmlFor="floatingTextarea2">Descrição</label>
                                            </div>

                                            <div className="row form-quantidades order-md-1 order-0">
                                                <div className="col-md form-floating mb-3">
                                                    <input type="number" className="form-control" id="inputBenefited" placeholder="Quantidade estimada beneficiados"
                                                        onChange={(e) => this.setState({ quantityBenefited: e.target.value })} required />
                                                    <label htmlFor="inputBenefited" className="form-label">Quantidade estimado beneficiados</label>
                                                </div>

                                                <div className="col-md form-floating mb-3">
                                                    <input type="number" className="form-control" id="inputVolunteers" placeholder="Quantidade de voluntários"
                                                        onChange={(e) => this.setState({ quantityVolunteers: e.target.value })} required />
                                                    <label htmlFor="inputVolunteers" className="form-label">Quantidade de voluntários</label>
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