import React, { Component } from 'react';
import Member_Card from './Card';

class Member extends Component {

    render() {
        return (
            <section className='project-members'>

                <h3 className='page-title'> Conheça quem faz o projeto acontecer! </h3>

                <div className='container-lg'>
                    <label className='filter-subtitle'> Selecione abaixo qual tipo de usuário deseja visualizar: </label> <br />
                    <button className='user-type-filter filter0'> Todos </button>
                    <button className='user-type-filter filter1'> Moderadores </button>
                    <button className='user-type-filter filter2'> Organizadores </button>
                    <button className='user-type-filter filter3'> Voluntários </button>
                </div>

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