import React, { Component } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

class HeaderHome extends Component {

    render() {
        return (
            <Navbar expand="lg" className="header-home">
                <Container>
                    <Navbar.Brand href="#">Nome Projeto</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav style={{ marginLeft: "auto" }}>
                            <Nav.Link href="/login">
                                <Button variant="warning" className="btn-1">Login</Button>
                            </Nav.Link>
                            <Nav.Link href="/cadastro">
                                <Button variant="warning" className="btn-1">Cadastro</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default HeaderHome;
