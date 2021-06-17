import React from "react";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid ps-4" >
                    <a className="navbar-brand nav-link" href="#/">Damian DeLeon</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link" href="#/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=".#/project">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=".#/contact">Contact</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );



};


export default Header;