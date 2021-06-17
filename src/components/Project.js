import React from "react";


const Project = (props) => {
    console.log(props.details)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mt-5 portfolioPad" >
                        <div className="card CardPad">
                            <div className="card-header h1 pt-4 pb-3 ">
                                Portfolio
                             </div>

                             {props.details.map(project => {
                                 return (
                                    <div className="col" key={project.id}>
                                        <div className="card" style={{ border: "lightblue 5px solid", borderRadius: "25px"}}>
                                            <p style={{ textAlign: "center", fontSize: "25px" }}>{project.name}</p>
                                            <img src={project.img} className="card-img-top" alt="project screenshot" style={{ alignSelf: "center" }} />
                                            <a href={project.deployURL} target="blank"> {project.deployTitle}</a>
                                            <a href={project.gitHubURL} target="blank"> {project.gitHubTitle}</a>
                                        </div>
                                    </div>
                                )
                             })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


};


export default Project;