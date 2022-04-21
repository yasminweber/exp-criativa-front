import React, { Component } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class Header_Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        };
    }

    // async logout() {
    //     alert("Você fez logout");
    //     localStorage.removeItem('TOKEN_KEY');
    //     window.location = '/login'
    // }

    render() {
        return (
            <Navbar expand="lg" className="header">
                <Container>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Dropdown 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Dropdown 2</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Dropdown 3
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        {/* <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}

                        <NavDropdown
                            style={{ textDecoration: "none" }}
                            className="dropdown-toggle-color"
                            title={
                                <img
                                    src="https://via.placeholder.com/32x32"
                                    className="rounded-circle"
                                    width="32px" height="32px"
                                    alt="Imagem perfil"
                                />
                            }
                        >
                            <NavDropdown.Item href="/perfil" className="dropdown-color"> Perfil </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={this.logout} className="dropdown-color"> Sair </NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header_Home;