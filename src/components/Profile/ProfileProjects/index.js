import React, { Component } from 'react';
import ProfilProjectCard from '../ProjectCard';

class ProfileProjects extends Component {

    render() {
        return (
            <section className='container profile-project-page'>

                <h2 className='section-title'> Meus Projetos </h2>
                <h4 className='section-subtitle mt-2'> Acompanhe aqui o status de todos os projetos que você criou! </h4>

                <section className='project-header mt-4'>
                    <ul className="nav nav-tabs project-navbar" id="myTab" role="tablist">
                        <li className="item" role="presentation">
                            <button className="link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#pending-projects" type="button" role="tab" aria-controls="home" aria-selected="true">Aguardando Aprovação</button>
                        </li>
                        <li className="item" role="presentation">
                            <button className="link" id="pictures-tab" data-bs-toggle="tab" data-bs-target="#in-progress" type="button" role="tab" aria-controls="pictures" aria-selected="false">Em andamento</button>
                        </li>
                        <li className="item" role="presentation">
                            <button className="link" id="acoes-e-eventos-tab" data-bs-toggle="tab" data-bs-target="#finished" type="button" role="tab" aria-controls="acoes-e-eventos" aria-selected="false">Finalizados </button>
                        </li>
                    </ul>
                </section>

                <section className="project-content">
                    <div className="tab-content" id="myTabContent">


                        <div className="tab-pane fade show active" id="pending-projects" role="tabpanel" aria-labelledby="pending-projects-tab">
                            <ProfilProjectCard/>
                            <ProfilProjectCard/>
                            <ProfilProjectCard/>
                        </div>

                        <div className="tab-pane fade" id="in-progress" role="tabpanel" aria-labelledby="in-progress-tab">
                            <h1 className="mt-3"> conteudo de fotos </h1>
                        </div>

                        <div className="tab-pane fade" id="finished" role="tabpanel" aria-labelledby="acoes-e-eventos-tab">
                            <h1 className="mt-3"> conteudo de ações e eventos </h1>
                        </div>
                    </div>

                </section>

            </section>

        )
    }
}
export default ProfileProjects