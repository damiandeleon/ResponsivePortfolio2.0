import React from "react";
import DamianLeatherJacket from "../Assets/Images/Damian_LeatherJacket.jpeg";
import DamianInOffice from "../Assets/Images/damian-office.jpeg";
import DamianLLAP from "../Assets/Images/Damian_LLAP.jpeg";

const About = () => {
    return (

        <div>
            <div className="container">
                <div className="row">
                    <div className="mt-5">
                        <div className="card CardPad">
                            <div className="card-header h1 pt-4 pb-3">
                                About Me
                            </div>
                            <div className="">
                                <div>
                                    <img src={DamianLeatherJacket} className="rounded float-start pe-3 pic1" alt="Damian with leather jacket" />
                                </div>

                                <article style={{margin: "20px"}}>
                                    <p>My name is Damian Deleon. I am a graduate of the Coding Boot Camp at the Unviersity of Texas at Austin.  I am a certified Full-Stack Web Developmenr. I am curently open to new job opportunties in the tech
                                        industry. If you are looking to hire a developer who also has proven experience
                                        with business sales, marketing, and customer service, please reach out!</p>
                                    <hr />
                                    <div style={{margin: "20px"}}>
                                    <p>Damian's Linked In Profile: <a
                                        href="https://www.linkedin.com/in/damian-edmonson-de-leon-051b4b2b/"
                                        target="blank">LinkedIn</a></p>
                                    <p>GitHub Profile: <a href="https://github.com/damiandeleon" target="blank">GitHub</a></p>
                                    <p>Download Damian's Resume: <a href="./Assets/Damian-Deleon.pdf" target="_blank">Resume</a>
                                    </p>
                                    </div>
                                </article>
                            </div>

                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            My Professional Story
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            I started my career in business after graduating college. For the years between 1997
                                            to 2020, I worked in the contact center industry. My professional career in Austin
                                            was devoted to Concentrix Corp. I had much success with the company between 2003 -
                                            2020. However I decided that I
                                            wanted to try something completely different in a new emerging industry. Web
                                            Development and
                                            coding was something that I knew would give me the exciting challenge I was seeking.
                                            I am excited to
                                            make it my new career.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            List Of Web Development Languages Skills
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            I have worked on the following coding languages: * React * HTML * CSS * JavaScript *
                                            AJAX * SQL * Node.js * API * GitHub * MySQL * JSON * OOP * MongoDB.
                                            * Mongo Atlas * Heroku
                                        </div>
                                        <div>
                                            <img src={DamianInOffice} id="pic2" alt="Damian in the office with arms folded and smiling" />
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Unique Things About Me
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Throughout my life I have been fortunate to make the most of my humble
                                            beginnings. I grew up in a working-className family.  I
                                            was inspired by the work ethic my parents practiced. That became my mantra.
                                            Below are some things about me.
                                            <article>
                                                <ul>
                                                    <li>I volunteered in a prison ministry for 3 years</li>
                                                    <li>I am LGBT+ 🏳️‍🌈 </li>
                                                    <li>I support Mobile Loaves and Fishes to help the homeless</li>
                                                    <li>My immediate family is made up of three generations (The Great
                                                        Generation,
                                                        Baby Boomers, and Gen X)</li>
                                                    <li>I am a Trekkie 🖖🏼 </li>
                                                    <li>I practice physical fitness to stay healthy</li>
                                                    <li>I believe healthy masculnity means a man should provide, protect, and
                                                        preside in the lives of our loved ones.</li>
                                                </ul>
                                                <img src={DamianLLAP} id="pic3"
                                                    alt="Damian making LLAP hand sign" />
                                            </article>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )

};

export default About;