//import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import api from '../../config/api'
import CategoryCard from '../../components/Register/CategoryCard';
import { customAlert, translation } from '../../Helpers';
import HeaderHome from '../../components/Header/Home';

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
                gender: ""
            },
            selectedCauses: [],
            causeList: [],
        }

        this.formData = this.formData.bind(this);
        this.categoryClick = this.categoryClick.bind(this);
        this.accountTypeChange = this.accountTypeChange.bind(this);
        this.formSend = this.formSend.bind(this);
        this.finishClick = this.finishClick.bind(this);
        this.loadCauses = this.loadCauses.bind(this);
    }

    componentDidMount() {
        this.loadCauses();
        console.log(this.state.causes)
    }

    async loadCauses() {
        api.get('/cause').then(res => {
            console.log("causes", res.data)
            if (res.data.length > 0) {
                this.setState({
                    causes: res.data.map(cause => cause.cause),
                    // selectedCauses: this.props.causes
                }, () => {
                    let list = []

                    Array.from(this.state.causes).forEach((cause) => {
                        list.push(<CategoryCard clickFunction={this.categoryClick} category={cause} 
                            selected={this.state.selectedCauses.includes(cause)} />)
                    })
                    this.setState({ causeList: list })
                })
            }
        })
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

        if (selectedList.indexOf(category) !== -1) {
            selectedList.splice(selectedList.indexOf(category), 1)
            return true
        } else {
            if (selectedList.length >= 5) {
                customAlert(translation(localStorage.getItem('language')).warning.userCategory, "warning");
                return false
            } else {
                selectedList.push(category)
            }
            this.setState({ selectedCauses: selectedList })
            return true
        }
    }

    async formSend(e) {
        e.preventDefault()

        if (this.state.form.password === this.state.form.confirmPassword) {
            document.getElementById('form-fields').classList.add('d-none')
            document.getElementById('category-column').classList.remove('d-none')
        } else {
            customAlert(translation(localStorage.getItem('language')).warning.password, "warning");
        }
    }

    async finishClick() {

        let genero = ""
        if (this.state.gender === 0) {
            genero = "Feminino"
        } else if (this.state.gender === 1) {
            genero = "Masculino"
        } else {
            genero = "Não binário"
        }

        const user = {
            name: this.state.form.name,
            lastName: this.state.form.lastName,
            email: this.state.form.email,
            password: this.state.form.password,
            cpf: this.state.form.cpf,
            birthDate: this.state.form.birth,
            gender: genero,
            selectedCauses: this.state.selectedCauses,
            status: "ativo",
            profileImage: "https://firebasestorage.googleapis.com/v0/b/all4one-2f446.appspot.com/o/users%2Fdefault_user.jpg?alt=media&token=0a93a6f0-3226-4aed-82bc-bd57db59a5cf"
        }

        // console.log(user)

        await api.post('/register', user);

        customAlert(translation(localStorage.getItem('language')).success.register, "success");
        window.setTimeout(function () {
            window.location.href = '/login';
        }, 2000);
    }

    render() {
        const t = translation(localStorage.getItem('language'));
        return (
            <section className='register-page pb-5'>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title> {t.register.title} </title>
                </Helmet>

                <HeaderHome />

                <div className='container-fluid register-cover'> </div>

                <div className="container register-content">
                    <div className="row">
                        <div className="col-md-4 col-12 title-column">
                            <h2 className='title title mt-md-0 mt-5'> {t.register.title1} </h2>
                            <p className='subtitle'> {t.register.sub1} </p>
                            <p className='subtitle mb-md-0 mb-4'> {t.register.sub2} </p>

                            <div className="d-md-block d-none">
                                <span className='hr'> </span>
                                <span className='hr-text'> ou </span>

                                <h2 className='title login'> {t.register.title2} </h2>
                                <p className='subtitle-login'> {t.register.sub3} </p>
                                <a href="/login">
                                    <button className='login-button'> {t.register.btn1} </button>
                                </a>
                            </div>
                        </div>

                        <div className="container-fluid col-md-7 col-12 form-column">
                            <div id="form-fields" className='container-lg'>
                                <form className="row form-register" onSubmit={this.formSend}>

                                    {/* Campos para cadastro pessoal */}
                                    <section id="personalForm">
                                        <div className='row mt-5'>
                                            {/* Nome */}
                                            <div className='col-md-6 col-12 mb-md-0 mb-3'>
                                                <div className="form-floating">
                                                    <input type="text" className="form-control personal-input" name="name" placeholder={t.register.part1.name}
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.name} required />
                                                    <label className="form-label"> {t.register.part1.name} </label>
                                                </div>
                                            </div>

                                            {/* Sobrenome */}
                                            <div className='col-md-6 col-12'>
                                                <div className="form-floating">
                                                    <input type="Sobrenome" className="form-control personal-input" name="lastName" placeholder={t.register.part1.surname}
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.lastName} required />
                                                    <label className="form-label"> {t.register.part1.surname} </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row mt-3'>
                                            {/* CPF */}
                                            <div className='col-md-6 col-12 mb-md-0 mb-3'>
                                                <div className="form-floating">
                                                    <input type="text" className="form-control personal-input" name="cpf" placeholder={t.register.part1.cpf}
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.cpf} required />
                                                    <label className="form-label"> {t.register.part1.cpf} </label>
                                                </div>
                                            </div>

                                            {/* Data de Nascimento */}
                                            <div className='col-md-6 col-12'>
                                                <div className="form-floating">
                                                    <input type="date" className="form-control personal-input" name="birth" placeholder={t.register.part1.birthDate}
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.birth} required />
                                                    <label className="form-label"> {t.register.part1.birthDate} </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row mt-3'>
                                            {/* Email */}
                                            <div className='col-12'>
                                                <div className="form-floating">
                                                    <input type="email" className="form-control personal-input" name="email" placeholder={t.register.part1.email}
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.email} required />
                                                    <label className="form-label"> {t.register.part1.email} </label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Gênero */}
                                        <div className='row mt-3'>
                                            <span> {t.register.part1.gender.title} </span>
                                        </div>

                                        <div className='row mt-3'>
                                            <div className='col'>
                                                <input className="personal-input" type='radio' id="gender1" name="gender"
                                                    onChange={(e) => { this.setState({ gender: 0 }) }} required />
                                                <label className='gender-label' htmlFor="gender1"> {t.register.part1.gender.op1} </label>
                                            </div>
                                            <div className='col'>
                                                <input className="personal-input" type='radio' id="gender2" name="gender"
                                                    onChange={(e) => { this.setState({ gender: 1 }) }} required />
                                                <label className='gender-label' htmlFor="gender2"> {t.register.part1.gender.op2} </label>
                                            </div>
                                            <div className='col'>
                                                <input className="personal-input" type='radio' id="gender3" name="gender"
                                                    onChange={(e) => { this.setState({ gender: 2 }) }} required />
                                                <label className='gender-label' htmlFor="gender3"> {t.register.part1.gender.op3} </label>
                                            </div>
                                        </div>

                                        <div className='row mt-3'>
                                            {/* Senha */}
                                            <div className='col-md-6 col-12 mb-md-0 mb-3'>
                                                <div className="form-floating">
                                                    <input type="password" className="form-control personal-input" name="password" placeholder={t.register.part1.password}
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.password} required />
                                                    <label className="form-label"> {t.register.part1.password} </label>
                                                </div>
                                            </div>

                                            {/* Confirmar Senha */}
                                            <div className='col-md-6 col-12'>
                                                <div className="form-floating">
                                                    <input type="password" className="form-control personal-input" name="confirmPassword" placeholder={t.register.part1.repeatPassword}
                                                        onChange={(e) => { this.formData(e) }} value={this.state.form.confirmPassword} required />
                                                    <label className="form-label"> {t.register.part1.repeatPassword} </label>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <div className='row mt-4 mb-5'>
                                        <div className="col-12">
                                            <button className="register-button btn btn-primary" type="submit"> {t.register.part1.btn1} </button>
                                        </div>
                                    </div>
                                </form>
                            </div>


                            <section id="category-column" className='category-column d-none'>
                                <div className='row'>
                                    <h2 className='category-title'> {t.register.part2.title} </h2>
                                    {this.state.companyAccount ?
                                        <p className='mt-3'> {t.register.part2.sub1} </p>
                                        :
                                        <p className='mt-3'> {t.register.part2.sub2} <br /> {t.register.part2.sub3} </p>
                                    }
                                </div>

                                <div className="container category-buttons">
                                    <div className="row">
                                        {this.state.causeList}
                                    </div>
                                </div>

                                <div className='row mt-4'>
                                    <div className="col-12">
                                        <button className="register-button btn btn-primary" type="submit" onClick={this.finishClick}> {t.register.part2.btn1} </button>
                                    </div>
                                </div>
                            </section>

                        </div>

                        <div className="col-md-4 col-12 d-md-none title-column">
                            <h2 className='title login'> {t.register.title2} </h2>
                            <p className='subtitle-login'> {t.register.sub3} </p>
                            <a href="/login">
                                <button className='login-button'> {t.register.btn1} </button>
                            </a>
                        </div>

                    </div>
                </div>

            </section>
        )
    }
}

export default Register