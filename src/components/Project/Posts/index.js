import React, { Component } from 'react';
import NewPost from './NewPost';
import PostProjeto from './PostProjeto';
import api from '../../../config/api';
import { currentUrl, customAlert, formatDate, translation } from '../../../Helpers';
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
                }, () => { this.postsMount() });
                // console.log("Posts carregados");
            })
            .catch((error) => {
                console.log("erro carregar projeto ", error)
                customAlert(translation(localStorage.getItem('language')).error.loadProjects, "error");
            })
    }

    async postsMount() {

        let posts = []
        this.state.posts.forEach((post) => {
            let date = moment(post.createdAt).format("DD/MM/YYYY")
            posts.push(<PostProjeto date={date} description={post.description} images={post.postImages} />)
        })
        this.setState({ arrayPost: posts })
    }

    render() {
        const t = translation(localStorage.getItem('language'));
        return (
            <section className='posts-section'>

                {/* Para moderado fazer post */}
                {this.props.projectCreator === this.props.userId ? <NewPost /> : ""}

                {(this.state.arrayPost.length > 0) ?
                    <>
                        {this.state.arrayPost}
                    </> :
                    <div className="my-4">
                        <h2>{t.project.info.posts.notYet}</h2>
                    </div>
                }

            </section>
        )
    }
}

export default Posts