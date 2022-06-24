import React, { Component } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { decodeToken } from '../../../config/auth';
import HeaderIdioms from '../Idioms';
import LogoName from '../../../assets/images/logo-name-right3.svg';
// import Logo from '../../../assets/images/logo.svg';
import { customAlert, translation } from "../../../Helpers";

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
                customAlert(translation(localStorage.getItem('language')).error.logged, "error")

                window.location = '/login'
            } else {
                this.setState({ username: this.state.user.user.username });
            }
        }
    }

    async logout() {
        customAlert(translation(localStorage.getItem('language')).success.logout, "success")
        localStorage.removeItem('TOKEN_KEY');
        window.location = '/login'
    }

    render() {
        const t = translation(localStorage.getItem('language'));
        return (
            <Navbar expand="lg" className="header">
                <Container>
                    <Navbar.Brand href="/meusInteresses">
                        <img className="d-inline-block align-top" src={LogoName} alt="Logo" width="125" />
                    </Navbar.Brand>
                    <div className="d-lg-none d-block ms-auto">
                        <HeaderIdioms />
                    </div>

                    <Navbar.Toggle aria-controls="navbarScroll" aria-expanded={false} onClick={openMenu} />
                    <Navbar.Collapse id="navbarScroll" className="d-lg-block d-none">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/meusInteresses">{t.headerUser.interests}</Nav.Link>
                            <Nav.Link href="/newProject">{t.headerUser.newProject}</Nav.Link>
                            <NavDropdown title={t.headerUser.causes.title} id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/cause/acessibilidade">{t.headerUser.causes.accessibility}</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/criancas">{t.headerUser.causes.kids}</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/educacao">{t.headerUser.causes.education}</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/empoderamento-feminino">{t.headerUser.causes.womenEmpowerment}</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/fome">{t.headerUser.causes.hunger}</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/lgbtqia">{t.headerUser.causes.lgbtqia}</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/meio-ambiente">{t.headerUser.causes.environment}</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/maus-tratos-aos-animais">{t.headerUser.causes.animals}</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/terceira-idade">{t.headerUser.causes.seniors}</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/tragedia">{t.headerUser.causes.disaster}</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/saude">{t.headerUser.causes.health}</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cause/sem-teto">{t.headerUser.causes.homeless}</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <HeaderIdioms />
                        <NavDropdown
                            style={{ textDecoration: "none" }}
                            className="dropdown-toggle-color"
                            title={
                                <img src={this.state.user.user.profileImage} className="rounded-circle"
                                    width="32px" height="32px" alt="Imagem perfil" />
                            }
                        >
                            <div className="text-center my-2">{this.state.user.user.name}</div>
                            <NavDropdown.Item href="/profile" className="dropdown-color"> {t.headerUser.profile} </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={this.logout} className="dropdown-color"> {t.headerUser.logout} </NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>

                <div className="menu-mobile">
                    <div className="container-lg h-100">
                        <div className="row mt-5">
                            <div className="col-12">
                                <Navbar.Brand href="/meusInteresses">All4One</Navbar.Brand>
                            </div>
                        </div>
                        <div className="row h-100">
                            <div className="col-12 px-0 w-75 mx-auto">
                                <Nav className="me-auto my-2 my-lg-0 content" navbarScroll>
                                    <Nav.Link href="/meusInteresses">{t.headerUser.interests}</Nav.Link>
                                    <Nav.Link href="/newProject">{t.headerUser.newProject}</Nav.Link>
                                    <NavDropdown title={t.headerUser.causes.title} id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="/cause/acessibilidade">{t.headerUser.causes.accessibility}</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/criancas">{t.headerUser.causes.kids}</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/educacao">{t.headerUser.causes.education}</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/empoderamento-feminino">{t.headerUser.causes.womenEmpowerment}</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/fome">{t.headerUser.causes.hunger}</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/lgbtqia">{t.headerUser.causes.lgbtqia}</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/meio-ambiente">{t.headerUser.causes.environment}</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/maus-tratos-aos-animais">{t.headerUser.causes.animals}</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/terceira-idade">{t.headerUser.causes.seniors}</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/tragedia">{t.headerUser.causes.disaster}</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/saude">{t.headerUser.causes.health}</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cause/sem-teto">{t.headerUser.causes.homeless}</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </div>
                            <div className="col-12 px-0 account">
                                <NavDropdown
                                    style={{ textDecoration: "none" }}
                                    className="dropdown-toggle-color"
                                    title={
                                        <img
                                            src={this.state.user.user.profileImage}
                                            className="rounded-circle"
                                            width="32px" height="32px"
                                            alt="Imagem perfil"
                                        />
                                    }
                                >
                                    <div className="text-center my-2">{this.state.user.user.name}</div>
                                    <NavDropdown.Item href="/profile" className="dropdown-color"> {t.headerUser.profile} </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={this.logout} className="dropdown-color"> {t.headerUser.logout} </NavDropdown.Item>
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
