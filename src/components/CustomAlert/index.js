import { React, Component } from 'react';
import { Alert } from 'react-bootstrap';
import { translation } from '../../Helpers';

class CustomAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show
        }
    }

    closeAlert() {
        this.setState({ show: false });
    }

    render() {
        const t = translation(localStorage.getItem('language'));
        return (
            <>
                {(this.state.aNetwork === true) ?
                    <Alert variant="danger" onClose={() => this.closeAlert()} dismissible >
                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                        <p>Por favor tente novamente mais tarde</p>
                    </Alert >
                    : <></>
                }
            </>
        );
    }
}

export default CustomAlert