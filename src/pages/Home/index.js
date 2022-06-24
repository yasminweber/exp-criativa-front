import React, { Component } from 'react';
import Helmet from 'react-helmet';
import CauseCard from '../../components/Home/CauseCard';
import HeaderHome from '../../components/Header/Home';
import Benefits from '../../components/Home/Benefits';
import { translation, customAlert } from '../../Helpers';
import api from '../../config/api';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            causes: [],
        }

        this.componentDidMount = () => {
            this.loadCauses();
        }
    }

    async loadCauses() {
        api.get('/cause')
            .then(res => {
                this.setState({
                    causes: res.data
                })
            })
            .catch(error => {
                customAlert(translation(localStorage.getItem('language')).error.network, "error");
                console.log("erro para carregar iniciativas", error);
            })
    }

    render() {
        const t = translation(localStorage.getItem('language'));
        return (
            <div className="home">

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{t.home.title}</title>
                </Helmet>

                <HeaderHome />

                {/* <section className="banner">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 px-0">
                                <picture>
                                    <source media="(max-width:576px)" srcset="https://via.placeholder.com/400x500?text=Banners+para+colocar+alguma+informação+do+projeto" />
                                    <source media="(min-width: 577px)" srcset="https://via.placeholder.com/1366x400?text=Banners+para+colocar+alguma+informação+do+projeto" />
                                    <img className="img-fluid w-100" src="" alt="" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="quem-somos">
                    <div className="container-lg">
                        <div className="row mb-5">
                            <div className="col-lg-8 col-12 mx-auto">
                                <h2 className="titulo">O que é a All4One?</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <p className="conteudo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="col-lg-6 col-12">
                                <p className="conteudo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="categorias">
                    <div className="container-lg">
                        <div className="row">
                            <div className="col-lg-8 col-12 mx-auto">
                                <h2 className="titulo-principal">Conheça as iniciativas</h2>
                            </div>
                        </div>

                        <div className="row mt-5">
                            {this.state.causes.map((child, id) => {
                                return (
                                    <CauseCard key={id} cause={child.cause} icon={child.image} content={child.description} />
                                )
                            })}
                        </div>
                    </div>
                </section>

                <section className="slick-benefits">
                    <div className="container-lg">
                        <div className="row py-5">
                            <div className="col-lg-8 col-12 mx-auto">
                                <h2 className="titulo-01">Por que participar?</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <Benefits />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Home