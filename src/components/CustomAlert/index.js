import { React, Component } from 'react';
import { translation } from '../../Helpers';

class CustomAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show
        }
    }

    render() {
        const t = translation(localStorage.getItem('language'));

        return (
            <div class="modal fade" id="custom-alert" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content" id="custom-alert-color">
                        <div class="modal-header">
                            <button type="button" class="btn-close" id="modal-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body py-0" id="customAlert-description"> </div>
                        <div class="modal-footer"> </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomAlert