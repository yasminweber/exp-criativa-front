import React, { Component } from 'react';
import Member_Card from '../../../components/Project/Member/Card';

class Member extends Component {

    render() {
        return (
            <section className='project-members' id="members">

                <h3 className='page-title'> Conheça quem faz o projeto acontecer! </h3>
                <p> Conheça os rostos por trás de todas as ações do projeto Corrente do Bem! </p>

                <div className='container-fluid members-section'>
                    <h4 className='members-section-title'> Moderadores </h4>
                    <span className='hr-title'> </span>
                </div>

                <div class="container">
                    <div class="row equal">

                        <Member_Card name="Guilherme Weber" userType="moderador" />

                        <Member_Card name="Guilherme Bernardes Weber" userType="moderador" />

                    </div>
                </div>

                <div className='container-fluid members-section'>
                    <h4 className='members-section-title'> Organizadores </h4>
                    <span className='hr-title'> </span>
                </div>

                <div class="container">
                    <div class="row equal">

                        <Member_Card name="Guilherme Weber" userType="organizador" />

                        <Member_Card name="Guilherme Bernardes Weber" userType="organizador" />

                        <Member_Card name="Guilherme Bernardes Weber" userType="organizador" />

                        <Member_Card name="Guilherme Weber" userType="organizador" />

                        <Member_Card name="Guilherme Weber" userType="organizador" />
                    </div>
                </div>

                <div className='container-fluid members-section'>
                    <h4 className='members-section-title'> Voluntários </h4>
                    <span className='hr-title'> </span>
                </div>

                <div class="container">
                    <div class="row equal">

                        <Member_Card name="Guilherme Weber" userType="voluntario" />

                        <Member_Card name="Guilherme Bernardes Weber" userType="voluntario" />

                    </div>
                </div>

            </section>

        )
    }
}
export default Member