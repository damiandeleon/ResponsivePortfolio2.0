import React from "react";

const Project = () => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 mt-5">
                        <div class="card ps-3 pe-3 CardPad">
                            <div class="card-header h1 pt-4 pb-3 ps-0">
                                Portfolio
                             </div>
                            <div class="row row-cols-1 row-cols-md-2 g-4">
                                <div class="col">
                                    <div class="card" style={{width: "350px"}}>
                                        <p style={{textAlign: "center", fontSize: "25px"}}>Vacation Planner Application</p>
                                        <img src="./Assets/Images/groupProjectVacationPlanner.png" class="card-img-top" style={{alignSelf: "center"}} alt="placeholder for pics Placeholder-Image-350px-x-350px" />
                                        <a href="https://damiandeleon.github.io/vacation_planner/" target="blank"> Link to Deployed Project</a>
                                        <a href="https://github.com/damiandeleon/vacation_planner/" target="blank"> Link to GitHub Repository</a>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card" style={{width: "350px"}}>
                                        <p style={{textAlign: "center", fontSize: "25px"}}>Day Planner Application</p>
                                        <img src="./Assets/Images/dayPlannerApp.png" class="card-img-top" style={{alignSelf: "center"}} alt="placeholder for pics Placeholder-Image-350px-x-350px" />
                                        <a href="https://damiandeleon.github.io/work-day-scheduler/" target="blank"> Link to Deployed Project</a>
                                        <a href="https://github.com/damiandeleon/work-day-scheduler" target="blank"> Link to GitHub Repository</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card" style={{width: "350px"}}>
                                    <p style={{textAlign: "center", fontSize: "25px"}}>Password Generator Application</p>
                                    <img src="./Assets/Images/passwordGeneratorApp.png" class="card-img-top" style={{alignSelf: "center"}} alt="placeholder for pics Placeholder-Image-350px-x-350px" />
                                    <a href="https://damiandeleon.github.io/Password-Generator/" target="blank"> Link to Deployed Project</a>
                                    <a href="https://github.com/damiandeleon/Password-Generator" target="blank"> Link to GitHub Repository</a>
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