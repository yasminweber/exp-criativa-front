import React, { Component } from 'react';
import Helmet from 'react-helmet';
import HeaderHome from '../../components/Home/Header';
import api from '../../config/api'

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
        return (
            <div className='login-page'>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Nome - Entrar </title>
                </Helmet>

                <HeaderHome />

                <div className='container-fluid register-cover'></div>

                <div className="container-lg d-flex justify-content-center">
                    <div className="row register-content">
                        <div className="col-lg-5 col-12 title-column d-flex">
                            <h2 className="title mb-3"> Bem-Vindo(a) de Volta! </h2>
                            <p className="subtitle py-2"> Digite seu e-mail e senha para entrar! </p>

                            <div className="d-lg-block d-none">
                                <div className="d-flex flex-column align-items-center">
                                    <span className='hr'> </span>
                                    <span className='hr-text'> ou </span>
                                </div>

                                <h2 className='title login'> Ainda não tem uma conta? </h2>
                                <button className='login-button'> Quero me Cadastrar </button>
                            </div>
                        </div>

                        <div className="col-lg-7 col-12 d-flex justify-content-center form-column">
                            <form onSubmit={this.logar} className="form my-lg-0 my-5">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-floating mb-3">
                                            <input autoFocus type="email" className="form-control" id="email" placeholder="E-mail"
                                                onChange={(e) => this.setState({ email: e.target.value })} required />
                                            <label htmlFor="inputNome" className="form-label">E-mail</label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="password" placeholder="Senha"
                                                onChange={(e) => this.setState({ password: e.target.value })} required />
                                            <label htmlFor="inputNome" className="form-label">Senha</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <a href="/changePassword"> Esqueci minha senha </a>
                                    </div>

                                    <div className="col-12">
                                        <div className="enviar">
                                            <button type="submit" className="btn-1"> Entrar </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-12 d-lg-none special-1">
                            <h2 className='title login'> Ainda não tem uma conta? </h2>
                            <button className='login-button'> Quero me Cadastrar </button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login