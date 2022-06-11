import React, { Component } from 'react';
import { Popover } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import { BsInfoCircle } from 'react-icons/bs'
import CategoryCardProfile from './CategoryCard';
import { dateInput } from '../../../Helpers'
import api from '../../../config/api'
import { decodeToken } from '../../../config/auth';

const popoverCompanyAccount = (
    <Popover id="popover-trigger-hover-focus" title="Popover bottom" style={{
        backgroundColor: "rgb(219, 219, 219)",
        textAlign: 'center',
        padding: '10px'
    }} >
        Seu tipo de conta não pode ser alterado! <br /> Se deseja atribuir um projeto pessoal a uma conta empresarial, procure as opções de moderadores do projeto!
    </Popover>
);

class MyAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: decodeToken(),
            companyAccount: false,
            causes: [],
            selectedCauses: [],
            causeList: [],
            infos: {
                name: "",
                lastName: "",
                cpf: "",
                birth: "",
                email: "",
                gender: "",
            },
            editMode: false
        }

        this.categoryClick = this.categoryClick.bind(this);
        this.loadCauses = this.loadCauses.bind(this);
        this.radioChange = this.radioChange.bind(this);
        this.editClick = this.editClick.bind(this);
        this.getUser = this.getUser.bind(this);
        this.formData = this.formData.bind(this);
    }

    componentDidMount() {
        // Busca causas cadastradas no banco para montar tabela
        this.loadCauses();

        // Busca Informações do usuário
        this.getUser()
    }

    // Atualiza state quando alterado valores de input
    formData(e) {
        let form = this.state.infos
        form[e.target.name] = e.target.value
        this.setState({ infos: form })
    }

    // Busca as informações do usuário de acordo com o token
    getUser() {
        // Monta objeto com informações do usuário
        let userInfos = {
            name: decodeToken().user.name,
            lastName: decodeToken().user.lastName,
            cpf: decodeToken().user.cpf,
            birth: decodeToken().user.birthDate,
            email: decodeToken().user.email,
            gender: decodeToken().user.gender,
        }
        let selected = decodeToken().user.selectedCauses

        // Atualiza o state de informações do usuário
        this.setState({ infos: userInfos, selectedCauses: selected }, () => {

            // Marca qual é o gênero cadastrado
            if (this.state.infos.gender === "Feminino") {
                document.getElementById("gender1").setAttribute("checked", "true")
            } else if (this.state.infos.gender === "Masculino") {
                document.getElementById("gender2").setAttribute("checked", "true")
            } else if (this.state.infos.gender === "Não binário") {
                document.getElementById("gender3").setAttribute("checked", "true")
            }
        })
    }

    // Atualiza o state de gênero com novo gênero selecionado
    radioChange(e) {
        let gender;

        if (e.target.id === "gender1") {
            gender = "Feminino"
        } else if (e.target.id === "gender2") {
            gender = "Masculino"
        } else if (e.target.id === "gender3") {
            gender = "Não binário"
        }

        this.setState(prevState => {
            let infos = Object.assign({}, prevState.infos);
            infos.gender = gender;
            return { infos };
        }, () => { console.log(this.state.infos) })
    }

    // Monta a tabela de causas, marcando as causas favoritas
    async loadCauses() {

        // Busca causas do banco
        api.get('/cause').then(res => {
            if (res.data.length > 0) {

                // Atualiza states com lista de todas as causas
                this.setState({
                    causes: res.data.map(cause => cause.cause),
                }, () => {
                    // Monta array de itens da tabela
                    let list = []
                    Array.from(this.state.causes).forEach((cause) => {
                        list.push(<CategoryCardProfile clickFunction={this.categoryClick} category={cause}
                            selected={this.state.selectedCauses.includes(cause)} />)
                    })
                    this.setState({ causeList: list })
                })
            }
        })
    }

    // Função de clicar em um item da tabela de causas.
    categoryClick(category) {
        if (!this.state.editMode) {
            alert("Para alterar as categorias preferidas, ative o modo de edição")
            return
        }

        let selectedList = this.state.selectedCauses

        if (selectedList.indexOf(category) !== -1) {
            selectedList.splice(selectedList.indexOf(category), 1)
            return true
        } else {
            if (selectedList.length >= 5) {
                alert("Você já selecionou 5 categorias!")
                return false
            } else {
                selectedList.push(category)
            }
            this.setState({ selectedCauses: selectedList })
            return true
        }
    }

    // Função de clicar no botão de editar
    async editClick(e) {
        e.preventDefault();
        if (this.state.editMode) {
            this.setState({ editMode: false })

            // Aqui função para dar update no banco
            const user = {
                name: this.state.infos.name,
                lastName: this.state.infos.lastName,
                birthDate: this.state.infos.birth,
                email: this.state.infos.email,
                gender: this.state.infos.gender,
                selectedCauses: this.state.selectedCauses
            }

            console.log(user);

            await api.put(`/user/${this.state.user.user._id}`, user)
                .then(() => {
                    alert("deu certo pra alterar as informações")
                })
                .catch((error) => {
                    console.log(error)
                    alert("não conseguimos atualizar suas informações. Por favor tente novamente mais tarde.")
                });

            await api.get(`/changeToken/${this.state.user.user._id}`)
                .then((res) => {
                    localStorage.setItem("TOKEN_KEY", res.data);
                })
                .catch((err) => {
                    //alert("Erro para trocar token");
                    console.log(err)
                })
        }
        else {
            this.setState({ editMode: true })
        }
    }

    render() {
        return (
            <div>
                <section>
                    <h2 className='section-title'> Meus Dados </h2>
                    <h4 className='section-subtitle mt-2'> Acompanhe ou atualize seus dados cadastrados! </h4>

                    <hr />

                    <div className='container-lg account-type'>
                        <h5 className='type-title'> Você se cadastrou como uma conta {this.state.companyAccount ? "empresarial" : "pessoal."}  </h5>
                        <OverlayTrigger
                            trigger={['hover', 'focus']}
                            placement="bottom"
                            overlay={popoverCompanyAccount}>

                            <span className='popover-icon'> <BsInfoCircle /> </span>
                        </OverlayTrigger>
                    </div>

                    <form className="container-lg" id="userInfos">
                        <div className="row">
                            <div className="col-sm-12 col-lg mx-auto mt-3">
                                <div className="col form-floating">
                                    <input type="text" className="form-control" id="inputName" placeholder="Nome" name="name"
                                        value={this.state.infos.name} onChange={this.formData} required disabled={!this.state.editMode} />
                                    <label htmlFor="inputName" className="form-label"> Nome </label>
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg mx-auto mt-3">
                                <div className="col form-floating">
                                    <input type="text" className="form-control" id="inputLastName" placeholder="Sobrenome" name="lastName"
                                        value={this.state.infos.lastName} onChange={this.formData} required disabled={!this.state.editMode} />
                                    <label htmlFor="inputLastName" className="form-label"> Sobrenome </label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-lg mx-auto mt-3">
                                <div className="col form-floating">
                                    <input type="text" className="form-control" id="inputCpf" placeholder="CPF" name="cpf"
                                        value={this.state.infos.cpf} onChange={this.formData} required disabled={!this.state.editMode} />
                                    <label htmlFor="inputCpf" className="form-label"> CPF </label>
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg mx-auto mt-3">
                                <div className="col form-floating">
                                    <input type="date" className="form-control" id="inputBirth" placeholder="Data de Nascimento" name="birth"
                                        value={dateInput(this.state.infos.birth)} onChange={this.formData} required disabled={!this.state.editMode} />
                                    <label htmlFor="inputBirth" className="form-label"> Data de Nascimento </label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col mx-auto mt-3">
                                <div className="col form-floating">
                                    <input type="email" className="form-control" id="inputEmail" placeholder="Email" name="email"
                                        value={this.state.infos.email} onChange={this.formData} required disabled={!this.state.editMode} />
                                    <label htmlFor="inputEmail" className="form-label"> E-mail </label>
                                </div>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <span> Com qual gênero você se identifica? </span>
                        </div>

                        <div className='row mt-3'>
                            <div className='col'>
                                <input type='radio' id="gender1" name="gender" onClick={this.radioChange} disabled={!this.state.editMode} />
                                <label className='gender-label' htmlFor="gender1"> Feminino </label>
                            </div>
                            <div className='col'>
                                <input type='radio' id="gender2" name="gender" onChange={this.radioChange} disabled={!this.state.editMode} />
                                <label className='gender-label' htmlFor="gender2"> Masculino </label>
                            </div>
                            <div className='col'>
                                <input type='radio' id="gender3" name="gender" onChange={this.radioChange} disabled={!this.state.editMode} />
                                <label className='gender-label' htmlFor="gender3"> Não binário </label>
                            </div>
                        </div>
                    </form>

                    {/* <div className='row mt-4'>
                        <div className='col'>
                            <button className='register-button' onClick={() => {this.setState({editMode: !this.state.editMode})}}>
                                {this.state.editMode ? "Salvar Alterações" : "Editar Dados"} 
                            </button>
                        </div>
                    </div> */}
                </section>

                <section className='my-5 category-section'>
                    <h2 className='section-title'> Minhas Categorias Favoritas </h2>
                    <h4 className='section-subtitle mt-2'> Utilizamos essa informações para te recomendar projetos que sejam sua cara! <br />Lembre-se, você pode selecionar no máximo 5 categorias!</h4>

                    <hr />

                    <div className="container-lg col-md-8 col-12">
                        <div className="row">
                            {this.state.causeList}
                        </div>
                    </div>

                    {/* <div className='row mt24'>
                        <div className='col'>
                            <button className='register-button' onClick={() => {this.setState({editMode: !this.state.editMode})}}> 
                                {this.state.editMode ? "Salvar Alterações" : "Alterar Categorias"} 
                            </button>
                        </div>
                    </div> */}
                </section>

                <div className='row mb-5'>
                    <div className='col'>
                        <button className='register-button' form="userInfos" onClick={this.editClick}>
                            {this.state.editMode ? "Salvar Alterações" : "Editar Meus Dados"}
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}

export default MyAccount

