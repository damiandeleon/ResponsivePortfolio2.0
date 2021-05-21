import React from "react";
// import projectVP from "../Assets/Images/groupProjectVacationPlanner.png";
// import projectDP from '../Assets/Images/dayPlannerApp.png';
// import projectPG from "../Assets/Images/passwordGeneratorApp.png";
// import projectWD from "../Assets/Images/weatherDashboard.png";
// import projectNT from "../Assets/Images/noteTaker.png";
// import projectFR from "../Assets/Images/frienemies.png";



const Project = (props) => {
    console.log(props.details)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mt-5 portfolioPad" >
                        <div className="card CardPad">
                            <div className="card-header h1 pt-4 pb-3 ps-0">
                                Portfolio
                             </div>

                             {props.details.map(project => {
                                 return (
                                    <div className="col" key={project.id}>
                                        <div className="card" style={{ width: "350px" }}>
                                            <p style={{ textAlign: "center", fontSize: "25px" }}>{project.name}</p>
                                            <img src={project.img} className="card-img-top" alt="project screenshot" style={{ alignSelf: "center", border: "CornflowerBlue 5px solid" }} />
                                            <a href={project.deployURL} target="blank"> {project.deployTitle}</a>
                                            <a href={project.gitHubURL} target="blank"> {project.gitHubTitle}</a>
                                        </div>
                                    </div>
                                )
                             })}


                            {/* <div className="col">
                                <div className="card" style={{ width: "350px" }}>
                                    <p style={{ textAlign: "center", fontSize: "25px" }}>Day Planner Application</p>
                                    <img src={projectDP} className="card-img-top" alt="project screenshot" style={{ alignSelf: "center", border: "CornflowerBlue 5px solid" }} />
                                    <a href="https://damiandeleon.github.io/work-day-scheduler/" target="blank"> Link to Deployed Project</a>
                                    <a href="https://github.com/damiandeleon/work-day-scheduler" target="blank"> Link to GitHub Repository</a>
                                </div>
                            </div>


                            <div className="col">
                                <div className="card" style={{ width: "350px" }}>
                                    <p style={{ textAlign: "center", fontSize: "25px" }}>Password Generator Application</p>
                                    <img src={projectPG} className="card-img-top" alt="project screenshot" style={{ alignSelf: "center", border: "CornflowerBlue 5px solid" }} />
                                    <a href="https://damiandeleon.github.io/Password-Generator/" target="blank"> Link to Deployed Project</a>
                                    <a href="https://github.com/damiandeleon/Password-Generator" target="blank"> Link to GitHub Repository</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" style={{ width: "350px" }}>
                                    <p style={{ textAlign: "center", fontSize: "25px" }}>Password Generator Application</p>
                                    <img src={projectWD} className="card-img-top" alt="project screenshot" style={{ alignSelf: "center", border: "CornflowerBlue 5px solid" }} />
                                    <a href="https://damiandeleon.github.io/Weather-Dashboard/" target="blank"> Link to Deployed Project</a>
                                    <a href="https://github.com/damiandeleon/Weather-Dashboard/" target="blank"> Link to GitHub Repository</a>
                                </div>
                            </div>


                            <div className="col">
                                <div className="card" style={{ width: "350px" }}>
                                    <p style={{ textAlign: "center", fontSize: "25px" }}>Password Generator Application</p>
                                    <img src={projectNT} className="card-img-top" alt="project screenshot" style={{ alignSelf: "center", border: "CornflowerBlue 5px solid" }} />
                                    <a href="https://damiandeleon.github.io/noteTaker/" target="blank"> Link to Deployed Project</a>
                                    <a href="https://github.com/damiandeleon/noteTaker" target="blank"> Link to GitHub Repository</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" style={{ width: "350px" }}>
                                    <p style={{ textAlign: "center", fontSize: "25px" }}>Password Generator Application</p>
                                    <img src={projectFR} className="card-img-top" alt="project screenshot" style={{ alignSelf: "center", border: "CornflowerBlue 5px solid" }} alt="placeholder for pics Placeholder-Image-350px-x-350px" />
                                    <a href="https://damp-thicket-88352.herokuapp.com/login" target="blank"> Link to Deployed Project</a>
                                    <a href="https://github.com/damiandeleon/project-2-group-3" target="blank"> Link to GitHub Repository</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


};


export default Project;