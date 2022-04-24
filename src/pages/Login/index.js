import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        return (
            <div className='login-page'>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Nome - Entrar </title>
                </Helmet>

                <div className='container-fluid register-cover'> </div>

                <div class="container register-content">
                    <div class="row">
                        <div class="col-5 title-column">
                            <h2 className='title'> Bem-Vindo(a) de Volta! </h2>

                            <p className='subtitle'> Digite seu e-mail e senha para entrar! </p>

                            <span className='hr'> </span>
                            <span className='hr-text'> ou </span>

                            <h2 className='title login'> Ainda não tem uma conta? </h2>
                            <button className='login-button'> Quero me Cadastrar </button>

                        </div>

                        <div class="container-fluid col-7 form-column">
                            <section className="form">
                                <div className="projectForm">
                                    <div className='row'>
                                        <div className='col'>
                                            <div class="mb-3 form-floating">
                                                <input autoFocus type="email" class="form-control" id="email" placeholder="E-mail"
                                                    onChange={(e) => this.setState({ email: e.target.value })} />
                                                <label for="inputNome" class="form-label">E-mail</label>
                                            </div>

                                            <div class="mb-3 form-floating">
                                                <input type="password" class="form-control" id="password" placeholder="Senha"
                                                    onChange={(e) => this.setState({ password: e.target.value })} />
                                                <label for="inputNome" class="form-label">Senha</label>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col'>
                                                <a href="#"> Esqueci minha senha </a>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col'>
                                                <div className="enviar">
                                                    <button type="submit" class="btn-1"> Entrar </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Login