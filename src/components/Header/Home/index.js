import React, { Component } from 'react';
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
import { changeLanguage } from '../../../Helpers';

class HeaderHome extends Component {

    render() {
        return (
            <Navbar expand="lg" className="header-home">
                <Container>
                    <Navbar.Brand href="/">All4One</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav style={{ marginLeft: "auto" }}>
                            <NavDropdown className="align-self-center" title={localStorage.getItem('language')} id="language">
                                <NavDropdown.Item onClick={changeLanguage} id="en"><img className="flag-icon" src="https://cdn-icons-png.flaticon.com/512/330/330459.png" height={"24px"} alt="USA Flag" />English</NavDropdown.Item>
                                <NavDropdown.Item onClick={changeLanguage} id="pt-br"><img className="flag-icon" src="https://cdn-icons-png.flaticon.com/512/330/330430.png" height={"24px"} alt="Brazil Flag" />Português</NavDropdown.Item>
                            </NavDropdown>
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
