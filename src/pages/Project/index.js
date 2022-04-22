import React, { Component } from 'react';
import Header_Login from '../../components/Header';
import Member from '../../components/Project/Member';
//import 'bootstrap'

class Project_Page extends Component {

    render() {
        return (
            <div className='project'>

                <Header_Login />

                <header className="container-fluid project-info d-flex">
                    <div className="row">
                        <div className="col-lg-2 col-4">
                            <div className='project-image d-flex'>
                                Image
                            </div>
                        </div>

                        <div className="col-lg-6 col-8 d-flex name-causes">
                            <h2 className='project-name'> Projeto Corrente do Bem </h2>
                            <h3 className='project-cause'> Combate a Desigualdade Social </h3>
                        </div>

                        <div className="col-lg-4 col-12 subscription-column d-flex">
                            <button className='subscription-button'> Quero Participar </button>
                        </div>
                    </div>
                </header>

                <section className='project-header'>
                    <ul className="nav nav-tabs project-navbar" id="myTab" role="tablist">
                        <li className="item" role="presentation">
                            <button className="link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Página inicial</button>
                        </li>
                        <li className="item" role="presentation">
                            <button className="link" id="pictures-tab" data-bs-toggle="tab" data-bs-target="#pictures" type="button" role="tab" aria-controls="pictures" aria-selected="false">Fotos</button>
                        </li>
                        <li className="item" role="presentation">
                            <button className="link" id="acoes-e-eventos-tab" data-bs-toggle="tab" data-bs-target="#acoes-e-eventos" type="button" role="tab" aria-controls="acoes-e-eventos" aria-selected="false">Ações & Eventos</button>
                        </li>
                        <li className="item" role="presentation">
                            <button className="link" id="members-tab" data-bs-toggle="tab" data-bs-target="#members" type="button" role="tab" aria-controls="members" aria-selected="false">Membros</button>
                        </li>
                        <li className="item" role="presentation">
                            <button className="link" id="donations-tab" data-bs-toggle="tab" data-bs-target="#donations" type="button" role="tab" aria-controls="donations" aria-selected="false">Doações</button>
                        </li>
                    </ul>
                </section>

                <section className="project-content">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h1 className="mt-3"> página principal do projeto </h1>
                        </div>
                        <div className="tab-pane fade" id="pictures" role="tabpanel" aria-labelledby="pictures-tab">
                            <h1 className="mt-3"> conteudo de fotos </h1>
                        </div>
                        <div className="tab-pane fade" id="acoes-e-eventos" role="tabpanel" aria-labelledby="acoes-e-eventos-tab">
                        <h1 className="mt-3"> conteudo de ações e eventos </h1>
                        </div>
                        <div className="tab-pane fade" id="members" role="tabpanel" aria-labelledby="members-tab">
                            <Member />
                        </div>
                        <div className="tab-pane fade" id="donations" role="tabpanel" aria-labelledby="donations-tab">
                            <h1 className="mt-3"> conteúdo de doações </h1>
                        </div>
                    </div>
                </section>
                
            </div>

        )
    }
}
export default Project_Page