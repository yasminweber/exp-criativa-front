import React, { Component } from "react";
import { translation } from "../../Helpers";

class Footer extends Component {
    render() {
        const t = translation(localStorage.getItem("language"))
        return (
            <footer className="custom-footer">
                <div className="container">
                    <footer className="py-3 my-4">
                        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                            <li className="nav-item"><a href="/meusInteresses" className="nav-link px-2 text-muted">{t.headerUser.interests}</a></li>
                            <li className="nav-item"><a href="/newProject" className="nav-link px-2 text-muted">{t.headerUser.newProject}</a></li>
                            <li className="nav-item"><a href="/profile" className="nav-link px-2 text-muted">{t.headerUser.profile}</a></li>
                            <li className="nav-item"><a href="/depoimento" className="nav-link px-2 text-muted">{t.headerUser.testimonial}</a></li>
                        </ul>
                        <p className="text-center text-muted">© 2022 All4One</p>
                    </footer>
                </div>
            </footer>
        )
    }
}

export default Footer;
