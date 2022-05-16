import React, { Component } from 'react';
import ProfilProjectCard from '../ProjectCard';
import { decodeToken } from '../../../config/auth'
import api from '../../../config/api'

class ProfileProjects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: decodeToken(),
            projects: []
        };

        this.componentDidMount = () => {
            this.getPosts();
            console.log(this.state.posts)
        }
    }

    async getPosts() {

        await api.get(`/project/user/${this.state.user.user._id}`)
            .then((response) => {
                const data = response.data;
                this.setState({ projects: data });
                console.log(this.state.projects);
            })
            .catch(() => {
                alert('Erro para carregar os projetos');
            })
    }

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
                            {this.state.projects.map((child, id) => (
                                <>
                                    <div key={id}>
                                        {(child.status === "aberto") ?
                                            <ProfilProjectCard url={child._id} projectName={child.projectName} cause={child.cause} description={child.description} />
                                            : <></>
                                        }
                                    </div>
                                </>
                            ))}
                        </div>
                        <div className="tab-pane fade" id="in-progress" role="tabpanel" aria-labelledby="in-progress-tab">
                            {this.state.projects.map((child, id) => (
                                <>
                                    <div key={id}>
                                        {(child.status === "progress") ?
                                            <ProfilProjectCard url={child._id} projectName={child.projectName} cause={child.cause} description={child.description} />
                                            : <></>
                                        }
                                    </div>
                                </>
                            ))}
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