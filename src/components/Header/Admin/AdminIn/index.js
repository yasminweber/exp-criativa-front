import React, { Component } from 'react';
import { decodeToken } from '../../../../config/auth';
import { currentUrl } from '../../../../Helpers'
import { AiOutlineDashboard } from "react-icons/ai";
import { BsGrid, BsCheck2Square, BsExclamationSquare, BsDashSquare, BsHourglassSplit } from "react-icons/bs"
import { FiInbox } from "react-icons/fi"
import { HiOutlineUserGroup } from "react-icons/hi";

class HeaderAdminIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: decodeToken(),
            username: ""
        }

        this.componentDidMount = () => {
            this.checkUser()
        }

        this.logout = this.logout.bind(this)
    }

    async checkUser() {
        if ((window.location.href !== 'http://localhost:3000/cadastro')) {
            if (this.state.username === null) {
                alert("Usuario não logado. Por favor, faça o login.");
                window.location = '/admin'
            } else {
                this.setState({ username: this.state.user.admin.username });
            }
        }
    }

    async active() {
        console.log(currentUrl())
    }

    async logout() {
        alert("Você fez logout");
        localStorage.removeItem('TOKEN_KEY');
        window.location = '/admin'
    }

    render() {
        return (
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark sidebar-admin">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5 d-none d-sm-inline" style={{ color: "transparent", marginBottom: "20px" }}>Menu</span>
                    </a>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <a href="/dashboard" className="nav-link px-0">
                                <AiOutlineDashboard size={26} /> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <button href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0">
                                <BsGrid size={26} /> <span className="ms-1 d-none d-sm-inline">Projetos</span> </button>
                            {/* <button href="#submenu1" data-bs-toggle="" className="nav-link px-0">
                                <BsGrid size={26} /> <span className="ms-1 d-none d-sm-inline">Projetos</span> </button> */}
                            <ul className="collapse nav flex-column" id="submenu1" data-bs-parent="#menu">
                                <li className="w-100">
                                    {/* Function to filter all projects */}
                                    <a href="/approval?all" className="nav-link px-0"> <FiInbox size={26} /> <span className="ms-1 d-none d-sm-inline">Todos os projetos</span> </a>
                                </li>
                                <li className="w-100">
                                    {/* Function to filter in progress projects */}
                                    <a href="/approval?progress" className="nav-link px-0"> <BsHourglassSplit size={24} /> <span className="ms-1 d-none d-sm-inline">Em progresso</span> </a>
                                </li>
                                <li className="w-100">
                                    {/* Function to filter pending edition projects */}
                                    <a href="/approval?pending" className="nav-link px-0"> <BsExclamationSquare size={24} /> <span className="ms-1 d-none d-sm-inline">Pendentes</span> </a>
                                </li>
                                <li className="w-100">
                                    {/* Function to filter rejected projets */}
                                    <a href="/approval?rejected" className="nav-link px-0"> <BsDashSquare size={24} /> <span className="ms-1 d-none d-sm-inline">Rejeitados</span> </a>
                                </li>
                                <li className="w-100">
                                    {/* Function to filter finished projets */}
                                    <a href="/approval?finished" className="nav-link px-0"> <BsCheck2Square size={24} /> <span className="ms-1 d-none d-sm-inline">Finalizados</span> </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a href="/administration" className="nav-link px-0">
                                <HiOutlineUserGroup size={26} /> <span className="ms-1 d-none d-sm-inline">Administradores</span>
                            </a>
                        </li>
                    </ul>
                    <hr />

                    <div className="dropdown pb-4">
                        <button href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://via.placeholder.com/30" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                            <span className="d-none d-sm-inline mx-1">{this.state.username}</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">

                            <li>
                                <button className="dropdown-item" onClick={this.logout}>Sign out</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderAdminIn;