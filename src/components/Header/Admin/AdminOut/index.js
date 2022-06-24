import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import LogoName from '../../../../assets/images/logo-name-right3.svg';

class HeaderAdminOut extends Component {

    render() {
        return (
            <Navbar expand="lg" className="header-admin">
                <Container>
                    <Navbar.Brand><img width="125" src={LogoName} alt="Logo" /></Navbar.Brand>
                </Container>
            </Navbar>
        );
    }
}

export default HeaderAdminOut;
