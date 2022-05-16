import React, { Component } from 'react';
import HeaderLogin from '../../components/Header';
import Helmet from 'react-helmet';
import Achievements from '../../components/Profile/Achievements';
import ProfileProjects from '../../components/Profile/ProfileProjects';

import { FiCamera } from 'react-icons/fi'
import MyAccount from '../../components/Profile/MyAccount';
import VolunteerProjects from '../../components/Profile/VolunteerProjects';

import { decodeToken } from '../../config/auth';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: decodeToken(),
            name: "",
            lastName: "",
            email: "",
            profielImage: "",
            selectedCauses: [],
            cpf: "",
            birthDate: new Date(),
            gender: "",
            cnpj: "",
            razaoSocial: "",
        }

        this.componentDidMount = () => {
            this.populateState()
        }
    }

    async populateState() {
        var mainUser = this.state.user.user

        this.setState({
            name: mainUser.name,
            lastName: mainUser.lastName,
            email: mainUser.email,
            profielImage: mainUser.profielImage,
            selectedCauses: mainUser.selectedCauses,
            cpf: mainUser.cpf,
            birthDate: mainUser.birthDate,
            gender: mainUser.gender,
            cnpj: mainUser.cnpj,
            razaoSocial: mainUser.razaoSocial
        });
    }
    

    render() {
        return (
            <div className='profile-page'>

                <Helmet>
                    <title>Perfil</title>
                </Helmet>

                <HeaderLogin />

                <div className='container-lg'>
                    <div className="row">

                        <section className="col-12 col-lg-3 user-menu mt-4">
                            <div className='user-header'>
                                <div className='container-fluid cover'>
                                </div>

                                <div className='user-photo-section'>
                                    <div className='user-photo'>
                                        <img className="profile-image" src="https://via.placeholder.com/110x110" alt="" />
                                    </div>

                                    <div className='photo-input'>
                                        <input type="file" id="change-photo" className='d-none' />
                                        <label className="user-photo-icon" htmlFor="change-photo"> <FiCamera /> </label>
                                    </div>
                                </div>

                                <div className='user-info'>
                                    <div className='container-fluid'>
                                        <div className='row'>
                                            <p className='user-name'>{this.state.name} {this.state.lastName}</p>
                                        </div>
                                        <div className='row'>
                                            <p> 1800 pontos </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='project-header'>
                                    <ul className="nav nav-tabs project-navbar" id="myTab" role="tablist">
                                        <li className="item" role="presentation">
                                            <button className="link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Meus Dados</button>
                                        </li>
                                        <li className="item" role="presentation">
                                            <button className="link" id="pictures-tab" data-bs-toggle="tab" data-bs-target="#pictures" type="button" role="tab" aria-controls="pictures" aria-selected="false">Meus Projetos</button>
                                        </li>
                                        <li className="item" role="presentation">
                                            <button className="link" id="acoes-e-eventos-tab" data-bs-toggle="tab" data-bs-target="#acoes-e-eventos" type="button" role="tab" aria-controls="acoes-e-eventos" aria-selected="false">Sou Voluntário</button>
                                        </li>
                                        <li className="item" role="presentation">
                                            <button className="link" id="members-tab" data-bs-toggle="tab" data-bs-target="#members" type="button" role="tab" aria-controls="members" aria-selected="false">Conquistas</button>
                                        </li>
                                        <li className="item" role="presentation">
                                            <button className="link" id="donations-tab" data-bs-toggle="tab" data-bs-target="#donations" type="button" role="tab" aria-controls="donations" aria-selected="false" disabled>Minhas Doações</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="project-content col-sm-12 col-lg-9 mt-4">
                            <div className='container-lg col-sm-12 col-lg-9 mt-4'>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <MyAccount name={this.state.name} lastName={this.state.lastName} cpf={this.state.cpf} email={this.state.email} birthDate={this.state.birthDate} gender={this.state.gender} causes={this.state.selectedCauses} />
                                    </div>
                                    <div className="tab-pane fade" id="pictures" role="tabpanel" aria-labelledby="pictures-tab">
                                        <ProfileProjects />
                                    </div>
                                    <div className="tab-pane fade" id="acoes-e-eventos" role="tabpanel" aria-labelledby="acoes-e-eventos-tab">
                                        <VolunteerProjects />
                                    </div>
                                    <div className="tab-pane fade" id="members" role="tabpanel" aria-labelledby="members-tab">
                                        <Achievements />
                                    </div>
                                    <div className="tab-pane fade" id="donations" role="tabpanel" aria-labelledby="donations-tab">
                                        <h1 className="mt-3"> conteúdo de doações </h1>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

            </div>
        )
    }
}
export default Profile