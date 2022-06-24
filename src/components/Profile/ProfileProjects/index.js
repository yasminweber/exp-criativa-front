import React, { Component } from 'react';
import ProfileProjectCard from '../ProjectCard';
import { decodeToken } from '../../../config/auth'
import api from '../../../config/api'
import { customAlert, translation } from '../../../Helpers'

class ProfileProjects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: decodeToken(),
            projects: []
        };

        this.componentDidMount = () => {
            this.getPosts();
        }
    }

    async getPosts() {

        await api.get(`/project/user/${this.state.user.user._id}`)
            .then((response) => {
                const data = response.data;
                this.setState({ projects: data });
            })
            .catch(() => {
                customAlert(translation(localStorage.getItem('language')).error.loadProjects, "error");
            })
    }

    render() {
        const t = translation(localStorage.getItem('language'));
        return (
            <section className='container profile-project-page'>

                <h2 className='section-title'> {t.user.projects.title} </h2>
                <h4 className='section-subtitle mt-2'> {t.user.projects.sub} </h4>

                <section className='project-header mt-4'>
                    <ul className="nav nav-tabs project-navbar" id="myTab" role="tablist">
                        <li className="item" role="presentation">
                            <button className="link active" id="pending-tab" data-bs-toggle="tab" data-bs-target="#pending-projects" type="button" role="tab" aria-controls="home" aria-selected="true">{t.user.projects.op1}</button>
                        </li>
                        <li className="item" role="presentation">
                            <button className="link" id="in-progress-tab" data-bs-toggle="tab" data-bs-target="#in-progress" type="button" role="tab" aria-controls="in-progress" aria-selected="false">{t.user.projects.op2}</button>
                        </li>
                        <li className="item" role="presentation">
                            <button className="link" id="finished-tab" data-bs-toggle="tab" data-bs-target="#finished" type="button" role="tab" aria-controls="finished" aria-selected="false">{t.user.projects.op3}</button>
                        </li>
                    </ul>
                </section>

                <section className="project-content">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="pending-projects" role="tabpanel" aria-labelledby="pending-projects-tab">
                            {this.state.projects.filter(status => status.status === "solicitação" || status.status === "pendente").map((child, id) => (
                                <ProfileProjectCard url={child._id} status={child.status} projectName={child.projectName} cause={child.cause} description={child.description} />
                            ))}
                            {this.state.projects.filter(status => status.status === "solicitação" || status.status === "pendente").length === 0 ?
                            <div><h2 className="mt-4">{t.user.projects.notYet}</h2></div> : <></> }
                        </div>
                        <div className="tab-pane fade" id="in-progress" role="tabpanel" aria-labelledby="in-progress-tab">
                            {this.state.projects.filter(status => status.status === "progresso" || status.status === "aprovado").map((child, id) => (
                                <ProfileProjectCard key={id} url={child._id} status={child.status} projectName={child.projectName} cause={child.cause} description={child.description} />
                            ))}
                            {this.state.projects.filter(status => status.status === "progresso" || status.status === "aprovado").length === 0 ?
                            <div><h2 className="mt-4">{t.user.projects.notYet}</h2></div> : <></> }
                        </div>

                        <div className="tab-pane fade" id="finished" role="tabpanel" aria-labelledby="finished-tab">
                            {this.state.projects.filter(status => status.status === "finalizado").map((child, id) => (
                                <ProfileProjectCard key={id} url={child._id} status={child.status} projectName={child.projectName} cause={child.cause} description={child.description} />
                            ))}
                            {this.state.projects.filter(status => status.status === "finalizado").length === 0 ?
                            <div><h2 className="mt-4">{t.user.projects.notYet}</h2></div> : <></> }
                        </div>
                    </div>
                </section>

            </section>
        )
    }
}

export default ProfileProjects
