import React, { Component } from 'react';
import ProfileProjectCard from '../ProjectCard'
import { decodeToken } from '../../../config/auth';
import api from '../../../config/api';

class VolunteerProjects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: decodeToken(),
            volunteerIn: [],
            volunteerParticipated: []
        };

        this.componentDidMount = () => {
            this.getUser();
        }
    }

    async getUser() {

        await api.get(`/user/${this.state.user.user._id}`)
            .then((response) => {
                const data = response.data;
                console.log("data", data)
                this.setState({ volunteerIn: data.volunteerIn, volunteerParticipated: data.volunteerParticipated });
            })
            .catch(() => {
                alert('Erro para carregar os projetos que o usuário participa');
            })
    }

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
                            {this.state.volunteerIn.filter(status => status.status === "aprovado").map((child, id) => (
                                <ProfileProjectCard key={id} url={child._id} status={child.status} projectName={child.projectName} cause={child.cause} description={child.description} />
                            ))}
                        </div>

                        {console.log("projeto participado", this.state.volunteerParticipated)}
                        <div className="tab-pane fade" id="finished-volunteer" role="tabpanel" aria-labelledby="finished-volunteer-tab">
                            {this.state.volunteerParticipated.filter(status => status.status === "finalizado").map((child, id) => (
                                <ProfileProjectCard key={id} url={child._id} status={child.status} projectName={child.projectName} cause={child.cause} description={child.description} />
                            ))}
                        </div>
                    </div>

                </section>

            </section>

        )
    }
}
export default VolunteerProjects