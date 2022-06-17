import React, { Component } from 'react';
import NewPost from './NewPost';
import PostProjeto from './PostProjeto';
import api from '../../../config/api';
import { currentUrl, formatDate } from '../../../Helpers';
import moment from 'moment';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayPost: [<span> Esse projeto ainda não tem nenhum post! </span>]
        }

        this.postsMount = this.postsMount.bind(this)
        this.getProject = this.getProject.bind(this)
    }

    componentDidMount() {
        this.getProject()
    }

    async getProject() {
        await api.get(`/project/${currentUrl()}`)
            .then((response) => {
                const data = response.data;
                this.setState({
                    posts: data.posts
                }, () => {this.postsMount()});
                console.log("Posts carregados");
            })
            .catch((error) => {
                console.log("erro carregar projeto ", error)
                alert('Erro para carregar o projeto');
            })
    }

    async postsMount() {

        let posts = []
        this.state.posts.forEach( (post) => {
            let date = moment(post.createdAt).format("DD/MM/YYYY")
            posts.push(<PostProjeto date={date} description={post.description} images={post.postImages}/>)
        })
        this.setState({arrayPost: posts})
    }

    render() {
        return (
            <section className='posts-section'>

                {/* Para moderado fazer post */}
                {this.props.projectCreator === this.props.userId ? <NewPost /> : ""}

                {this.state.arrayPost}
                {/* <PostProjeto date="01/01/2001" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." /> */}
            </section>
        )
    }

}

export default Posts