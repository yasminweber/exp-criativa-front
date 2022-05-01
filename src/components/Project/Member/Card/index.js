import React, { Component } from 'react';
import profilePhoto from '../../../../assets/images/userProfileGuilherme.jpeg'

class Member_Card extends Component {

    render() {
        return (
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                <div class={"member-card " + this.props.userType}>
                    <div className='profile-user'>
                        <img src={profilePhoto} className="photo" alt="Foto Perfil" />
                    </div>

                    <h2 className='user-name'> {this.props.name} </h2>
                    <h3 className='user-type'> {this.props.userType} </h3>

                    <button className='profile-button'> Ver Perfil </button>
                </div>
            </div>
        )
    }
}
export default Member_Card