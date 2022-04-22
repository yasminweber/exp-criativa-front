import React, { Component } from 'react';

class Cause_Card extends Component {

    render() {
        return (
            <div className="col-lg-3 col-md-6 col-12 px-0">
                <div className="categoria">
                    <div className="card-dentro">
                        <div className="card-front d-flex flex-column align-items-center justify-content-between">
                            <h3 className="card-titulo"> {this.props.cause} </h3>
                            <img className="img-fluid simbolo" src={this.props.icon} alt="Icone" />
                            {/* {this.props.icon} */}
                        </div>
                        <div className="card-back">
                            <h3 className="card-titulo"> {this.props.cause} </h3>
                            <p className="conteudo"> {this.props.content} </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cause_Card