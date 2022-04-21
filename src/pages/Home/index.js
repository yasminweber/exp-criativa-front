import React, { Component } from 'react';
import Cause_Card from '../../components/Home/Cause_Card';

import { BsGenderFemale } from 'react-icons/bs'
import Header_Home from '../../components/Home/Header';

class Home extends Component {

    render() {
        return (
            <div className='homev2'>

                <Header_Home/>

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

                        <div className="row mt-4">

                            <Cause_Card cause="Aqui a causa 1" icon={<BsGenderFemale />}
                                content="Algum primeiro conteudo na linha de cima e aqui é só pra ter uma segunda linha mesmo, 
                                com bla bla bla, pra acrescentar mais palavras que não façam sentido"/>

                            <Cause_Card cause="Aqui a causa 2" icon={<BsGenderFemale />}
                                content="Algum primeiro conteudo na linha de cima e aqui é só pra ter uma segunda linha mesmo, 
                                com bla bla bla, pra acrescentar mais palavras que não façam sentido"/>

                            <Cause_Card cause="Aqui a causa 3" icon={<BsGenderFemale />}
                                content="Algum primeiro conteudo na linha de cima e aqui é só pra ter uma segunda linha mesmo, 
                                com bla bla bla, pra acrescentar mais palavras que não façam sentido"/>

                            <Cause_Card cause="Aqui a causa 4" icon={<BsGenderFemale />}
                                content="Algum primeiro conteudo na linha de cima e aqui é só pra ter uma segunda linha mesmo, 
                                com bla bla bla, pra acrescentar mais palavras que não façam sentido"/>

                            <Cause_Card cause="Aqui a causa 5" icon={<BsGenderFemale />}
                                content="Algum primeiro conteudo na linha de cima e aqui é só pra ter uma segunda linha mesmo, 
                                com bla bla bla, pra acrescentar mais palavras que não façam sentido"/>

                            <Cause_Card cause="Aqui a causa 6" icon={<BsGenderFemale />}
                                content="Algum primeiro conteudo na linha de cima e aqui é só pra ter uma segunda linha mesmo, 
                                com bla bla bla, pra acrescentar mais palavras que não façam sentido"/>

                            <Cause_Card cause="Aqui a causa 7" icon={<BsGenderFemale />}
                                content="Algum primeiro conteudo na linha de cima e aqui é só pra ter uma segunda linha mesmo, 
                                com bla bla bla, pra acrescentar mais palavras que não façam sentido"/>

                            <Cause_Card cause="Aqui a causa 8" icon={<BsGenderFemale />}
                                content="Algum primeiro conteudo na linha de cima e aqui é só pra ter uma segunda linha mesmo, 
                                com bla bla bla, pra acrescentar mais palavras que não façam sentido"/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Home