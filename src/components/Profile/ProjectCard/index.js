import React, { Component } from 'react';

class ProfilProjectCard extends Component {

    render() {
        return (
            <a href={"project/" + this.props.url} style={{textDecoration: "none"}}>
                <div className='project-card my-3'>
                    <div className='card-category'> </div>
                    <div className='card-content'>
                        <div className='container-fluid px-0'>
                            <div className='row'>
                                <div className='col-3 image-column'>
                                    <div className='project-image'>
                                        <img className="profile-image" src="https://via.placeholder.com/130x130" alt="" />
                                    </div>
                                </div>

                                <div className='col-9 content-column px-4 my-3'>
                                    <h4 className='project-name mt-1'> {this.props.projectName} </h4>
                                    <h5 className='project-cause mt-1'> {this.props.cause} </h5>
                                    <p className='project-description mt-2'> {this.props.description} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}

export default ProfilProjectCard