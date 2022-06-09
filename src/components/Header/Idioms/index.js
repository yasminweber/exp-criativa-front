import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { changeLanguage, translation } from '../../../Helpers';

class HeaderIdioms extends Component {
    render() {
        const t = translation(localStorage.getItem('language'));
        return (
            <NavDropdown className="align-self-center" title={<img className="flag-icon" src={t.flag} height={"30px"} alt={"something"} />} id="language">
                <NavDropdown.Item onClick={changeLanguage} id="en"><img className="flag-icon" id="en" style={{paddingRight: "5px"}} src={translation('en').flag} height={"24px"} alt="USA Flag" />English</NavDropdown.Item>
                <NavDropdown.Item onClick={changeLanguage} id="pt-br"><img className="flag-icon" id="pt-br" style={{paddingRight: "5px"}} src={translation('pt-br').flag} height={"24px"} alt="Brazil Flag" />Português</NavDropdown.Item>
            </NavDropdown>
        );
    }
}

export default HeaderIdioms;
