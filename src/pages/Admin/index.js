import React, { Component } from 'react';
import Helmet from 'react-helmet';
import HeaderAdminOut from '../../components/Header/Admin/AdminOut';
import api from '../../config/api'
import { customAlert, translation } from '../../Helpers';

class AdminLogin extends Component {

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

        await api.post('/loginAdmin', user)
            .then(res => {
                localStorage.setItem("TOKEN_KEY", res.data.token);
                window.location = '/dashboard';
            })
            .catch(err => {
                console.log(err);
                if (err.message === "Network Error") {
                    customAlert(translation(localStorage.getItem('language')).error.network, "error");
                } else {
                    customAlert(translation(localStorage.getItem('language')).error.invalidCredentials, "error");
                }
            });
    }

    render() {
        return (
            <div className='login-admin'>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Painel Administrativo | All4One </title>
                </Helmet>

                <HeaderAdminOut />

                <div className="container-lg">
                    <div className="row mt-5">
                        <div className="col-12 mt-4">
                            <h1 className="title">Bem-vindo ao painel administrativo</h1>
                        </div>

                        <div className="col-md-5 col-12 mx-auto mt-4">
                            <div className="login py-4 mt-5">
                                <h1 className="form-title"> Entrar </h1>

                                <form onSubmit={this.logar} className="form-login mt-4 px-5">
                                    <div className="form-floating mb-3">
                                        <input autoFocus type="email" className="form-control" id="email" placeholder="E-mail"
                                            onChange={(e) => this.setState({ email: e.target.value })} required />
                                        <label htmlFor="inputNome" className="form-label">E-mail</label>
                                    </div>

                                    <div className="form-floating mb-4">
                                        <input type="password" className="form-control" id="password" placeholder="Senha"
                                            onChange={(e) => this.setState({ password: e.target.value })} required />
                                        <label htmlFor="inputNome" className="form-label">Senha</label>
                                    </div>

                                    <div className="enviar">
                                        <button type="submit" className="btn-1"> Entrar </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminLogin;
