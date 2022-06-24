import React, { Component } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { translation } from '../../../Helpers';
import HeaderIdioms from '../Idioms';
import LogoName from '../../../assets/images/logo-name-right3.svg';

class HeaderHome extends Component {
    render() {
        const t = translation(localStorage.getItem('language'));
        return (
            <Navbar expand="lg" className="header-home">
                <Container>
                    <Navbar.Brand href="/"><img width="125" src={LogoName} alt="Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav style={{ marginLeft: "auto" }}>
                            <HeaderIdioms />         
                            <Nav.Link href="/login">
                                <Button variant="warning" className="btn-1">{t.headerHome.btn1}</Button>
                            </Nav.Link>
                            <Nav.Link href="/cadastro">
                                <Button variant="warning" className="btn-1">{t.headerHome.btn2}</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default HeaderHome;
