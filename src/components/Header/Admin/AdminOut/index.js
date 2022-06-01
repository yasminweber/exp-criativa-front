import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';

class HeaderAdminOut extends Component {

    render() {
        return (
            <Navbar expand="lg" className="header-admin">
                <Container>
                    <Navbar.Brand>Nome Projeto</Navbar.Brand>
                </Container>
            </Navbar>
        );
    }
}

export default HeaderAdminOut;
