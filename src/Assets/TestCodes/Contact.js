import { React, useState, } from "react";
import DamianProfilePic from '../Assets/Images/ProfilePic.jpg';

const Contact = () => {

    const [EmailForm, setEmailForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        sent: true,
    })

    const [formObject, setFormObject] = useState({})

    // handleInputs

    const handleFirstNameChange = (event) => {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    const handleLastNameChange = (event) => {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    const handleEmailChange = (event) => {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    const handleMessageChange = (event) => {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    const handleStatusChange = () => {
        setFormObject({
            sent: true
        })
    }

    const handleFormSubmit = (event) => {

        event.preventDefault();

        handleStatusChange();
            console.log(
                "First Name: ", formObject.firstName, "\n",
                "Last Name: ",  formObject.lastName,"\n",
                "Email: ", formObject.email,"\n",
                "Message: ", formObject.message, "\n",
                "Sent Status: ", formObject.sent
            )
    }

    // end of handleInputs

    return (

        <div>
            <div className="container" >
                <div className="row">
                    <div className=" col-md-10 mt-5 portfolioPad">
                        <div className="card CardPad">
                            <div className="card-header h1 pt-4 pb-3">
                                Contact Me Directly
                            </div>
                            <div className="card-background">
                                    <div>
                                        <img src={DamianProfilePic} id="ProfilePic" alt="Damian Profile Pic"/>
                                    </div>
                                    <div className="col-md">
                                        <h2>Damian De Leon</h2>
                                        <hr></hr>
                                        <p>Email: <a href="mailto:damianmdeleon@gmail.com">damianmdeleon@gmail.com</a></p>
                                        <p>Phone: <a href="tel:5125697525">512-569-7525</a></p> 
                                    </div>
                                    <form>
                                        <h3>Send an email now</h3>
                                        {/* ** BEGIN Single Item** */}
                                        <div className="singleItem">
                                            <label htmlFor="firstName">First Name</label>
                                            <input 
                                                type="text" 
                                                name='firstName' 
                                                className="firstName" 
                                                placeholder="Your First Name"
                                                onChange={handleFirstNameChange}>
                                            </input>
                                        </div>
                                       {/* ** END Single Item** */}

                                        {/* ** BEGIN Single Item** */}
                                        <div className="singleItem">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input 
                                                type="text" 
                                                name='lastName' 
                                                className="lastName" 
                                                placeholder="Your Last Name"
                                                onChange={handleLastNameChange}>
                                            </input>
                                        </div>
                                        {/* ** END Single Item** */}

                                        {/* ** BEGIN Single Item** */}
                                        <div className="singleItem">
                                            <label htmlFor="email">Email</label>
                                            <input 
                                                type="text" 
                                                name='email' 
                                                className="email" 
                                                placeholder="Your Email"
                                                onChange={handleEmailChange}>
                                            </input>
                                        </div>
                                       {/* ** END Single Item** */}

                                        {/* ** BEGIN message text ** */}
                                        <div className="singleItem">
                                            <label id="messageLabel" htmlFor="message">Message</label>
                                            <textarea 
                                                type="textarea" 
                                                name='message' 
                                                className="message" 
                                                placeholder="Your Message"
                                                onChange={handleMessageChange}>
                                            </textarea>
                                        </div>
                                        {/* ** END message text ** */}
                                        
                                        <button onClick={handleFormSubmit} className="btn" type="submit">Submit</button>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )



};





export default Contact;