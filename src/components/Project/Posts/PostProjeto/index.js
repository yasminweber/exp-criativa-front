import React, { Component } from 'react';
import { translation } from '../../../../Helpers';

class PostProjeto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imagesArray: []
        }

        this.imagesAdd = this.imagesAdd.bind(this)
    }

    componentDidMount() {
        this.imagesAdd()
    }

    imagesAdd() {
        let images = []
        Array.from(this.props.images).forEach( (url) => {
            images.push(<img className='post-image' src={url} />)
        })
        this.setState({imagesArray: images})
    }

    render() {
        const t = translation(localStorage.getItem('language'));
        return (
            <div className='container mt-4'>
                <div className='row text-row'>
                    <div className='col-lg-7 col-sm-11 post-text'>
                        <span className='post-title'> {t.project.info.posts.whoPublished} </span>
                        <span className='post-title'> {this.props.date} </span>
                        <p className='post-description'> {this.props.description} </p>
                    </div>
                </div>

                <div className='row post-image-row mt-4'>
                    <div className='col-lg-6 col-sm-11 post-image-column'>
                        {this.state.imagesArray}
                    </div>
                </div>
            </div>
        )
    }

}

export default PostProjeto