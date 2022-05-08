import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import CategoryCard from '../../components/Register/CategoryCard';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            companyAccount: false,
            form: {
                // Comum entre os tipos
                name: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",

                // Pessoais
                cpf: "",
                birth: "",
                gender: "",

                // Empresariais
                cnpj: "",
                razaoSocial: "",
            },
            selectedCauses: [],
        }

        this.formData = this.formData.bind(this);
        this.categoryClick = this.categoryClick.bind(this);
        this.accountTypeChange = this.accountTypeChange.bind(this);
        this.formSend = this.formSend.bind(this);
        this.finishClick = this.finishClick.bind(this);
    }

    formData(e) {
        let form = this.state.form
        form[e.target.name] = e.target.value;
        this.setState({ form: form });
    }

    accountTypeChange(e) {
        this.setState({ companyAccount: !this.state.companyAccount }, () => {
            if (this.state.companyAccount) {
                Array.from(document.getElementsByClassName('personal-input')).forEach((doc) =>
                    doc.disabled = true
                );
                document.getElementById('personalForm').classList.add("d-none")


                Array.from(document.getElementsByClassName('company-input')).forEach((doc) =>
                    doc.disabled = false
                );
                document.getElementById('companyForm').classList.remove("d-none")

            } else {
                Array.from(document.getElementsByClassName('company-input')).forEach((doc) =>
                    doc.disabled = true
                );
                document.getElementById('companyForm').classList.add("d-none")


                Array.from(document.getElementsByClassName('personal-input')).forEach((doc) =>
                    doc.disabled = false
                );
                document.getElementById('personalForm').classList.remove("d-none")
            }

        })
    }

    categoryClick(category) {
        let selectedList = this.state.selectedCauses

        if (selectedList.indexOf(category) != -1) {
            selectedList.splice(selectedList.indexOf(category), 1)
            return true
        } else {
            if (selectedList.length >= 5) {
                alert("Você já selecionou 5 categorias!")
                return false
            } else {
                selectedList.push(category)
            }
            this.setState({ selectedCauses: selectedList }, () => { console.log(this.state.selectedCauses) })
            return true
        }
    }

    async formSend(e) {
        e.preventDefault()
        
        if (this.state.form.password == this.state.form.confirmPassword) {
            document.getElementById('form-fields').classList.add('d-none')
            document.getElementById('category-column').classList.remove('d-none')
        } else {
            alert("As senhas não correspondem!")
        }
    }

    finishClick() {
        // AQUI VAI A FUNÇÃO PARA INTEGRAR COM O BACK
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
                            <div id="form-fields" className='container-lg'>
                                <form className="row form-register" onSubmit={this.formSend}>

                                    {/* Account Type Switch Button */}
                                    <div class="row">
                                        <div class="col-5">
                                            Conta Pessoal
                                        </div>
                                        <div class="col-2">
                                            <div className='switch-button'>
                                                <input type="checkbox" id="companyAccount" className='switch-input'
                                                    onChange={(e) => { this.accountTypeChange(e) }} />
                                                <label className='switch-label' for="companyAccount"> </label>
                                            </div>

                                        </div>
                                        <div class="col-5">
                                            Conta Empresarial
                                        </div>
                                    </div>

                                    {/* Campos para cadastro pessoal */}
                                    <section id="personalForm">
                                        <div className='row mt-3'>
                                            {/* Nome */}
                                            <div className='col-6'>
                                                <div class="form-floating">
                                                    <input type="text" class="form-control personal-input" name="name" placeholder="Nome"
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.name} required />
                                                    <label class="form-label"> Nome </label>
                                                </div>
                                            </div>

                                            {/* Sobrenome */}
                                            <div className='col-6'>
                                                <div class="form-floating">
                                                    <input type="Sobrenome" class="form-control personal-input" name="lastName" placeholder="Sobrenome"
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.lastName} required />
                                                    <label class="form-label"> Sobrenome </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row mt-3'>
                                            {/* CPF */}
                                            <div className='col-6'>
                                                <div class="form-floating">
                                                    <input type="text" class="form-control personal-input" name="cpf" placeholder="CPF"
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.cpf} required />
                                                    <label class="form-label"> CPF </label>
                                                </div>
                                            </div>

                                            {/* Data de Nascimento */}
                                            <div className='col-6'>
                                                <div class="form-floating">
                                                    <input type="date" class="form-control personal-input" name="birth" placeholder="Data de Nascimento"
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.birth} required />
                                                    <label class="form-label"> Data de Nascimento </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row mt-3'>
                                            {/* Email */}
                                            <div className='col-12'>
                                                <div class="form-floating">
                                                    <input type="email" class="form-control personal-input" name="email" placeholder="E-mail"
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.email} required />
                                                    <label class="form-label"> E-mail </label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Gênero */}
                                        <div className='row mt-3'>
                                            <span> Com qual gênero você se identifica? </span>
                                        </div>

                                        <div className='row mt-3'>
                                            <div className='col'>
                                                <input className="personal-input" type='radio' id="gender1" name="gender"
                                                    onChange={(e) => { this.setState({ gender: 0 }) }} required />
                                                <label className='gender-label' for="gender1"> Feminino </label>
                                            </div>
                                            <div className='col'>
                                                <input className="personal-input" type='radio' id="gender2" name="gender"
                                                    onChange={(e) => { this.setState({ gender: 1 }) }} required />
                                                <label className='gender-label' for="gender2"> Masculino </label>
                                            </div>
                                            <div className='col'>
                                                <input className="personal-input" type='radio' id="gender3" name="gender"
                                                    onChange={(e) => { this.setState({ gender: 2 }) }} required />
                                                <label className='gender-label' for="gender3"> Não binário </label>
                                            </div>
                                        </div>

                                        <div className='row mt-3'>
                                            {/* Senha */}
                                            <div className='col-6'>
                                                <div class="form-floating">
                                                    <input type="password" class="form-control personal-input" name="password" placeholder="Senha"
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.password} required />
                                                    <label class="form-label"> Senha </label>
                                                </div>
                                            </div>

                                            {/* Confirmar Senha */}
                                            <div className='col-6'>
                                                <div class="form-floating">
                                                    <input type="password" class="form-control personal-input" name="confirmPassword" placeholder="Confirme a Senha"
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.confirmPassword} required />
                                                    <label class="form-label"> Confirme a Senha </label>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Campos para cadastro empresarial */}
                                    <section id='companyForm' className='d-none'>
                                        <div className='row mt-3'>
                                            {/* CNPJ */}
                                            <div className='col-12'>
                                                <div class="form-floating">
                                                    <input type="text" class="form-control company-input" name="cnpj" placeholder="CNPJ"
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.cnpj} required disabled />
                                                    <label class="form-label"> CNPJ </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row mt-3'>
                                            {/* Razao Social */}
                                            <div className='col-12'>
                                                <div class="form-floating">
                                                    <input type="text" class="form-control company-input" name="razaoSocial" placeholder="Razão Social"
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.razaoSocial} required disabled />
                                                    <label class="form-label"> Razão Social </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row mt-3'>
                                            {/* Email */}
                                            <div className='col-12'>
                                                <div class="form-floating">
                                                    <input type="email" class="form-control company-input" name="email" placeholder="E-mail"
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.email} required disabled />
                                                    <label class="form-label"> E-mail </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row mt-3'>
                                            {/* Senha */}
                                            <div className='col-6'>
                                                <div class="form-floating">
                                                    <input type="password" class="form-control company-input" name="password" placeholder="Senha"
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.password} required disabled />
                                                    <label class="form-label"> Senha </label>
                                                </div>
                                            </div>

                                            {/* Confirmar Senha */}
                                            <div className='col-6'>
                                                <div class="form-floating">
                                                    <input type="password" class="form-control company-input" name="confirmPassword" placeholder="Confirme a Senha"
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.confirmPassword} required disabled />
                                                    <label class="form-label"> Confirme a Senha </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-3">
                                            <span className='hr'> </span>
                                            <span className='hr-text'> Administrador da Empresa </span>
                                        </div>

                                        <div className='row mt-3'>
                                            {/* Nome */}
                                            <div className='col-6'>
                                                <div class="form-floating">
                                                    <input type="text" class="form-control company-input" name="name" placeholder="Nome"
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.name} required disabled />
                                                    <label class="form-label"> Nome </label>
                                                </div>
                                            </div>

                                            {/* Sobrenome */}
                                            <div className='col-6'>
                                                <div class="form-floating">
                                                    <input type="Sobrenome" class="form-control company-input" name="lastName" placeholder="Sobrenome"
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.lastName} required disabled />
                                                    <label class="form-label"> Sobrenome </label>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <div className='row mt-4'>
                                        <div class="col-12">
                                            <button class="register-button btn btn-primary" type="submit"> Continuar </button>
                                        </div>
                                    </div>
                                </form>
                            </div>


                            <section id="category-column" className='category-column d-none'>
                                <div className='row'>
                                    <h2 className='category-title'> Seus interesses </h2>
                                    {this.state.companyAccount ?
                                        <p className='mt-3'> Selecione as 5 categorias de projetos que mais se encaixam com sua empresa. </p>
                                        :
                                        <p className='mt-3'> Selecione as 5 categorias de projetos que você mais se identifica. <br /> Usaremos isso para mostrar projetos que mais combinam com você! </p>
                                    }
                                </div>

                                <div class="container category-buttons">
                                    <div class="row">
                                        <CategoryCard clickFunction={this.categoryClick} category="Empoderamento Feminino" />
                                        <CategoryCard clickFunction={this.categoryClick} category="Doações" />
                                        <CategoryCard clickFunction={this.categoryClick} category="Fome" />
                                        <CategoryCard clickFunction={this.categoryClick} category="Saúde" />

                                        <CategoryCard clickFunction={this.categoryClick} category="Maus Tratos aos Animais" />
                                        <CategoryCard clickFunction={this.categoryClick} category="Meio Ambiente" />
                                        <CategoryCard clickFunction={this.categoryClick} category="Inclusão Social" />
                                        <CategoryCard clickFunction={this.categoryClick} category="Educação" />

                                        <CategoryCard clickFunction={this.categoryClick} category="Um Teste" />
                                        <CategoryCard clickFunction={this.categoryClick} category="Um Teste Maior" />
                                        <CategoryCard clickFunction={this.categoryClick} category="Testando tamanho de texto" />
                                        <CategoryCard clickFunction={this.categoryClick} category="Aqui é o último teste" />

                                    </div>
                                </div>

                                <div className='row mt-4'>
                                        <div class="col-12">
                                            <button class="register-button btn btn-primary" type="submit" onClick={this.finishClick}> Finalizar Cadastro </button>
                                        </div>
                                    </div>
                            </section>



                        </div>
                    </div>
                </div>

            </section>

        )
    }
}

export default Register