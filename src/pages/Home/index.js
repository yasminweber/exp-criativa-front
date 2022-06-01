import React, { Component } from 'react';
import CauseCard from '../../components/Home/Cause_Card';
import Helmet from 'react-helmet';
import HeaderHome from '../../components/Header/Home';
import Benefits from '../../components/Home/Benefits';
import{ translation } from '../../Helpers';

class Home extends Component {

    render() {
        const t = translation(localStorage.getItem('language'));
        return (
            <div className="homev2">

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{t.home.title}</title>
                </Helmet>

                <HeaderHome />

                <section className="banner">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 px-0">
                                <picture>
                                    <source media="(max-width:576px)" srcset="https://via.placeholder.com/400x500?text=Banners+para+colocar+alguma+informação+do+projeto" />
                                    <source media="(min-width: 577px)" srcset="https://via.placeholder.com/1366x400?text=Banners+para+colocar+alguma+informação+do+projeto" />
                                    <img class="img-fluid w-100" src="" alt="" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="quem-somos">
                    <div className="container-lg">
                        <div className="row mb-5">
                            <div className="col-lg-8 col-12 mx-auto">
                                <h2 className="titulo">O que é a PROJETO SEM NOME DEFINIDO?</h2>
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

                            <CauseCard cause="Empoderamento Feminino" icon="https://cdn-icons-png.flaticon.com/512/4331/4331099.png"
                                content="Algum primeiro conteudo na linha de cima e aqui é só pra ter uma segunda linha mesmo, 
                                com bla bla bla, pra acrescentar mais palavras que não façam sentido"/>

                            <CauseCard cause="Doações" icon="https://cdn-icons-png.flaticon.com/512/838/838680.png"
                                content="Algum primeiro conteudo na linha de cima e aqui é só pra ter uma segunda linha mesmo, 
                                com bla bla bla, pra acrescentar mais palavras que não façam sentido"/>

                            <CauseCard cause="Fome" icon="https://cdn-icons-png.flaticon.com/512/4605/4605602.png"
                                content="Algum primeiro conteudo na linha de cima e aqui é só pra ter uma segunda linha mesmo, 
                                com bla bla bla, pra acrescentar mais palavras que não façam sentido"/>

                            <CauseCard cause="Saúde" icon="https://cdn-icons-png.flaticon.com/512/684/684262.png"
                                content="Algum primeiro conteudo na linha de cima e aqui é só pra ter uma segunda linha mesmo, 
                                com bla bla bla, pra acrescentar mais palavras que não façam sentido"/>

                            <CauseCard cause="Mau trato aos animais" icon="https://cdn-icons-png.flaticon.com/512/672/672716.png"
                                content="Algum primeiro conteudo na linha de cima e aqui é só pra ter uma segunda linha mesmo, 
                                com bla bla bla, pra acrescentar mais palavras que não façam sentido"/>

                            <CauseCard cause="Meio Ambiente" icon="https://cdn-icons-png.flaticon.com/512/1684/1684337.png"
                                content="Algum primeiro conteudo na linha de cima e aqui é só pra ter uma segunda linha mesmo, 
                                com bla bla bla, pra acrescentar mais palavras que não façam sentido"/>

                            <CauseCard cause="Inclusão social" icon="https://cdn-icons-png.flaticon.com/512/2058/2058768.png"
                                content="Algum primeiro conteudo na linha de cima e aqui é só pra ter uma segunda linha mesmo, 
                                com bla bla bla, pra acrescentar mais palavras que não façam sentido"/>

                            <CauseCard cause="Educação" icon="https://cdn-icons-png.flaticon.com/512/991/991922.png"
                                content="Algum primeiro conteudo na linha de cima e aqui é só pra ter uma segunda linha mesmo, 
                                com bla bla bla, pra acrescentar mais palavras que não façam sentido"/>

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