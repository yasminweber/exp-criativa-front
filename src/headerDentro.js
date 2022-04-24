import React, { Component } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { decodeToken } from './config/auth';

class HeaderDentro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: decodeToken(),
            username: ''
        };

        this.componentDidMount = () => {
            console.log(this.state.user)
            this.checkUser();
        }
    }

    async checkUser() {
        // console.log(this.state.user);
        if ((window.location.href !== 'http://localhost:3000/cadastro')) {
            if (this.state.user === null) {
                alert("Usuario não logado. Por favor, faça o login.");
                window.location = '/login'
            } else {
                this.setState({ username: this.state.user.user.username });
            }
        }
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
                        {console.log(this.state.user)}

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

export default HeaderDentro;