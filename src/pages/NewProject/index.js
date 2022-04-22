import React, { Component } from 'react';
import HeaderLogin from '../../components/Header';
import Helmet from 'react-helmet';

class NewProject extends Component {

    render() {
        return (
            <div className="newProject">

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Novo Projeto</title>
                </Helmet>

                <HeaderLogin />

                <section className="titulo">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <h1>Novo projeto</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="form mt-5">
                    <div className="container-lg">
                        <div className="row">
                            <div className="col-lg-8 col-12 mx-auto">
                                <form className="projectForm">
                                    <div className="text-start">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" />
                                        </div>
                                        <div class="mb-3 form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </section>

            </div>

        )
    }
}
export default NewProject