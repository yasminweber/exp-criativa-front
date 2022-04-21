import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import moment from 'moment';

import { AiOutlineRight } from 'react-icons/ai'

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: "",
                lastName: "",
                cpf: "",
                birth: "",
                gender: "",
                email: "",
                password: "",
                passwordConfirmation: "",
            },
            error: ""
        }

        this.formData = this.formData.bind(this);
        this.checkboxData = this.checkboxData.bind(this);
        this.registerButtonClick = this.registerButtonClick.bind(this);
    }

    // Acompanha valores dos campos de cadastro
    formData(e) {
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({ form: form });
    }

    // Acompanha o gênero selecionado
    checkboxData(e) {
        let gender;

        if (e.target.id == "gender1") {
            gender = 1
        }
        if (e.target.id == "gender2") {
            gender = 2
        }
        if (e.target.id == "gender3") {
            gender = 3
        }

        let form = this.state.form;
        form['gender'] = gender
        this.setState({form: form})
    }

    // Validações e envio das informações para back
    registerButtonClick() {
        var error = false

        Object.keys(this.state.form).forEach((key) => {
            if ( this.state.form[key] == "" ) {
                error = true
            }
        });

        if (!error) {
            if (this.state.form.password != this.state.form.passwordConfirmation) {
                this.setState({error: "As senhas não correspondem!"})
                return
            }

            if (moment() < moment(this.state.form.birth).add(18, 'years')) {
                this.setState({error: "Para você se cadastrar precisa ter 18 anos completos!"})
                return
            }

            if (!document.getElementById("register-option1").checked) {
                this.setState({error: "Você precisa concordar com os Termos de Uso!"})
                return
            }
        } else {
            this.setState({error: "Verifique se todos os campos foram preenchidos!"})
            return
        }

        alert("Cadastre")
        this.setState({error: ""})
    }

    render() {
        return (
            <div class="register">

                <div className='register-content'>
                    <div class="container">
                        <div class="title">
                            <h2> Vamos começar! </h2>
                            <p> Você precisa apenas preencher os campos abaixo para fazer parte dessa comunidade! </p>
                            <hr />
                        </div>

                        <div class="row justify-content-center">
                            <div class="col-6">
                                <div className="form-field">
                                    <label> Primeiro nome: </label>
                                    <InputMask type="text" placeholder="Ex: João" name="name"
                                        value={this.state.form.name} onChange={this.formData} />
                                </div>

                            </div>

                            <div class="col-6">
                                <div className="form-field">
                                    <label> Último nome: </label>
                                    <InputMask type="text" placeholder="Ex: Batista" name="lastName"
                                        value={this.state.form.lastName} onChange={this.formData} />
                                </div>
                            </div>
                        </div>

                        <div class="row justify-content-center">
                            <div class="col-6">
                                <div className="form-field">
                                    <label> CPF: </label>
                                    <InputMask type="text" mask="999.999.999-99" placeholder='Apenas números' name="cpf"
                                        value={this.state.form.cpf} onChange={this.formData} />
                                </div>

                            </div>

                            <div class="col-6">
                                <div className="form-field">
                                    <label> Aniversário: </label>
                                    <InputMask type="date" name="birth" value={this.state.form.birth} onChange={this.formData} />
                                </div>
                            </div>
                        </div>

                        <span className="gender-span"> Com qual gênero você se identifica? </span>

                        <div class="row justify-content-center">
                            <div class="col-4">
                                <div className="gender-option">
                                    <InputMask type="radio" name="gender" id="gender1" onChange={this.checkboxData} />
                                    <label for="gender1"> Feminino </label>
                                </div>
                            </div>

                            <div class="col-4">
                                <div className="gender-option">
                                    <InputMask type="radio" name="gender" id="gender2" onChange={this.checkboxData}  />
                                    <label for="gender2"> Masculino </label>
                                </div>
                            </div>

                            <div class="col-4">
                                <div className="gender-option">
                                    <InputMask type="radio" name="gender" id="gender3" onChange={this.checkboxData}  />
                                    <label for="gender3"> Não Binário </label>
                                </div>
                            </div>
                        </div>

                        <div class="row justify-content-center">
                            <div class="col-12">
                                <div className="form-field">
                                    <label> Seu melhor e-mail: </label>
                                    <InputMask type="text" placeholder="Ex: joao.batista@mail.com" name="email"
                                        value={this.state.form.email} onChange={this.formData} />
                                </div>
                            </div>
                        </div>

                        <div class="row justify-content-center">
                            <div class="col-6">
                                <div className="form-field">
                                    <label> Crie uma senha: </label>
                                    <InputMask type="password" placeholder="**********" name="password"
                                        value={this.state.form.password} onChange={this.formData} />
                                </div>

                            </div>

                            <div class="col-6">
                                <div className="form-field">
                                    <label> Confirme a senha: </label>
                                    <InputMask type="password" placeholder="**********" name="passwordConfirmation"
                                        value={this.state.form.passwordConfirmation} onChange={this.formData} />
                                </div>
                            </div>
                        </div>

                        <div className="register-checks">
                            <div class="row justify-content-start">
                                <div class="col-12">
                                    <div className="register-option">
                                        <InputMask type="checkbox" name="register-option1" id="register-option1" />
                                        <label for="register-option1"> Concordo com os Termos de Uso e Política de Privacidade </label>
                                    </div>
                                </div>
                            </div>

                            <div class="row justify-content-start">
                                <div class="col-12">
                                    <div className="register-option">
                                        <InputMask type="checkbox" name="register-option2" id="register-option2" />
                                        <label for="register-option2"> Aceito receber informações de projetos por e-mail </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <span className="register-error"> {this.state.error} </span>

                        <div class="container">
                            <button className="register-button" onClick={this.registerButtonClick}> Finalizar Cadastro </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Register