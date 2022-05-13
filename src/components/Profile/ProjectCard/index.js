import React, { Component } from 'react';

class ProfilProjectCard extends Component {

    render() {
        return (
            <a href="#" style={{textDecoration: "none"}}>
                <div className='project-card my-3'>
                    <div className='card-category'> </div>
                    <div className='card-content'>
                        <div className='container-fluid px-0'>
                            <div className='row'>
                                <div className='col-3 image-column'>
                                    <div className='project-image'>

                                    </div>
                                </div>

                                <div className='col-9 content-column px-4 my-3'>
                                    <h4 className='project-name mt-1'> Nome do Projeto Aqui </h4>
                                    <h5 className='project-cause mt-1'> Causa do Projeto Aqui</h5>
                                    <p className='project-description mt-2'> Descrição do projeto aqui... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
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