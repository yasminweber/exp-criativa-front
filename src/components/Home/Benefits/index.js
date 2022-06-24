import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Benefits extends Component {

    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        // dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        };

        return (
            <div className="slick">
                <Slider {...settings}>
                    <div className="item">
                        <div className="dentro-item">
                            <h3 className="titulo-1">Yasmin Weber</h3>
                            <p className="descricao">Amei o site! As propostas de projeto são super interessantes e acredito que podem ajudar a cidade de Curitiba</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="dentro-item">
                            <h3 className="titulo-1">Guilherme Weber</h3>
                            <p className="descricao">Funciona muito bem! Não havia achado nenhuma plataforma completa como essa!</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="dentro-item">
                            <h3 className="titulo-1">Marianna Bove</h3>
                            <p className="descricao">A melhor solução para ajudar quem mais precisa! Estou sempre buscando novos projetos!</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="dentro-item">
                            <h3 className="titulo-1">Joaquin Silva</h3>
                            <p className="descricao">Adoro ajudar os outros e a plataforma tem várias ideias interessantes e que realmente são colocadas em prática!</p>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default Benefits