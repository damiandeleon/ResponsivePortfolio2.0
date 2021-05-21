import React from "react";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid ps-4" >
                 <a className="navbar-brand" href="#">Damian De Leon</a>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="./contact2.html">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./portfolio.html">Portfolio</a>
                        </li>
                        <li className="nav-item"></li>
                            <a className="nav-link active" href="#">About</a>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
        
    );



};


export default Header;