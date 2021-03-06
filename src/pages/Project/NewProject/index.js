import React, { Component } from 'react';
import HeaderLogin from '../../../components/Header/User';
import Helmet from 'react-helmet';
import api from '../../../config/api'
import { customAlert, translation } from '../../../Helpers';
import Footer from '../../../components/Footer';

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
            projectImage: "https://firebasestorage.googleapis.com/v0/b/all4one-2f446.appspot.com/o/projects%2Fdefault_project.png?alt=media&token=9dc49334-ec20-487e-a5ca-d5b21aa4c9a0",
            status: "solicitação"
        }

        console.log(project)

        await api.post('/newProject', project);

        customAlert(translation(localStorage.getItem('language')).success.project, "success");
        window.setTimeout(function() {
            window.location.href = '/meusInteresses';
        }, 2000);
    }

    render() {
        const t = translation(localStorage.getItem('language'));
        return (
            <div className="newProject">

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{t.project.newProject.title}</title>
                </Helmet>

                <HeaderLogin />

                <section className="banner-titulo">
                    <div className="container-xl">
                        <div className="row text-lg-start text-center">
                            <div className="col-12">
                                <h1 className="titulo-1">{t.project.newProject.title1}</h1>
                                <p className="descricao">{t.project.newProject.sub1}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="form pb-5">
                    <div className="container-lg">
                        <div className="row">
                            <div className="col-lg-8 col-12 mx-auto">
                                <form className="projectForm" onSubmit={this.createProject}>
                                    <div className="text-start">
                                        <div className="mb-3 form-floating mb-3">
                                            <input autoFocus type="text" className="form-control" id="inputNome" placeholder={t.project.form.name}
                                                onChange={(e) => this.setState({ projectName: e.target.value })} required />
                                            <label htmlFor="inputNome" className="form-label">{t.project.form.name}</label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <select className="form-select" id="selectCause"
                                                aria-label="Default select example"
                                                onChange={(e) => this.setState({ cause: e.target.value })} required >
                                                <option key={0} value={""}> {t.project.form.selectCause} </option>
                                                {this.state.causes.map(function (cause) {
                                                    return <option key={cause} value={cause}> {cause}
                                                    </option>;
                                                })
                                                }
                                            </select>
                                            <label htmlFor="selectCause" className="form-label">{t.project.form.causes}</label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="inputWhere" placeholder={t.project.form.localization}
                                                onChange={(e) => this.setState({ where: e.target.value })} required />
                                            <label htmlFor="inputWhere" className="form-label">{t.project.form.localization}</label>
                                        </div>

                                        <div className="row form-data">
                                            <div className="col-md form-floating mb-3">
                                                <input type="date" className="form-control" id="dateStart"
                                                    onChange={(e) => this.setState({ startDate: e.target.value })} required />
                                                <label htmlFor="dateStart" className="form-label">{t.project.form.startDate}</label>
                                            </div>

                                            <div className="col-md form-floating mb-3">
                                                <input type="date" className="form-control" id="dateEnd"
                                                    onChange={(e) => this.setState({ endDate: e.target.value })} />
                                                <label htmlFor="dateEnd" className="form-label">{t.project.form.endDate}</label>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-column">
                                            <div className="form-floating mb-3 order-md-0 order-1">
                                                <textarea className="form-control" id="floatingTextarea2" placeholder={t.project.form.description}
                                                    onChange={(e) => this.setState({ description: e.target.value })} required />
                                                <label htmlFor="floatingTextarea2">{t.project.form.description}</label>
                                            </div>

                                            <div className="row form-quantidades order-md-1 order-0">
                                                <div className="col-md form-floating mb-3">
                                                    <input type="number" className="form-control" id="inputBenefited" placeholder={t.project.form.qntBenefited}
                                                        onChange={(e) => this.setState({ quantityBenefited: e.target.value })} required />
                                                    <label htmlFor="inputBenefited" className="form-label">{t.project.form.qntBenefited}</label>
                                                </div>

                                                <div className="col-md form-floating mb-3">
                                                    <input type="number" className="form-control" id="inputVolunteers" placeholder={t.project.form.qntVolunteers}
                                                        onChange={(e) => this.setState({ quantityVolunteers: e.target.value })} required />
                                                    <label htmlFor="inputVolunteers" className="form-label">{t.project.form.qntVolunteers}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="enviar mt-3">
                                        <button type="submit" className="btn-1">{t.project.form.btn1}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />

            </div>

        )
    }
}

export default NewProject
