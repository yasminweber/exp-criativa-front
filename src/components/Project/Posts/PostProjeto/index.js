import React, { Component } from 'react';

class PostProjeto extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='container mt-4'>
                <div className='row text-row'>
                    <div className='col-lg-7 col-sm-11 post-text'>
                        <span className='post-title'> O moderador publicou sobre o projeto em </span>
                        <span className='post-title'> {this.props.date} </span>
                        <p className='post-description'> {this.props.description} </p>
                    </div>
                </div>

                <div className='row post-image-row mt-4'>
                    <div className='col-lg-6 col-sm-11 post-image-column'>
                        <img className='post-image' src="https://via.placeholder.com/1920x1080" />
                    </div>
                </div>
            </div>
        )
    }

}

export default PostProjeto