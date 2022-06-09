import React, { Component } from 'react';
import { formatDate } from '../../../Helpers';

class ProjectAdminCard extends Component {

    render() {
        return (
            <button type="button" className="w-100 text-start" data-bs-toggle="modal" data-bs-target="#modalProject" data-bs-projectid={this.props.projectId}>
                <div className="admin-card my-3">
                    <div className="card-category"> </div>
                    <div className="card-content">
                        <div className="row">
                            <div className="col-3 image-column">
                                <img className="profile-image" src="https://via.placeholder.com/130x130" alt="" />
                            </div>

                            <div className="col-9 content-column px-4 pb-3">
                                <div className="project-status text-end text-uppercase mt-1">{this.props.status}</div>
                                <h2 className="project-name my-1"> {this.props.projectName} </h2>
                                <h3 className="project-cause"> {this.props.cause} - {formatDate(this.props.startDate) + " - " + formatDate(this.props.startDate)}</h3>
                                <p className="project-description mt-2"> {this.props.description} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        )
    }
}

export default ProjectAdminCard
