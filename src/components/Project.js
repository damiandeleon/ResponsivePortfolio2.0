import React from "react";


const Project = (props) => {
    console.log(props.details)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-11 mt-5 portfolioPad" >
                        <div className="card CardPadPortfolio">
                            <div className="card-header h1 pt-4 pb-3 ">
                                Portfolio
                            </div>
                            <div className="card-group col justify-content-center margin-auto">


                                {props.details.map(project => {
                                    return (
                                        <div>
                                            <div className="card" style={{ border: "lightblue 5px solid", borderRadius: "25px" }}>
                                                <div key={project.id}>
                                                    <h5 class="card-title">{project.name}</h5>
                                                    <img src={project.img} className="card-img-top" alt="project screenshot" />
                                                    <div className="card-body">
                                                        <a href={project.deployURL} target="blank"> {project.deployTitle}</a>  |
                                                        <a href={project.gitHubURL} target="blank"> {project.gitHubTitle}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
               
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


};


export default Project;