import React, { Component } from 'react';
import HeaderLogin from '../../components/Header/User';
import Helmet from 'react-helmet';
import Achievements from '../../components/Profile/Achievements';
import ProfileProjects from '../../components/Profile/ProfileProjects';

import { FiCamera } from 'react-icons/fi'
import MyAccount from '../../components/Profile/MyAccount';
import VolunteerProjects from '../../components/Profile/VolunteerProjects';

import { decodeToken } from '../../config/auth';
import { storage } from '../../firebase';
import api from '../../config/api';
import { translation } from '../../Helpers';
import Footer from '../../components/Footer';

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
            url: "",
        }

        this.componentDidMount = () => {
            this.populateState()
            this.profilePhotoUpload()
        }

        this.populateState = this.populateState.bind(this);
        this.profilePhotoUpload = this.profilePhotoUpload.bind(this)
    }

    async populateState() {
        var mainUser = this.state.user.user

        let ref = "users/" + mainUser._id
        let url = await storage.ref(ref).getDownloadURL()

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
            razaoSocial: mainUser.razaoSocial,
            url: url
        });
    }

    async profilePhotoUpload(e) {
        // Verificar se não foi selecionado arquivos.
        if (e.target.files[0] === undefined) {
            return;
        }

        let photo = e.target.files[0]
        let url = await storage.ref("users").child(this.state.user.user._id).put(photo)
            .then(snapshot => snapshot.ref.getDownloadURL())
            .catch(error => console.log("Erro ao gravar imagem no banco", error))

        // Atualiza usuário com link da imagem
        await api.put(`/user/${this.state.user.user._id}`, { profileImage: url })

        await api.get(`/changeToken/${this.state.user.user._id}`)
            .then((res) => {
                localStorage.setItem("TOKEN_KEY", res.data);
            })
            .catch((err) => {
                console.log(err)
            })

        window.location.reload();
    }

    render() {
        const t = translation(localStorage.getItem("language"));
        return (
            <div className='profile-page'>

                <Helmet>
                    <title>{t.user.title}</title>
                </Helmet>

                <HeaderLogin />

                <div className='container-lg'>
                    <div className="row header-row">

                        <section className="col-10 col-sm-10 col-md-4 col-lg-3 user-menu">
                            <div className='user-header'>
                                <div className='container-fluid cover'>
                                </div>

                                <div className='user-photo-section'>
                                    <div className='user-photo'>
                                        <img className="profile-image" src={this.state.url} alt="Profile" />
                                    </div>

                                    <div className='photo-input'>
                                        <input type="file" id="change-photo" className='d-none' onChange={this.profilePhotoUpload} accept="image/*" />
                                        <label className="user-photo-icon" htmlFor="change-photo"> <FiCamera /> </label>
                                    </div>
                                </div>

                                <div className='user-info'>
                                    <div className='container-fluid'>
                                        <div className='row'>
                                            <p className='user-name'>{this.state.name} {this.state.lastName}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='project-header'>
                                    <ul className="nav nav-tabs project-navbar" id="myTab" role="tablist">
                                        <li className="item" role="presentation">
                                            <button className="link active" id="myData-tab" data-bs-toggle="tab" data-bs-target="#myData" type="button" role="tab" aria-controls="myData" aria-selected="true">{t.user.menu.main}</button>
                                        </li>
                                        <li className="item" role="presentation">
                                            <button className="link" id="profileProject-tab" data-bs-toggle="tab" data-bs-target="#profileProject" type="button" role="tab" aria-controls="profileProject" aria-selected="false">{t.user.menu.projects}</button>
                                        </li>
                                        {/* {(this.state.cnpj === "") ? */}
                                        <>
                                        <li className="item" role="presentation">
                                            <button className="link" id="volunteerIn-tab" data-bs-toggle="tab" data-bs-target="#volunteerIn" type="button" role="tab" aria-controls="volunteerIn" aria-selected="false">{t.user.menu.volunteer}</button>
                                        </li>
                                        <li className="item" role="presentation">
                                            <button className="link disabled pe-none" id="awards-tab" data-bs-toggle="tab" data-bs-target="#awards" type="button" role="tab" aria-controls="awards" aria-selected="false" disabled>{t.user.menu.achievement}</button>
                                        </li> </>
                                        {/* : <></>
                                        } */}
                                        <li className="item" role="presentation">
                                            <button className="link disabled pe-none" id="donations-tab" data-bs-toggle="tab" data-bs-target="#donations" type="button" role="tab" aria-controls="donations" aria-selected="false" disabled>{t.user.menu.donations}</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="col-12 col-sm-12 col-md-8 col-lg-9 project-content mt-4">
                            <div className='container-lg col-sm-12 col-lg-9 mt-4'>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="myData" role="tabpanel" aria-labelledby="myData-tab">
                                        <MyAccount name={this.state.name} lastName={this.state.lastName} cpf={this.state.cpf} email={this.state.email} birthDate={this.state.birthDate} gender={this.state.gender} causes={this.state.selectedCauses} />
                                    </div>
                                    <div className="tab-pane fade" id="profileProject" role="tabpanel" aria-labelledby="profileProject-tab">
                                        <ProfileProjects />
                                    </div>
                                    <div className="tab-pane fade" id="volunteerIn" role="tabpanel" aria-labelledby="volunteerIn-tab">
                                        <VolunteerProjects />
                                    </div>
                                    <div className="tab-pane fade" id="awards" role="tabpanel" aria-labelledby="awards-tab">
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

                {/* <Footer /> */}

            </div>
        )
    }
}

export default Profile