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
            speed: 500
        };

        return (
            <div className="slick">
                <Slider {...settings}>
                    <div className="item">
                        <div className="dentro-item">
                            <h3 className="titulo-1">Valorização pelo mercado</h3>
                            <p className="descricao">Um dos principais motivos para fazer um trabalho voluntário é que ele é bastante valorizado pelas empresas. Ao contar com uma experiência como essa em seu currículo, você estará demonstrando ao mercado que se envolve com projetos sociais e não hesitou em procurar por uma oportunidade de colocar em prática o que está aprendendo na graduação.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="dentro-item">
                            <h3 className="titulo-1">Ganho de experiência</h3>
                            <p className="descricao">
                                Todo estudante universitário sabe como pode ser complicado conseguir o primeiro estágio, principalmente por não ser capaz de comprovar experiência na área. Por isso, investir em um trabalho voluntário também o ajudará a ganhar experiência, mesmo se não for em sua área de atuação. <br /> <br />
                                Só de participar de um projeto e ter um posicionamento atuante e inovador já são fatores preponderantes e benéficos para a sua carreira.
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="dentro-item">
                            <h3 className="titulo-1">Possibilidade de fazer networking</h3>
                            <p className="descricao">
                                Outro ponto positivo que vai ajudá-lo a levar um trabalho voluntário em consideração é a possibilidade de fazer networking. Muitas serão as pessoas que você entrará em contato e terá a oportunidade de demonstrar a sua capacidade.<br /> <br />
                                Portanto, aproveite essa chance para aprimorar a sua capacidade de comunicação e de manter relações com as pessoas.
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="dentro-item">
                            <h3 className="titulo-1">Chance de entrar em contato com outras pessoas e culturas</h3>
                            <p className="descricao">
                                Como consequência do networking, você também entrará em contato com outras pessoas e culturas. Muitas vezes, até o ensino médio, estamos acostumados a conviver apenas com quem tem os mesmos pensamentos e ideais que a gente. No entanto, isso mudará bastante após entrar na faculdade.
                                <br />
                                Em um trabalho voluntário, inclusive, provavelmente você lidará com uma realidade bastante diferente da sua. Essa experiência será imprescindível para abrir os seus olhos e mostrar a você a necessidade de investir em ideias para melhorar e tornar o mundo um lugar melhor.
                                <br />
                                Por menor que seja o trabalho, não tenha dúvidas de que ele já será um ponto inicial para uma transformação!
                            </p>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default Benefits