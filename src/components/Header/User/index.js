import React, { Component } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { decodeToken } from '../../../config/auth';

class HeaderUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: decodeToken(),
            username: ''
        };

        this.componentDidMount = () => {
            this.checkUser();
        }

        this.logout = this.logout.bind(this)
    }

    async checkUser() {
        if ((window.location.href !== 'http://localhost:3000/cadastro')) {
            if (this.state.user === null) {
                alert("Usuario não logado. Por favor, faça o login.");
                window.location = '/login'
            } else {
                this.setState({ username: this.state.user.user.username });
            }
        }
    }



    async logout() {
        alert("Você fez logout");
        localStorage.removeItem('TOKEN_KEY');
        window.location = '/login'
    }

    render() {
        return (
            <Navbar expand="lg" className="header">
                <Container>
                    <Navbar.Brand href="/meusInteresses">All4One</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" aria-expanded={false} onClick={openMenu} />
                    <Navbar.Collapse id="navbarScroll" className="d-lg-block d-none">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/meusInteresses">Meus interesses</Nav.Link>
                            <Nav.Link href="/newProject">Novo projeto</Nav.Link>
                            <NavDropdown title="Causas" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/cause/acessibilidade">Acessibilidade</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/criancas">Crianças</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/educacao">Educação</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/empoderamento-feminino">Empoderamento Feminino</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/fome">Fome</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/lgbtqia">LGBTQIA+</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/meio-ambiente">Meio Ambiente</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/maus-tratos-aos-animais">Maus tratos aos animais</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/terceira-idade">Terceira Idade</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/tragedia">Tragédia</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/saude">Saúde</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/sem-teto">Sem teto</NavDropdown.Item>
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
                            <div className="text-center my-2">{this.state.user.user.name}</div>
                            <NavDropdown.Item href="/profile" className="dropdown-color"> Perfil </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={this.logout} className="dropdown-color"> Sair </NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>

                <div class="menu-mobile">
                    <div class="container-lg h-100">
                        <div className="row mt-5">
                            <div class="col-12">
                                <Navbar.Brand href="/meusInteresses">All4One</Navbar.Brand>
                            </div>
                        </div>
                        <div class="row h-100">
                            <div class="col-12 px-0 w-75 mx-auto">
                                <Nav className="me-auto my-2 my-lg-0 content" navbarScroll>
                                    <Nav.Link href="/meusInteresses">Meus interesses</Nav.Link>
                                    <Nav.Link href="/newProject">Novo projeto</Nav.Link>
                                    <NavDropdown title="Causas" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="/cause/acessibilidade">Acessibilidade</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/criancas">Crianças</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/educacao">Educação</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/empoderamento-feminino">Empoderamento Feminino</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/fome">Fome</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/lgbtqia">LGBTQIA+</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/meio-ambiente">Meio Ambiente</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/maus-tratos-aos-animais">Maus tratos aos animais</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/terceira-idade">Terceira Idade</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/tragedia">Tragédia</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/saude">Saúde</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/sem-teto">Sem teto</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </div>
                            <div class="col-12 px-0 account">
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
                                    <div className="text-center my-2">{this.state.user.user.name}</div>
                                    <NavDropdown.Item href="/profile" className="dropdown-color"> Perfil </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={this.logout} className="dropdown-color"> Sair </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
        );
    }
}

export default HeaderUser;

function openMenu() {
    const btnMenu = document.querySelector('.header .navbar-toggler');

    if (btnMenu !== null) {
        if (btnMenu.getAttribute('aria-expanded') === "false") {
            btnMenu.setAttribute('aria-expanded', 'true')
            document.querySelector('.header .menu-mobile').classList.add('aberto');
            document.querySelector('body').style.overflow = "hidden"
        } else {
            btnMenu.setAttribute('aria-expanded', 'false')
            document.querySelector('.header .menu-mobile').classList.remove('aberto');
            document.querySelector('body').style.overflow = "visible"
        }
    }
}
