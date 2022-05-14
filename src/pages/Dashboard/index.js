import React, { Component } from 'react';
import HeaderAdminIn from '../../components/Header/AdminIn';
import Helmet from 'react-helmet';
import { decodeToken } from '../../config/auth';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: decodeToken(),
            projects: []
        }
    }

    render() {
        return (
            <div className="dashboard">

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Dashboard</title>
                </Helmet>

                <div className="container-fluid">
                    <div className="row flex-nowrap">
                        <HeaderAdminIn />
                        <div className="col-auto col-md-9 col-xl-10 px-sm-2 px-0">
                            <div className="container-lg">
                                <div className="row text-lg-start text-center">
                                    <div className="col-12">
                                        <h1 className="titulo-1 mt-4 mb-5" style={{ fontSize: "24px" }}>Dashboard</h1>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <h2>Colocar gráficos aqui</h2>
                                    </div>
                                </div>

                                {/* <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="box-item" style={{backgroundColor: "lightblue"}}>
                                            <h2>Causas</h2>

                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Dashboard