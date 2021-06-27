import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <footer id="footer">
            <div>
                <h6 >Designed by Damian De Leon Copyright © {year} </h6>
            </div>
            <div className="row">
                <div>
                    <a style={{ marginRight: "5px", color: "white" }} href="https://github.com/damiandeleon"><IoLogoGithub /></a>
                    
                    <a style={{ marginLeft: "5px", color: "white" }} href="https://www.linkedin.com/in/damian-de-leon-051b4b2b/"><FaLinkedinIn /></a>
                </div>
            </div>
        </footer>

    )


};


export default Footer;