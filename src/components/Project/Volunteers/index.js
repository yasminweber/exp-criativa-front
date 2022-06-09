import React, { Component } from 'react';
import { subtract_dates } from '../../../Helpers';
import api from '../../../config/api';

class ProjectVolunteers extends Component {

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

        console.log("project", this.props.projectId, "volunteers", volunteers)

        await api.put(`/attendance/${this.props.projectId}`, volunteers)
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
        return (
            <section className="project-volunteers" id="volunteers">
                {console.log("volunteers", this.props.volunteers)}
                {console.log("volunteersParticipated", this.props.volunteersParticipated)}
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="title-1 mt-5"> Conheça as pessoas interessadas em ajudar seu projeto </h3>
                            <p className="sub-title-1">Não esqueça de dar presença aos participantes no final do projeto</p>
                        </div>
                    </div>

                    {/* Show when status !== "finalizado" */}
                    {(this.props.volunteersParticipated === 0) ?
                        <div className="row">
                            {(this.props.volunteers.length !== 0) ?
                                <div className="col-12 my-5">
                                    <table className="volunteers-table w-100">
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Sobrenome</th>
                                                <th>Ativo há</th>
                                                <th>Estava presente?</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.volunteers.map((child, id) => (
                                                <tr key={id}>
                                                    <td>{child.name}</td>
                                                    <td>{child.lastName}</td>
                                                    <td>{subtract_dates(child.createdAt)} dias</td>
                                                    <td><input type="checkbox" className="check-participation" value={child._id} /></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    {(this.props.status === "finalizado") ?
                                        <div>
                                            <button type="submit" onClick={() => this.enviarParticipantes()}>
                                                Enviar
                                            </button>
                                        </div>
                                        : <></>
                                    }

                                </div>
                                :
                                <div className="col-12 my-5">
                                    <h3>Não há nenhum participante inscrito.</h3>
                                </div>
                            }
                        </div>
                        :
                        <div className="row">
                            <div className="col-12 my-5">
                                <table className="volunteers-table w-100">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Sobrenome</th>
                                            <th>Ativo há</th>
                                            <th>Estava presente?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(this.props.volunteersParticipated !== undefined) ?
                                            <>
                                                {this.props.volunteers.map((child, id) => (
                                                    <tr key={id}>
                                                        <td>{child.name}</td>
                                                        <td>{child.lastName}</td>
                                                        <td>{subtract_dates(child.createdAt)} dias</td>
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
