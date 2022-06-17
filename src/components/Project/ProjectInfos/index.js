import React, { Component } from 'react';
import { formatDate, translation } from '../../../Helpers';

class ProjectInfos extends Component {

    render() {
        const t = translation(localStorage.getItem('language'));
        return (
            <section className="project-infos text-start py-5" id="project-infos">
                <div className="container-lg">
                    <div className="row">

                        <div className="col-md-8 col-12 order-md-0 order-1">
                            <div className="left-down mt-4">
                                <div className="row">
                                    <div className="col-12">
                                        <h2 className="titulo-1 mb-3">{t.project.info.main.description}</h2>
                                        <p className="descricao">{this.props.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-12 order-md-1 order-0">
                            <div className="right-up">
                                <div className="row">
                                    <div className="col-12">
                                        <h2 className="titulo-1 mb-1">{t.project.info.main.status}</h2>
                                        <p className="descricao text-capitalize mb-4">{this.props.status}</p>
                                        <h2 className="titulo-1 mb-1">{t.project.info.main.when}</h2>
                                        <p className="descricao mb-4">{formatDate(this.props.startDate)} - {formatDate(this.props.endDate)}</p>
                                        <h2 className="titulo-1 mb-1">{t.project.info.main.where}</h2>
                                        <p className="descricao mb-4">{this.props.where}</p>
                                        <h2 className="titulo-1 mb-1">{t.project.info.main.benefited}</h2>
                                        <p className="descricao mb-4">{this.props.quantityBenefited}</p>
                                        <h2 className="titulo-1 mb-1">{t.project.info.main.volunteers}</h2>
                                        <p className="descricao mb-4">{this.props.quantityVolunteers}</p>
                                        <h2 className="titulo-1 mb-1">{t.project.info.main.volunteersSigned}</h2>
                                        <p className="descricao mb-4">{this.props.volunteers.length}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default ProjectInfos
