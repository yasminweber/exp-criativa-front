import React, { Component } from 'react';

class AchievementsCard extends Component {

    render() {
        return (
            <div class="col mb-1">
                <div class="card h-100">
                    <div className='card-content'>
                        <div class="card-img-top mt-3"> </div>
                        <div class="card-body">
                            <h5 class="card-title"> {this.props.title} </h5>
                            <p class="card-text"> {this.props.content} </p>
                        </div>
                    </div>

                    <div class="card-footer">
                        {this.props.percentage !== "100%" ?
                            <div class="progress mt-3">
                                <div class="progress-bar" role="progressbar" style={{ width: this.props.percentage }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{this.props.percentage}</div>
                            </div>
                            :
                            <button type="button" class="btn btn-primary reward-button btn-sm my-1">Resgatar Recompensa</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default AchievementsCard