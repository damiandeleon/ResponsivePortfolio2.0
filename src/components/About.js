import React from "react";
import DamianLeatherJacket from "../Assets/Images/Damian_LeatherJacket.jpeg";
import DamianInOffice from "../Assets/Images/damian-office.jpeg";
import DamianLLAP from "../Assets/Images/Damian_LLAP.jpeg";
import DamianResume from "../Assets/Deleon_Resume.pdf";

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

                                <article>
                                    <div className="aboutMeSpacing">
                                        <p>My name is Damian Deleon. I am a graduate of the Coding Boot Camp at the Unviersity of Texas at Austin.  I am a certified Full-Stack Web Development. I am curently open to new job opportunties in the tech
                                            industry. If you are looking to hire a developer who also has proven experience
                                            with business sales, marketing, and customer service, please reach out!</p>
                                    </div>

                                    <hr />
                                    <div className="aboutMeSpacing">
                                        <p>Damian's Linked In Profile: <a
                                            href="https://www.linkedin.com/in/damian-de-leon-051b4b2b/"
                                            target="blank">LinkedIn</a></p>
                                        <p>GitHub Profile: <a href="https://github.com/damiandeleon" target="blank">GitHub</a></p>
                                        <p>Download Damian's Resume: <a href={DamianResume} target="_blank">Resume</a>
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
                                            Languages Tools and Applications
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul>
                                                <li className="funFont">Languages</li>
                                                <ul>
                                                    <li> JavaScript</li>
                                                    <li> CSS</li>
                                                    <li> HTML</li>
                                                    <li> SQL</li>
                                                    <li> NoSQL</li>
                                                </ul>
                                                <li className="funFont">Applications</li>
                                                <ul>
                                                    <li> GitHub</li>
                                                    <li> MongoDB</li>
                                                    <li> MongoDB Atlas</li>
                                                    <li> Heroku</li>
                                                </ul>
                                                <li className="funFont">Tools</li>
                                                <ul>
                                                    <li> Express</li>
                                                    <li> React</li>
                                                    <li> Node</li>
                                                    <li> API</li>
                                                    <li> Handlebars</li>
                                                    <li> Bootstrap</li>
                                                    <li> Bootstrap React</li>
                                                </ul>
                                            </ul>
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
                                            <article>
                                                <br></br>
                                                <ul>
                                                    <li>I volunteered in a prison ministry for 3 years</li>
                                                    <li>I am LGBT+ 🏳️‍🌈 </li>
                                                    <li>I support Mobile Loaves and Fishes to help the homeless</li>
                                                    <li>I am a Trekkie 🖖🏼 </li>
                                                    <li>I practice physical fitness to stay healthy</li>
                                                </ul>
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