import React, { Component } from 'react';
import HeaderLogin from '../../components/Header/User';
import Helmet from 'react-helmet';
import api from '../../config/api'
import { customAlert, translation } from '../../Helpers';
import Footer from '../../components/Footer';

class Depoimento extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: ""
        }

        this.newTestimonial = this.newTestimonial.bind(this);
    }

    async newTestimonial(e) {
        e.preventDefault();

        const testimonial = {
            description: this.state.description,
        }

        console.log(testimonial)

        await api.post('/testimonial', testimonial);

        customAlert(translation(localStorage.getItem('language')).success.testimonial, "success");
        window.setTimeout(function () {
            window.location.href = '/meusInteresses';
        }, 2000);
    }

    render() {
        const t = translation(localStorage.getItem('language'));
        return (
            <div className="depoimento">

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{t.testimonial.title}</title>
                </Helmet>

                <HeaderLogin />

                <section className="banner-titulo">
                    <div className="container-xl">
                        <div className="row text-lg-start text-center">
                            <div className="col-12">
                                <h1 className="titulo-1">{t.testimonial.title1}</h1>
                                <p className="descricao">{t.testimonial.sub1}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="form pb-5">
                    <div className="container-lg">
                        <div className="row">
                            <div className="col-lg-8 col-12 mx-auto">
                                <form className="testimonialForm" onSubmit={this.newTestimonial}>
                                    <div className="text-start">
                                        <div className="form-floating mb-3 order-md-0 order-1">
                                            <textarea className="form-control" id="floatingTextarea2" placeholder={t.testimonial.description}
                                                onChange={(e) => this.setState({ description: e.target.value })} required />
                                            <label htmlFor="floatingTextarea2">{t.testimonial.description}</label>
                                        </div>
                                    </div>

                                    <div className="enviar mt-3">
                                        <button type="submit" className="btn-1">{t.testimonial.btn}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />

            </div>
        )
    }
}

export default Depoimento
