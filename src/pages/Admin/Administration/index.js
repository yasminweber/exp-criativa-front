import React, { Component } from 'react';
import HeaderAdminIn from '../../../components/Header/Admin/AdminIn';
import Helmet from 'react-helmet';
import { decodeToken } from '../../../config/auth';
import api from '../../../config/api';
import { FiXSquare, FiEdit, FiPlusSquare } from "react-icons/fi";

class Administration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: decodeToken(),
            title: "",
            admins: [],
            admin: [],
            name: "",
            lastName: "",
            username: "",
            email: "",
            password: ""
        }

        this.componentDidMount = () => {
            this.loadAdmins();
        }

        this.editAdmin = this.editAdmin.bind(this);
        this.loadModalEdit = this.loadModalEdit.bind(this);
    }

    async loadAdmins() {
        await api.get('/admins')
            .then((response) => {
                const data = response.data;
                this.setState({ admins: data });
            })
            .catch((erro) => {
                console.log(erro)
                alert('Erro para carregar os admins');
            })
    }

    async newAdmin(e) {
        e.preventDefault()

        const admin = {
            name: document.getElementsByName('nameNew')[0].value,
            lastName: document.getElementsByName('lastNameNew')[0].value,
            username: document.getElementsByName('usernameNew')[0].value,
            email: document.getElementsByName('emailNew')[0].value,
            password: document.getElementsByName('passwordNew')[0].value
        }

        console.log("novo admin:", admin)

        await api.post('/registerAdmin', admin);

        alert("admin criado")
        this.loadAdmins()
    }

    loadModalEdit() {
        var exampleModal = document.getElementById('modalEditUser')
        // console.log("modal", exampleModal)

        exampleModal.addEventListener('show.bs.modal', function (event) {
            // Button that triggered the modal
            var button = event.relatedTarget
            // Extract info from data-bs-* attributes
            var recipient = button.getAttribute('data-bs-whatever')

            api.get(`/admin/${recipient}`)
                .then((response) => {
                    valores(response.data)
                })
                .catch((error) => {
                    console.log(error)
                    alert('Erro para carregar o admin');
                })

            function valores(user) {
                let name = user.name
                let lastName = user.lastName
                let username = user.username
                let email = user.email
                let id = user._id
                // console.log("usseerrr", name, lastName, username, email)

                exampleModal.querySelector('.modal#modalEditUser #name').value = name
                exampleModal.querySelector('.modal#modalEditUser #lastName').value = lastName
                exampleModal.querySelector('.modal#modalEditUser #username').value = username
                exampleModal.querySelector('.modal#modalEditUser #email').value = email
                exampleModal.querySelector('.modal#modalEditUser #id').value = id
            }
        })
    }

    async editAdmin() {
        var id = document.querySelector('.modal#modalEditUser #id').value

        const admin = {
            name: document.getElementsByName('nameEdit')[0].value,
            lastName: document.getElementsByName('lastNameEdit')[0].value,
            username: document.getElementsByName('usernameEdit')[0].value,
            email: document.getElementsByName('emailEdit')[0].value
        }

        console.log(id, admin)

        await api.put(`/admin/${id}`, admin)
            .then(() => {
                alert("Administrador atualizado com sucesso");
                this.loadAdmins()
            })
            .catch((error) => {
                console.log(error)
                alert('Erro para alterar o admin');
            });
    }

    loadModalDelete() {
        var exampleModal = document.getElementById('modalDeleteUser')
        // console.log("modal", exampleModal)

        exampleModal.addEventListener('show.bs.modal', function (event) {
            // Button that triggered the modal
            var button = event.relatedTarget
            // Extract info from data-bs-* attributes
            var recipient = button.getAttribute('data-bs-whatever')
            console.log(recipient)

            api.get(`/admin/${recipient}`)
                .then((response) => {
                    valores(response.data)
                })
                .catch((error) => {
                    console.log(error)
                    alert('Erro para carregar o admin');
                })

            function valores(user) {
                let name = user.name
                let id = user._id
                console.log("usseerrr", name, id)

                exampleModal.querySelector('.modal#modalDeleteUser .modal-body').textContent = 'Deseja mesmo excluir o administrador "' + name + '"?'
                exampleModal.querySelector('.modal#modalDeleteUser #id').value = id
            }
        })
    }

    async deleteAdmin() {
        var id = document.querySelector('.modal#modalDeleteUser #id').value
        console.log("id", id)

        await api.delete(`/admin/${id}`)
            .then(() => {
                alert("Administrador deletado com sucesso");
            })
            .catch((error) => {
                console.log("erro deletar", error)
                alert('Erro para deletar administrador');
            })

        //this.loadAdmins()
    }

    render() {
        return (
            <>
                <div className="administration">

                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Administradores</title>
                    </Helmet>

                    <div className="container-fluid">
                        <div className="row flex-nowrap">
                            <HeaderAdminIn />
                            <div className="col-auto col-md-9 col-xl-10 px-sm-2 px-0 right-side">
                                <div className="container-lg">
                                    <div className="row text-lg-start text-center mt-4 mb-5">
                                        <div className="col-md-8 col-12">
                                            <h1 className="titulo-1" style={{ fontSize: "24px" }}>Painel dos Administradores</h1>
                                        </div>
                                        <div className="col-md-4 col-12">
                                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalNewUser" ><FiPlusSquare /> Novo usuário </button>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-8 col-12 mx-auto px-0 mb-3">
                                            <div className="tabela">

                                                <div className="row linha">
                                                    <div className="col-2">
                                                        <h2 className="titulo-1">Nome</h2>
                                                    </div>
                                                    <div className="col-4">
                                                        <h2 className="titulo-1">Usuário</h2>
                                                    </div>
                                                    <div className="col-5">
                                                        <h2 className="titulo-1">E-mail</h2>
                                                    </div>
                                                    <div className="col-1">
                                                        <h2 className="titulo-1">Ação</h2>
                                                    </div>
                                                </div>

                                                {this.state.admins.map((child, id) => (
                                                    <div className="row linha" key={id}>
                                                        <div className="col-2">
                                                            <p className="titulo-2">{child.name}</p>
                                                        </div>
                                                        <div className="col-4">
                                                            <p className="titulo-2">{child.username}</p>
                                                        </div>
                                                        <div className="col-5">
                                                            <p className="titulo-2">{child.email}</p>
                                                        </div>
                                                        <div className="col-1">
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <button type="button" className="btn-1" data-bs-toggle="modal" data-bs-target="#modalEditUser" data-bs-whatever={child._id} onClick={this.loadModalEdit()}><FiEdit size={22} /></button>
                                                                </div>
                                                                <div className="col-6">
                                                                    <button type="button" className="btn-2" data-bs-toggle="modal" data-bs-target="#modalDeleteUser" data-bs-whatever={child._id} onClick={this.loadModalDelete()}><FiXSquare size={22} /></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal new user */}
                <div className="modal fade" id="modalNewUser" tabIndex="-1" aria-labelledby="modalNewUserLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalNewUserLabel">Novo Administrador</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-start">
                                <div id="id" className="d-none"></div>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="newName" className="col-form-label">Nome</label>
                                                <input type="text" name="nameNew" className="form-control" id="newName" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 ms-auto">
                                            <div className="mb-3">
                                                <label htmlFor="newLastName" className="col-form-label">Sobrenome</label>
                                                <input type="text" name="lastNameNew" className="form-control" id="newLastName" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="newUsername" className="col-form-label">Usuário</label>
                                        <input type="text" name="usernameNew" className="form-control" id="newUsername" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="newEmail" className="col-form-label">E-mail</label>
                                        <input type="email" name="emailNew" className="form-control" id="newEmail" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="newPassword" className="col-form-label">Senha</label>
                                        <input type="password" name="passwordNew" className="form-control" id="newPassword" required />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={this.newAdmin}>Salvar mudanças</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal edit user */}
                <div className="modal fade" id="modalEditUser" tabIndex="-1" aria-labelledby="modalEditUserLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalEditUserLabel">Editar Administrador</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-start">
                                <div id="id" className="d-none"></div>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="name" className="col-form-label">Nome</label>
                                                <input type="text" name="nameEdit" className="form-control" id="name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 ms-auto">
                                            <div className="mb-3">
                                                <label htmlFor="lastName" className="col-form-label">Sobrenome</label>
                                                <input type="text" name="lastNameEdit" className="form-control" id="lastName" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="col-form-label">Usuário</label>
                                        <input type="text" name="usernameEdit" className="form-control" id="username" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="col-form-label">E-mail</label>
                                        <input type="text" name="emailEdit" className="form-control" id="email" disabled />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={this.editAdmin}>Salvar mudanças</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal delete user */}
                <div className="modal fade" id="modalDeleteUser" tabIndex="-1" aria-labelledby="modalDeleteUserLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalDeleteUserLabel"></h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-start">
                            </div>
                            <div className="modal-footer">
                                <div id="id" className="d-none"></div>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={this.deleteAdmin}>Excluir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Administration
