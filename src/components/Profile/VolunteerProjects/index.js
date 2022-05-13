import React, { Component } from 'react';
import ProfilProjectCard from '../ProjectCard'

class VolunteerProjects extends Component {

    render() {
        return (
            <section className='container profile-project-page'>

                <h2 className='section-title'> Meus Projetos </h2>
                <h4 className='section-subtitle mt-2'> Acompanhe aqui o status de todos os projetos que você é voluntário! </h4>

                <section className='project-header mt-4'>
                    <ul className="nav nav-tabs project-navbar" id="myTab" role="tablist">
                        <li className="item" role="presentation">
                            <button className="link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#in-progress-volunteer" type="button" role="tab" aria-controls="in-progress-volunteer" aria-selected="true">Em andamento</button>
                        </li>
                        <li className="item" role="presentation">
                            <button className="link" id="pictures-tab" data-bs-toggle="tab" data-bs-target="#finished-volunteer" type="button" role="tab" aria-controls="finished-volunteer" aria-selected="false">Finalizados</button>
                        </li>
                    </ul>
                </section>

                <section className="project-content">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="in-progress-volunteer" role="tabpanel" aria-labelledby="in-progress-volunteer-tab">
                            <ProfilProjectCard/>
                            <ProfilProjectCard/>
                            <ProfilProjectCard/>
                        </div>

                        <div className="tab-pane fade" id="finished-volunteer" role="tabpanel" aria-labelledby="finished-volunteer-tab">
                            <h1 className="mt-3"> Nenhum projeto </h1>
                        </div>
                    </div>

                </section>

            </section>

        )
    }
}
export default VolunteerProjects