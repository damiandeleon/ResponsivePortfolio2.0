import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <footer id="footer">
            <div>
                <p >Designed by Damian De Leon Copyright © {year} </p>
            </div>
            <div className="row">
                <div>
                    <a className="gitHubIcon"  href="https://github.com/damiandeleon"><IoLogoGithub /></a>
                    
                    <a className="linkedInIcon" href="https://www.linkedin.com/in/damian-de-leon-051b4b2b/"><FaLinkedinIn /></a>
                </div>
            </div>
        </footer>

    )


};


export default Footer;