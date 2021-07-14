import React from "react";


const Project = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5 portfolioPad" >
                        <div className="card CardPadPortfolio">
                            <h1 className="card-header h1 pt-4 pb-3 ">
                                Portfolio
                            </h1>
                            <div className="card-group colBackground justify-content-center margin-auto">


                                {props.details.map(project => {
                                    return (
                                        <div key={project.id} >
                                            <div className="card" style={{ border: "lightblue 5px solid", borderRadius: "25px", margin:"20px" }}>
                                                <div >
                                                    <h5 className="card-title">{project.name}</h5>
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