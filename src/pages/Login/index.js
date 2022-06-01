import React, { Component } from 'react';
import Helmet from 'react-helmet';
import HeaderHome from '../../components/Header/Home';
import api from '../../config/api'
import { translation } from '../../Helpers';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }

        this.logar = this.logar.bind(this);
    }

    async logar(e) {
        e.preventDefault();

        const user = {
            password: this.state.password,
            email: this.state.email
        }

        await api.post('/login', user)
            .then(res => {
                localStorage.setItem("TOKEN_KEY", res.data.token);
                window.location = '/meusInteresses';
            })
            .catch(err => {
                console.log(err);
                if (err.message === "Network Error") {
                    alert("Erro de conexão com o servidor")
                } else {
                    alert("Email ou senha incorretos")
                }
            });
    }

    render() {
        const t = translation(localStorage.getItem('language'));
        return (
            <div className='login-page'>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title> {t.login.title} </title>
                </Helmet>

                <HeaderHome />

                <div className='container-fluid register-cover'></div>

                <div className="container-lg d-flex justify-content-center">
                    <div className="row register-content">
                        <div className="col-lg-5 col-12 title-column d-flex">
                            <h2 className="title mb-3"> {t.login.title1} </h2>
                            <p className="subtitle py-2"> {t.login.sub1} </p>

                            <div className="d-lg-block d-none">
                                <div className="d-flex flex-column align-items-center">
                                    <span className='hr'> </span>
                                    <span className='hr-text'> ou </span>
                                </div>

                                <h2 className='title login'> {t.login.title2} </h2>
                                <button className='login-button' onClick={() => { window.location.href = '/cadastro' }}> {t.login.btn2} </button>
                            </div>
                        </div>

                        <div className="col-lg-7 col-12 d-flex justify-content-center form-column">
                            <form onSubmit={this.logar} className="form my-lg-0 my-5">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-floating mb-3">
                                            <input autoFocus type="email" className="form-control" id="email" placeholder={t.login.placeholder1}
                                                onChange={(e) => this.setState({ email: e.target.value })} required />
                                            <label htmlFor="inputNome" className="form-label">{t.login.placeholder1}</label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="password" placeholder={t.login.placeholder2}
                                                onChange={(e) => this.setState({ password: e.target.value })} required />
                                            <label htmlFor="inputNome" className="form-label">{t.login.placeholder2}</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <a href="/changePassword"> {t.login.sub2} </a>
                                    </div>

                                    <div className="col-12">
                                        <div className="enviar">
                                            <button type="submit" className="btn-1"> {t.login.btn1} </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-12 d-lg-none special-1">
                            <h2 className='title login'> {t.login.title2} </h2>
                            <button className='login-button' onClick={() => { window.location.href = '/cadastro' }}> {t.login.btn2} </button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login