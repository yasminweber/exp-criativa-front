import React, { Component } from 'react';
import NewPost from './NewPost';
import PostProjeto from './PostProjeto';
import { getImagesUrl } from '../../../Helpers';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // async componentDidMount() {
    //     let urlList = await getImagesUrl("6296ac63df77f7595cee4342");
    //     console.log(urlList)
    // }

    render() {
        return (
            <section className='posts-section'>

                {/* Para moderado fazer post */}
                {this.props.projectCreator === this.props.userId ? <NewPost /> : ""}

                <PostProjeto date="01/01/2001" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
                <PostProjeto date="01/01/2001" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
            </section>
        )
    }

}

export default Posts