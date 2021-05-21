import { React } from "react";
import DamianProfilePic from '../Assets/Images/ProfilePic.jpg';

const Contact = () => {
    return (

        <div>
            <div className="container-fluid" >
                    

                        <div className="card ps-3 contactCard">
                            <div className="card-header h1 pt-4 pb-3 ps-0">
                                Contact Me Directly
                            </div>
                            <article>
                                <h2>Damian Matias De Leon</h2>
                                <br />
                                <p>Email me: <a href="mailto:damianmdeleon@gmail.com">damianmdeleon@gmail.com</a></p>
                                <hr />
                                <p>Call me: <a href="tel:5125697525">512-569-7525</a></p>
                                <br />
                                <img src={DamianProfilePic} id="ProfilePic" alt="Damian Profile Pic" />
                            </article>
                        </div>
            
            </div>

        </div>
    )



};





export default Contact;