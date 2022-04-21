import React, { Component } from 'react';

class Cause_Card extends Component {

    render() {
        return (
            <div className="col-lg-3 col-md-6 col-12 px-0">
                <div className="categoria">
                    <div className="card-dentro">
                        <div className="card-front">
                            <h3 className="card-titulo"> {this.props.cause} </h3>
                            {this.props.icon}
                        </div>
                        <div className="card-back">
                            <h3 className="card-titulo-back"> {this.props.cause} </h3>
                            <p className="conteudo"> {this.props.content} </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cause_Card