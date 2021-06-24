import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <footer id="footer">
            <row>
                <h6 >Designed by Damian De Leon Copyright © {year}
                </h6>
            </row>
            <row>
                <column style={{marginRight: "5px"}} >
                    <a style={{color: "white"}} href="https://github.com/damiandeleon"><IoLogoGithub /></a>
                </column>
                <column style={{marginLeft: "5px"}}>
                    <a style={{color: "white"}} href="https://www.linkedin.com/in/damian-de-leon-051b4b2b/"><FaLinkedinIn /></a>
                </column>

            </row>
        </footer>

    )


};


export default Footer;