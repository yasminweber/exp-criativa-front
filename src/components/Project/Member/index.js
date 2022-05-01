import React, { Component } from 'react';
import MemberCard from '../../../components/Project/Member/Card';

class Member extends Component {

    render() {
        return (
            <section className='project-members' id="members">

                <h3 className='page-title mt-5'> Conheça quem faz o projeto acontecer! </h3>
                <p> Conheça os rostos por trás de todas as ações do projeto Corrente do Bem! </p>

                <div className='container-lg'>
                    <div class="members-section">
                        <div class="row w-100">
                            <div class="col-12 d-flex members-section-col">
                                <h4 className='members-section-title'> Moderadores </h4>
                                <span className='hr-title'> </span>
                            </div>
                        </div>
                    </div>

                    <div class="row equal">
                        <MemberCard name="Guilherme Weber" userType="moderador" />

                        <MemberCard name="Guilherme Bernardes Weber" userType="moderador" />
                    </div>

                    <div class="members-section">
                        <div class="row w-100">
                            <div class="col-12 d-flex members-section-col">
                                <h4 className='members-section-title'> Organizadores </h4>
                                <span className='hr-title'> </span>
                            </div>
                        </div>
                    </div>

                    <div class="row equal">
                        <MemberCard name="Guilherme Weber" userType="organizador" />

                        <MemberCard name="Guilherme Bernardes Weber" userType="organizador" />

                        <MemberCard name="Guilherme Bernardes Weber" userType="organizador" />

                        <MemberCard name="Guilherme Weber" userType="organizador" />

                        <MemberCard name="Guilherme Weber" userType="organizador" />
                    </div>

                    <div class="members-section">
                        <div class="row w-100">
                            <div class="col-12 d-flex members-section-col">
                                <h4 className='members-section-title'> Voluntários </h4>
                                <span className='hr-title'> </span>
                            </div>
                        </div>
                    </div>

                    <div class="row equal">
                        <MemberCard name="Guilherme Weber" userType="voluntario" />

                        <MemberCard name="Guilherme Bernardes Weber" userType="voluntario" />
                    </div>
                </div>

            </section>
        )
    }
}
export default Member