import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Register extends Component {

    render() {
        return (
            <section className='register-page'>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Nome - Cadastre-se </title>
                </Helmet>

                <div className='container-fluid register-cover'> </div>

                <div class="container register-content">
                    <div class="row">
                        <div class="col-4 title-column">
                            <h2 className='title'> Vamos Começar! </h2>

                            <p className='subtitle'> Para se cadastrar, basta preencher os campos ao lado! </p>
                            <p className='subtitle'> Fácil assim, você pode começar a ver os projetos sociais! </p>

                            <span className='hr'> </span>
                            <span className='hr-text'> ou </span>

                            <h2 className='title login'> Já tem uma conta? </h2>
                            <p className='subtitle-login'> Clique no botão abaixo para entrar com seus dados! </p>
                            <button className='login-button'> Fazer Login </button>

                        </div>
                        <div class="col-8">col-4</div>
                    </div>
                </div>

            </section>

        )
    }
}
export default Register