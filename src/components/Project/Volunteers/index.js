import React, { Component } from 'react';
import { currentUrl, subtract_dates, translation, formatDate } from '../../../Helpers';
import api from '../../../config/api';
import { decodeToken } from '../../../config/auth';

class ProjectVolunteers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: decodeToken(),
            projectCreator: "",
            id: "",
            volunteers: [],
            volunteersParticipated: [],
            status: ""
        }

        this.componentDidMount = () => {
            this.getProject()
        }
    }

    async getProject() {
        await api.get(`/project/${currentUrl()}`)
            .then((response) => {
                const data = response.data;
                this.setState({
                    id: data._id,
                    volunteers: data.volunteers,
                    volunteersParticipated: data.volunteersParticipated,
                    status: data.status
                });
            })
            .catch((error) => {
                console.log("erro carregar projeto ", error)
                alert('Erro para carregar o projeto');
            })
    }

    async enviarParticipantes() {
        const array = []
        const checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

        for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value)
        }

        console.log('array', array)

        const volunteers = {
            volunteersParticipated: array
        }

        console.log("project", this.state.id, "volunteers", volunteers)

        await api.put(`/attendance/${this.state.id}`, volunteers)
            .then(() => {
                alert("participantes enviados")
                window.location.reload()
            })
            .catch(err => {
                console.log(err);
                alert("erro para enviar os participantes")
            })
    }

    render() {
        const t = translation(localStorage.getItem('language'));
        return (
            <section className="project-volunteers" id="volunteers">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="title-1 mt-5"> {t.project.info.volunteers.title1} </h3>
                            <p className="sub-title-1">{t.project.info.volunteers.sub1}</p>
                        </div>
                    </div>

                    {(this.state.volunteersParticipated.length === 0) ?
                        <div className="row">
                            {(this.state.volunteers.length !== 0) ?
                                <div className="col-12 my-5">
                                    <table className="volunteers-table w-100">
                                        <thead>
                                            <tr>
                                                <th>{t.project.info.volunteers.table.name}</th>
                                                <th>{t.project.info.volunteers.table.surname}</th>
                                                <th>{t.project.info.volunteers.table.activeSince}</th>
                                                <th>{t.project.info.volunteers.table.presence}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.volunteers.map((child, id) => (
                                                <tr key={id}>
                                                    <td>{child.name}</td>
                                                    <td>{child.lastName}</td>
                                                    <td>{formatDate(child.createdAt)}</td>
                                                    {/* <td>{subtract_dates(child.createdAt)} {t.project.info.volunteers.table.days}</td> */}
                                                    {(this.state.status !== "finalizado") ?
                                                    
                                                    <td><input type="checkbox" className="check-participation" value={child._id} disabled /></td>
                                                    :
                                                    <td><input type="checkbox" className="check-participation" value={child._id} /></td>
                                                    }
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    {(this.state.status === "finalizado") ?
                                        <div>
                                            <button type="submit" onClick={() => this.enviarParticipantes()}>
                                            {t.project.info.volunteers.btn}
                                            </button>
                                        </div>
                                        : <></>
                                    }

                                </div>
                                :
                                <div className="col-12 my-5">
                                    <h3>{t.project.info.volunteers.sub2}</h3>
                                </div>
                            }
                        </div>
                        :
                        <div className="row">
                            <div className="col-12 my-5">
                                <table className="volunteers-table w-100">
                                    <thead>
                                        <tr>
                                            <th>{t.project.info.volunteers.table.name}</th>
                                            <th>{t.project.info.volunteers.table.surname}</th>
                                            <th>{t.project.info.volunteers.table.activeSince}</th>
                                            <th>{t.project.info.volunteers.table.presence}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(this.state.volunteersParticipated !== undefined) ?
                                            <>
                                                {this.state.volunteers.map((child, id) => (
                                                    <tr key={id}>
                                                        <td>{child.name}</td>
                                                        <td>{child.lastName}</td>
                                                        <td>{subtract_dates(child.createdAt)} {t.project.info.volunteers.table.days}</td>
                                                        {(((child.volunteerParticipated).indexOf(this.props.projectId)) !== -1) ?
                                                            <td><input type="checkbox" className="check-participation" value={child._id} checked disabled /></td>
                                                            : <td><input type="checkbox" className="check-participation" value={child._id} disabled /></td>
                                                        }
                                                    </tr>
                                                ))}
                                            </>
                                            : <></>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }

                </div>
            </section>
        )
    }
}

export default ProjectVolunteers
