import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            companyAccount: false,
            accountType: "",
            name: "",
            lastName: "",
            cpf: "",
            birth: "",
            email: "",
            gender: "",
            password: "",
            cnpj: "",
            razaoSocial: "",
        }
    }

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
                            <a href="/login"><button className='login-button'> Fazer Login  </button></a>
                        </div>

                        <div class="container-fluid col-7 form-column">
                            <div className='register-form'>
                                <div class="row mt-3">
                                    <div class="col-5">
                                        Conta Pessoal
                                    </div>
                                    <div class="col-2">
                                        <div className='switch-button'>
                                            <input type="checkbox" id="companyAccount" className='switch-input'
                                                onChange={(e) => { this.setState({ companyAccount: e.target.checked }) }} />
                                            <label className='switch-label' for="companyAccount"> </label>
                                        </div>

                                    </div>
                                    <div class="col-5">
                                        Conta Empresarial
                                    </div>
                                </div>

                                {this.state.companyAccount ?
                                    <div className="container">
                                        <div>
                                            <div class="row">
                                                <div class="col mx-auto mt-3">
                                                    <div class="col form-floating">
                                                        <input autoFocus type="text" class="form-control" id="cnpj" placeholder="CNPJ"
                                                            onChange={(e) => this.setState({ cnpj: e.target.value })} />
                                                        <label class="form-label"> CNPJ </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col mx-auto mt-3">
                                                    <div class="col form-floating">
                                                        <input type="text" class="form-control" id="razaoSocial" placeholder="Razão Social"
                                                            onChange={(e) => this.setState({ razaoSocial: e.target.value })} />
                                                        <label class="form-label"> Razão Social </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col mx-auto mt-3">
                                                    <div class="col form-floating">
                                                        <input type="email" class="form-control" id="email" placeholder="Nome"
                                                            onChange={(e) => this.setState({ email: e.target.value })} />
                                                        <label for="inputNome" class="form-label"> E-mail </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col mx-auto mt-3">
                                                    <div class="col form-floating">
                                                        <input type="password" class="form-control" id="name" placeholder="Nome"
                                                            onChange={(e) => this.setState({ password: e.target.value })} />
                                                        <label for="inputNome" class="form-label"> Senha </label>
                                                    </div>
                                                </div>

                                                <div class="col mx-auto mt-3">
                                                    <div class="col form-floating">
                                                        <input type="text" class="form-control" id="lastName" placeholder="Sobrenome"/>
                                                        <label for="inputNome" class="form-label"> Confirme a Senha </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row mt-3">
                                                <span className='hr'> </span>
                                                <span className='hr-text'> Administrador da Empresa </span>
                                            </div>

                                            <div class="row">
                                                <div class="col mx-auto mt-3">
                                                    <div class="col form-floating">
                                                        <input type="text" class="form-control" id="name" placeholder="Nome"
                                                            onChange={(e) => this.setState({ name: e.target.value })} />
                                                        <label for="inputNome" class="form-label"> Nome </label>
                                                    </div>
                                                </div>

                                                <div class="col mx-auto mt-3">
                                                    <div class="col form-floating">
                                                        <input type="text" class="form-control" id="lastName" placeholder="Sobrenome"
                                                            onChange={(e) => this.setState({ lastName: e.target.value })} />
                                                        <label for="inputNome" class="form-label"> Sobrenome </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="container">
                                        <div>
                                            <div class="row">
                                                <div class="col mx-auto mt-3">
                                                    <div class="col form-floating">
                                                        <input autoFocus type="text" class="form-control" id="name" placeholder="Nome"
                                                            onChange={(e) => this.setState({ name: e.target.value })} />
                                                        <label for="inputNome" class="form-label"> Nome </label>
                                                    </div>
                                                </div>

                                                <div class="col mx-auto mt-3">
                                                    <div class="col form-floating">
                                                        <input type="text" class="form-control" id="lastName" placeholder="Sobrenome"
                                                            onChange={(e) => this.setState({ lastName: e.target.value })} />
                                                        <label for="inputNome" class="form-label"> Sobrenome </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col mx-auto mt-3">
                                                    <div class="col form-floating">
                                                        <input type="text" class="form-control" id="cpf" placeholder="CPF"
                                                            onChange={(e) => this.setState({ cpf: e.target.value })} />
                                                        <label for="inputNome" class="form-label"> CPF </label>
                                                    </div>
                                                </div>

                                                <div class="col mx-auto mt-3">
                                                    <div class="col form-floating">
                                                        <input type="date" class="form-control" id="birth" placeholder="Sobrenome"
                                                            onChange={(e) => this.setState({ birth: e.target.value })} />
                                                        <label for="inputNome" class="form-label"> Data de Nascimento </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col mx-auto mt-3">
                                                    <div class="col form-floating">
                                                        <input type="email" class="form-control" id="email" placeholder="Nome"
                                                            onChange={(e) => this.setState({ email: e.target.value })} />
                                                        <label for="inputNome" class="form-label"> E-mail </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row mt-3'>
                                                <span> Com qual gênero você se identifica? </span>
                                            </div>

                                            <div className='row mt-3'>
                                                <div className='col'>
                                                    <input type='radio' id="gender1" name="gender" />
                                                    <label className='gender-label' for="gender1"> Feminino </label>
                                                </div>
                                                <div className='col'>
                                                    <input type='radio' id="gender2" name="gender" />
                                                    <label className='gender-label' for="gender2"> Masculino </label>
                                                </div>
                                                <div className='col'>
                                                    <input type='radio' id="gender3" name="gender" />
                                                    <label className='gender-label' for="gender3"> Não binário </label>
                                                </div>
                                            </div>

                                            <div class="row mt-2">
                                                <div class="col mx-auto mt-3">
                                                    <div class="col form-floating">
                                                        <input type="password" class="form-control" id="password" placeholder="Senha"
                                                            onChange={(e) => this.setState({ password: e.target.value })} />
                                                        <label for="inputNome" class="form-label"> Senha </label>
                                                    </div>
                                                </div>

                                                <div class="col mx-auto mt-3">
                                                    <div class="col form-floating">
                                                        <input type="password" class="form-control" id="lastName" placeholder="Confirme a Senha"
                                                            onChange={(e) => this.setState({ password: e.target.value })} />
                                                        <label for="inputNome" class="form-label"> Confirme a Senha </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>}


                                <div className='row mt-4'>
                                    <div className='col'>
                                        <button className='register-button' onClick={() => {console.log(this.state)}}> Finalizar cadastro </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        )
    }
}
export default Register