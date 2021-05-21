import React from "react";
import projectVP from "../Assets/Images/groupProjectVacationPlanner.png";
import projectDP from '../Assets/Images/dayPlannerApp.png';
import projectPG from "../Assets/Images/passwordGeneratorApp.png";

const Project = () => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 mt-5 portfolioPad" >
                        <div class="card CardPad">
                            <div class="card-header h1 pt-4 pb-3 ps-0">
                                Portfolio
                             </div>
                            <div class="row row-cols-1 row-cols-md-2 g-4">
                                <div class="col">
                                    <div class="card" style={{width: "350px"}}>
                                        <p style={{textAlign: "center"}}>Vacation Planner Application</p>
                                        <img src={projectVP} class="card-img-top" style={{alignSelf: "center"}} alt="placeholder for pics Placeholder-Image-350px-x-350px" />
                                        <a href="https://damiandeleon.github.io/vacation_planner/" target="blank"> Link to Deployed Project</a>
                                        <a href="https://github.com/damiandeleon/vacation_planner/" target="blank"> Link to GitHub Repository</a>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card" style={{width: "350px"}}>
                                        <p style={{textAlign: "center"}}>Day Planner Application</p>
                                        <img src={projectDP} class="card-img-top" style={{alignSelf: "center"}} alt="placeholder for pics Placeholder-Image-350px-x-350px" />
                                        <a href="https://damiandeleon.github.io/work-day-scheduler/" target="blank"> Link to Deployed Project</a>
                                        <a href="https://github.com/damiandeleon/work-day-scheduler" target="blank"> Link to GitHub Repository</a>
                                    </div>
                                </div>
                            </div>
                            <div class="row row-cols-1 row-cols-md-2 g-4">
                                <div class="col">
                                    <div class="card" style={{width: "350px"}}>
                                        <p style={{textAlign: "center"}}>Password Generator Application</p>
                                        <img src={projectPG} class="card-img-top" style={{alignSelf: "center"}} alt="placeholder for pics Placeholder-Image-350px-x-350px" />
                                        <a href="https://damiandeleon.github.io/Password-Generator/" target="blank"> Link to Deployed Project</a>
                                        <a href="https://github.com/damiandeleon/Password-Generator" target="blank"> Link to GitHub Repository</a>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card" style={{width: "350px"}}>
                                        <p style={{textAlign: "center"}}>Password Generator Application</p>
                                        <img src={projectPG} class="card-img-top" style={{alignSelf: "center"}} alt="placeholder for pics Placeholder-Image-350px-x-350px" />
                                        <a href="https://damiandeleon.github.io/Password-Generator/" target="blank"> Link to Deployed Project</a>
                                        <a href="https://github.com/damiandeleon/Password-Generator" target="blank"> Link to GitHub Repository</a>
                                    </div>
                                </div>
                            </div>
                            <div class="row row-cols-1 row-cols-md-2 g-4">
                                <div class="col">
                                    <div class="card" style={{width: "350px"}}>
                                        <p style={{textAlign: "center"}}>Password Generator Application</p>
                                        <img src={projectPG} class="card-img-top" style={{alignSelf: "center"}} alt="placeholder for pics Placeholder-Image-350px-x-350px" />
                                        <a href="https://damiandeleon.github.io/Password-Generator/" target="blank"> Link to Deployed Project</a>
                                        <a href="https://github.com/damiandeleon/Password-Generator" target="blank"> Link to GitHub Repository</a>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card" style={{width: "350px"}}>
                                        <p style={{textAlign: "center"}}>Password Generator Application</p>
                                        <img src={projectPG} class="card-img-top" style={{alignSelf: "center"}} alt="placeholder for pics Placeholder-Image-350px-x-350px" />
                                        <a href="https://damiandeleon.github.io/Password-Generator/" target="blank"> Link to Deployed Project</a>
                                        <a href="https://github.com/damiandeleon/Password-Generator" target="blank"> Link to GitHub Repository</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


};


export default Project;