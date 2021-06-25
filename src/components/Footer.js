import React from "react";
import { Col, Row, } from "react-bootstrap";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <footer id="footer">
            <Row>
                <h6 >Designed by Damian De Leon Copyright © {year} </h6>
            </Row>
            <Row>
                <Col>
                    <a style={{ margin: "5px", color: "white" }} href="https://github.com/damiandeleon"><IoLogoGithub /></a>
                    
                    <a style={{ margin: "5px", color: "white" }} href="https://www.linkedin.com/in/damian-de-leon-051b4b2b/"><FaLinkedinIn /></a>
                </Col>
            </Row>
        </footer>

    )


};


export default Footer;