import React, { Component } from 'react';
import profilePhoto from '../../../../assets/images/userProfileGuilherme.jpeg'

class Member_Card extends Component {

    render() {
        return (
            <div className='member-card'>
                <div className='profile-user'>
                    <img src={profilePhoto} className="photo"/>
                </div>

                <h2 className='user-name'> Guilherme Weber </h2>
                <h3 className='user-type'> Moderador </h3>

                <button className='profile-button'> Ver Perfil </button>
            </div>

        )
    }
}
export default Member_Card