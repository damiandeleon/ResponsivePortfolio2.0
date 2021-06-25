import { React } from "react";
import DamianProfilePic from '../Assets/Images/ProfilePic.jpg';

const Contact = () => {
    return (

        <div>
            <div className="container" >
                <div className="row">
                    <div className=" col-md-8 mt-5 portfolioPad">
                        <div className="card CardPad">
                            <div className="card-header h1 pt-4 pb-3">
                                Contact Me Directly
                            </div>
                            <div>
                                    <div>
                                        <img src={DamianProfilePic} id="ProfilePic" alt="Damian Profile Pic"/>
                                    </div>
                                    <div className="col-md">
                                        <h2>Damian Matias De Leon</h2>
                                        <hr></hr>
                                        <p>Email me: <a href="mailto:damianmdeleon@gmail.com">damianmdeleon@gmail.com</a></p>
                                        <p>Call me: <a href="tel:5125697525">512-569-7525</a></p> 
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )



};





export default Contact;