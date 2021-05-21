import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <footer id="footer">
      
            <h3>Designed by Damian De Leon Copyright © {year} 
            <a href="https://github.com/damiandeleon"><IoLogoGithub /></a>
                <a href="https://www.linkedin.com/in/damian-edmonson-de-leon-051b4b2b/"><FaLinkedinIn /></a>
            </h3>
            <h2>

            </h2>
           

        </footer>

    )


};


export default Footer;