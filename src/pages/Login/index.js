import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Login extends Component {

    render() {
        return (
            <section className='login-page'>

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
                            <p className='subtitle-login'> Clique no botão abaixo e cadastre-se agora mesmo! </p>
                            <button className='login-button'> Quero me Cadastrar </button>

                        </div>
                        <div class="col-7">col-4</div>
                    </div>
                </div>

            </section>

        )
    }
}
export default Login