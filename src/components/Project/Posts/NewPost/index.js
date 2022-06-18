import React, { Component } from 'react';
import { FaPaperclip } from 'react-icons/fa'
import api from '../../../../config/api';
import { storage } from '../../../../firebase';
import { currentUrl, getImagesUrl, translation } from '../../../../Helpers';

class NewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            charactersCounter: 335,
            postContent: "",
            files: [],
            filesList: []
        }

        this.postData = this.postData.bind(this);
        this.fileAdd = this.fileAdd.bind(this);
        this.fileRemove = this.fileRemove.bind(this);
        this.newPost = this.newPost.bind(this);
        this.firebaseUpload = this.firebaseUpload.bind(this);
    }

    postData(e) {
        let newValue = e.target.value
        this.setState({ postContent: newValue }, () => {
            let length = this.state.postContent.length
            this.setState({ charactersCounter: 335 - length })
        })
    }

    async firebaseUpload(postId, file) {
        let ref = "posts/" + postId
        let imageUrl = await storage.ref(ref).child(file.name).put(file)
            .then(snapshot => snapshot.ref.getDownloadURL())
            .catch(error => console.log("Houve um erro. Não foi possível fazer upload de imagem.", error))
        return imageUrl
    }

    async newPost() {
        // Busca ID do projeto
        let projectId = currentUrl();

        // Grava o conteúdo do post no banco e retorna o id gerado
        let responseNew = await api.post(`/newPost/${projectId}`, { description: this.state.postContent })
        let newPostId = responseNew.data

        // Grava imagens no firebase e retorna array de url
        let imagesUrl = await Promise.all(this.state.files.map(file =>
            this.firebaseUpload(newPostId, file)
        ))

        // Adiciona array de url no banco
        await api.put(`/posts/${newPostId}`, {postImages: imagesUrl})

        // Zera campos após adição
        this.setState({
            files: [],
            filesList: [],
            postContent: ""
        })

        window.location.reload()
        // Verificar para inverter ordem do array
    }

    fileAdd(e) {
        // Verificar se não foi selecionado arquivos.
        if (e.target.files[0] === undefined) {
            return;
        }

        let files = this.state.files
        files.push(e.target.files[0])

        this.setState({ files: files }, () => {
            let state = this.state.filesList
            state.push(<li className="attachment-item" id={e.target.files[0]['name']} onClick={this.fileRemove}> {e.target.files[0]['name']} </li>)
            this.setState({ filesList: state })
        })
    }

    fileRemove(e) {
        let files = this.state.files
        let filesList = this.state.filesList

        let filesListIndex = 0
        filesList.forEach((fileName) => {
            if (fileName.props.id === e.target.id) {
                filesList.splice(filesListIndex, 1)
            }
            filesListIndex++
        })

        let filesIndex = 0
        files.forEach((file) => {
            if (file.name === e.target.id) {
                files.splice(filesIndex, 1)
            }
            filesIndex++
        })


        this.setState({ files: files, filesList: filesList }, () => {
            console.log(this.state.files)
            console.log(this.state.filesList)
        })
    }

    render() {
        const t = translation(localStorage.getItem('language'));
        return (
            <div className='container-lg mt-4'>
                <div className='row post-content'>
                    <div className='col-lg-7 col-sm-11' style={{ padding: 0 }}>
                        <textarea placeholder={t.project.info.posts.placeholder} name='postContent' value={this.state.postContent}
                            onChange={this.postData} maxLength="335" rows="5" />
                    </div>
                </div>
                <div className='row toolbar-row'>
                    <div className='col-lg-7 col-sm-11 post-toolbar'>


                        <div className='attachment-option'>
                            <input type="file" id="post-image" className='d-none' accept="image/*" onChange={this.fileAdd} />
                            <label for="post-image" className='post-image-label'>
                                <span> <FaPaperclip /> </span> {t.project.info.posts.image}
                            </label>

                        </div>

                        <div className='character-counter'>
                            <label> {this.state.charactersCounter} {t.project.info.posts.characters} </label>
                        </div>
                    </div>
                </div>
                <div className='attachment-list'>
                    {this.state.files.length !== 0 ?
                        <span className='attachment-title'> {t.project.info.posts.images} </span>
                        : ""}
                    <ul>
                        {this.state.filesList}
                    </ul>
                </div>
                <div className='row button-row'>
                    <div className='col-lg-7 col-sm-11 button-column'>
                        <button onClick={this.newPost}> {t.project.info.posts.btnPublish} </button>
                    </div>
                </div>
            </div>
        )
    }

}

export default NewPost