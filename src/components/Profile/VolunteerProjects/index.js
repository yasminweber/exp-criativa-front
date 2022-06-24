import React, { Component } from 'react';
import ProfileProjectCard from '../ProjectCard'
import { decodeToken } from '../../../config/auth';
import api from '../../../config/api';
import { customAlert, translation } from '../../../Helpers';

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
                this.setState({ volunteerIn: data.volunteerIn, volunteerParticipated: data.volunteerParticipated });
            })
            .catch(() => {
                customAlert(translation(localStorage.getItem('language')).error.loadProjects, "error");
            })
    }

    render() {
        const t = translation(localStorage.getItem('language'));
        return (
            <section className='container profile-project-page'>

                <h2 className='section-title'> {t.user.volunteer.title} </h2>
                <h4 className='section-subtitle mt-2'> {t.user.volunteer.sub} </h4>

                <section className='project-header mt-4'>
                    <ul className="nav nav-tabs project-navbar" id="myTab" role="tablist">
                        <li className="item" role="presentation">
                            <button className="link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#in-progress-volunteer" type="button" role="tab" aria-controls="in-progress-volunteer" aria-selected="true">{t.user.volunteer.op1}</button>
                        </li>
                        <li className="item" role="presentation">
                            <button className="link" id="pictures-tab" data-bs-toggle="tab" data-bs-target="#finished-volunteer" type="button" role="tab" aria-controls="finished-volunteer" aria-selected="false">{t.user.volunteer.op2}</button>
                        </li>
                    </ul>
                </section>

                <section className="project-content">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="in-progress-volunteer" role="tabpanel" aria-labelledby="in-progress-volunteer-tab">
                            {this.state.volunteerIn.filter(status => status.status === "aprovado").map((child, id) => (
                                <ProfileProjectCard key={id} url={child._id} status={child.status} projectName={child.projectName} cause={child.cause} description={child.description} />
                            ))}
                            {this.state.volunteerIn.filter(status => status.status === "aprovado").length === 0 ?
                            <div><h2 className="mt-4">{t.user.volunteer.notYet}</h2></div> : <></> }
                        </div>

                        {/* {console.log("projeto participado", this.state.volunteerParticipated)} */}
                        <div className="tab-pane fade" id="finished-volunteer" role="tabpanel" aria-labelledby="finished-volunteer-tab">
                            {this.state.volunteerParticipated.filter(status => status.status === "finalizado").map((child, id) => (
                                <ProfileProjectCard key={id} url={child._id} status={child.status} projectName={child.projectName} cause={child.cause} description={child.description} />
                            ))}
                            {this.state.volunteerParticipated.filter(status => status.status === "finalizado").length === 0 ?
                            <div><h2 className="mt-4">{t.user.volunteer.notYet}</h2></div> : <></> }
                        </div>
                    </div>
                </section>

            </section>

        )
    }
}

export default VolunteerProjects