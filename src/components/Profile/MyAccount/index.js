import React, { Component } from 'react';
import { Popover } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import { BsInfoCircle } from 'react-icons/bs'
import CategoryCardProfile from './CategoryCard';
import { dateInput } from '../../../Helpers'

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
            companyAccount: false,
            selectedCauses: []
        }

        this.componentDidMount = () => {
            this.setState({
                selectedCauses: props.causes
            })
        }

        this.categoryClick = this.categoryClick.bind(this)
    }

    categoryClick(category) {
        let selectedList = this.state.selectedCauses
        
        if (selectedList.indexOf(category) !== -1) {
            selectedList.splice(selectedList.indexOf(category), 1)
            console.log("retirou categoria:", category)
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

                    <div className="container-lg">
                        <div className="row">
                            <div className="col-sm-12 col-lg mx-auto mt-3">
                                <div className="col form-floating">
                                    <input type="text" className="form-control" id="inputName" placeholder="Nome"
                                        onChange={(e) => this.setState({ name: e.target.value })}
                                        value={this.props.name} required />
                                    <label htmlFor="inputName" className="form-label"> Nome </label>
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg mx-auto mt-3">
                                <div className="col form-floating">
                                    <input type="text" className="form-control" id="inputLastName" placeholder="Sobrenome"
                                        onChange={(e) => this.setState({ lastName: e.target.value })}
                                        value={this.props.lastName} required />
                                    <label htmlFor="inputLastName" className="form-label"> Sobrenome </label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-lg mx-auto mt-3">
                                <div className="col form-floating">
                                    <input type="text" className="form-control" id="inputCpf" placeholder="CPF"
                                        onChange={(e) => this.setState({ cpf: e.target.value })}
                                        value={this.props.cpf} disabled />
                                    <label htmlFor="inputCpf" className="form-label"> CPF </label>
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg mx-auto mt-3">
                                <div className="col form-floating">
                                    <input type="date" className="form-control" id="inputBirth" placeholder="Sobrenome"
                                        onChange={(e) => this.setState({ birth: e.target.value })}
                                        value={(dateInput(this.props.birthDate))} />
                                    <label htmlFor="inputBirth" className="form-label"> Data de Nascimento </label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col mx-auto mt-3">
                                <div className="col form-floating">
                                    <input type="email" className="form-control" id="inputEmail" placeholder="Email"
                                        onChange={(e) => this.setState({ email: e.target.value })}
                                        value={this.props.email} disabled />
                                    <label htmlFor="inputEmail" className="form-label"> E-mail </label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col mx-auto mt-3">
                                <div className="col form-floating">
                                    <input type="phone" className="form-control" id="inputPhone" placeholder="Telefone"
                                        onChange={(e) => this.setState({ email: e.target.value })} />
                                    <label htmlFor="inputPhone" className="form-label"> Telefone Celular </label>
                                </div>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <span> Com qual gênero você se identifica? </span>
                        </div>

                        <div className='row mt-3'>
                            <div className='col'>
                                <input type='radio' id="gender1" name="gender" onChange={(e) => { this.setState({ gender: 0 }) }} />
                                <label className='gender-label' htmlFor="gender1"> Feminino </label>
                            </div>
                            <div className='col'>
                                <input type='radio' id="gender2" name="gender" onChange={(e) => { this.setState({ gender: 1 }) }} />
                                <label className='gender-label' htmlFor="gender2"> Masculino </label>
                            </div>
                            <div className='col'>
                                <input type='radio' id="gender3" name="gender" onChange={(e) => { this.setState({ gender: 2 }) }} />
                                <label className='gender-label' htmlFor="gender3"> Não binário </label>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col'>
                            <button className='register-button' onClick={this.nextClick}> Editar Dados </button>
                        </div>
                    </div>
                </section>

                <section className='mt-5'>
                    <h2 className='section-title'> Minha Senha </h2>
                    <h4 className='section-subtitle mt-2'> Atualize sua senha periodicamente para mais segurança! </h4>

                    <hr />

                    <div className='container-lg'>
                        <div className="row mt-2">
                            <div className="col-sm-12 col-lg mx-auto mt-3">
                                <div className="col form-floating">
                                    <input type="password" className="form-control" id="password" placeholder="Senha"
                                        onChange={(e) => this.setState({ password: e.target.value })}
                                        value={this.props.password} />
                                    <label htmlFor="inputNome" className="form-label"> Senha </label>
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg mx-auto mt-3">
                                <div className="col form-floating">
                                    <input type="password" className="form-control" id="passwordConfirmation" placeholder="Confirme a Senha" />
                                    <label htmlFor="inputNome" className="form-label"> Confirme a Senha </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col'>
                            <button className='register-button' onClick={this.nextClick}> Alterar Senha </button>
                        </div>
                    </div>
                </section>

                <section className='my-5 category-section'>
                    <h2 className='section-title'> Minhas Categorias Favoritas </h2>
                    <h4 className='section-subtitle mt-2'> Utilizamos essa informações para te recomendar projetos que sejam sua cara! <br/>Lembre-se, você pode selecionar no máximo 5 categorias!</h4>

                    <hr />

                    <div className="container-lg col-md-8 col-12">
                        <div className="row">
                            <CategoryCardProfile clickFunction={this.categoryClick} category="Empoderamento Feminino" />
                            <CategoryCardProfile clickFunction={this.categoryClick} category="Doações" />
                            <CategoryCardProfile clickFunction={this.categoryClick} category="Fome" />
                            <CategoryCardProfile clickFunction={this.categoryClick} category="Saúde" />

                            <CategoryCardProfile clickFunction={this.categoryClick} category="Maus Tratos aos Animais" />
                            <CategoryCardProfile clickFunction={this.categoryClick} category="Meio Ambiente" />
                            <CategoryCardProfile clickFunction={this.categoryClick} category="Inclusão Social" />
                            <CategoryCardProfile clickFunction={this.categoryClick} category="Educação" />

                            <CategoryCardProfile clickFunction={this.categoryClick} category="Um Teste" />
                            <CategoryCardProfile clickFunction={this.categoryClick} category="Um Teste Maior" />
                            <CategoryCardProfile clickFunction={this.categoryClick} category="Testando tamanho de texto" />
                            <CategoryCardProfile clickFunction={this.categoryClick} category="Aqui é o último teste" />
                        </div>
                    </div>

                    {/* <div className='row mt24'>
                        <div className='col'>
                            <button className='register-button' onClick={this.nextClick}> Alterar Senha </button>
                        </div>
                    </div> */}
                </section>

            </div>
        )
    }
}

export default MyAccount

