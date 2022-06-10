import React, { Component } from 'react';
import { FaPaperclip } from 'react-icons/fa'
import { storage } from '../../../../firebase';

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
    }

    postData(e) {
        let newValue = e.target.value
        this.setState({ postContent: newValue }, () => {
            let length = this.state.postContent.length
            this.setState({ charactersCounter: 335 - length })
        })
    }

    newPost() {
        // Aqui vai a função do mongo
                

        // Função upload firebase
        if (this.state.files !== "") {
            let url = window.location.href
            let projectId = url.substring(url.lastIndexOf('/'));
            let ref = 'posts/' + projectId

            this.state.files.forEach((file) => {
                storage.ref(ref).child(file['name']).put(file)
                    .then((snapshot) => {
                        console.log("Upload realizado!")
                    })
                    .catch((error) => {
                        alert("Não foi possível fazer o upload das imagens. Tente novamente!")
                        console.log(error)
                    })
            })
            this.setState({ files: [], filesList: [] })
        }
    }

    fileAdd(e) {
        // Verificar se não foi selecionado arquivos.
        if (e.target.files[0] == undefined) {
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
        return (
            <div className='container-lg mt-4'>
                <div className='row post-content'>
                    <div className='col-lg-7 col-sm-11' style={{ padding: 0 }}>
                        <textarea placeholder='O que deseja compartilhar?' name='postContent' value={this.state.postContent}
                            onChange={this.postData} maxLength="335" rows="5" />
                    </div>
                </div>
                <div className='row toolbar-row'>
                    <div className='col-lg-7 col-sm-11 post-toolbar'>


                        <div className='attachment-option'>
                            <input type="file" id="post-image" className='d-none' accept="image/*" onChange={this.fileAdd} />
                            <label for="post-image" className='post-image-label'>
                                <span> <FaPaperclip /> </span> Adicionar Imagem
                            </label>

                        </div>

                        <div className='character-counter'>
                            <label> {this.state.charactersCounter} caracteres restantes </label>
                        </div>
                    </div>
                </div>
                <div className='attachment-list'>
                    <span className='attachment-title'> Lista de Anexos: </span>
                    <ul>
                        {this.state.filesList}
                    </ul>
                </div>
                <div className='row button-row'>
                    <div className='col-lg-7 col-sm-11 button-column'>
                        <button onClick={this.newPost}> Publicar </button>
                    </div>
                </div>
            </div>
        )
    }

}

export default NewPost