import React, { Component } from 'react';
import Header_Login from '../../components/Header';
import Member from '../../components/Project/Member';

class Project_Page extends Component {

    render() {
        return (
            <div className='project'>

                <Header_Login/>

                <header class="container-fluid project-info">
                    <div class="row">
                        <div class="col-2">
                            <div className='project-image'>
                                Image
                            </div>
                        </div>

                        <div class="col-6 name-causes">
                            <h2 className='project-name'> Projeto Corrente do Bem </h2>
                            <h3 className='project-cause'> Combate a Desigualdade Social </h3>
                        </div>

                        <div class="col-4 subscription-column">
                            <button className='subscription-button'> Quero Participar </button>
                        </div>
                    </div>
                </header>

                <section className='project-header'>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light project-navbar">
                        <div class="container-fluid header-content">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"> </span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                    <li class="nav-item">
                                        <a class="nav-link" href="#"> Página Inicial </a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="#"> Fotos </a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="#"> Ações & Eventos </a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="#"> Membros </a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="#"> Doações </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    {/* <div className="filtros" style={{ backgroundColor: "#b8d7da" }}>
                        <Link to="#members">
                            <button className="link" type="button">Página Inicial</button>
                        </Link>
                        <button className="link">Fotos</button>
                        <button className="link">Ações & Eventos</button>
                        <button className="link">Membros</button>
                        <button className="link">Doações</button>
                    </div> */}
                </section>

                <Member/>
                

            </div>

        )
    }
}
export default Project_Page