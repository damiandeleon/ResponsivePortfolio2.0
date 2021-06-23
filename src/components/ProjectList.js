import React  from "react";
import projectVP from "../Assets/Images/groupProjectVacationPlanner.png";
import projectDP from '../Assets/Images/dayPlannerApp.png';
import projectPG from "../Assets/Images/passwordGeneratorApp.png";
import projectWD from "../Assets/Images/weatherDashboard.png";
import projectNT from "../Assets/Images/noteTaker.png";
import projectFR from "../Assets/Images/frienemies.png";
import Project from "../Components/Project";



const ProjectList = () => {
   
    const projectDetails = [
        {
            id: 1,
            name: "Frienemies App",
            img: projectFR, 
            gitHubURL: "https://github.com/damiandeleon/project-2-group-3",
            gitHubTitle: "GitHub Repository",
            deployURL: "https://damp-thicket-88352.herokuapp.com/login",
            deployTitle: "Deployed Project"
        },
        {
            id: 2,
            name: "Vacation Planner Application",
            img: projectVP,
            gitHubURL: "https://github.com/damiandeleon/vacation_planner/",
            gitHubTitle: "GitHub Repository",
            deployURL: "https://damiandeleon.github.io/vacation_planner/",
            deployTitle: "Deployed Project"
        },
        {
            id: 3,
            name: "Day Planner Application",
            img: projectDP,
            gitHubURL: "https://github.com/damiandeleon/work-day-scheduler",
            gitHubTitle: "GitHub Repository",
            deployURL: "https://damiandeleon.github.io/work-day-scheduler/",
            deployTitle: "Deployed Project"
        },
        {
            id: 4,
            name: "Password Generator Application",
            img: projectPG,
            gitHubURL: "https://github.com/damiandeleon/Password-Generator",
            gitHubTitle: "GitHub Repository",
            deployURL: "https://damiandeleon.github.io/Password-Generator/",
            deployTitle: "Deployed Project"
        },
        {
            id: 5,
            name: "Weather Dashboard",
            img: projectWD,
            gitHubURL: "https://github.com/damiandeleon/Weather-Dashboard/",
            gitHubTitle: "GitHub Repository",
            deployURL: "https://damiandeleon.github.io/Weather-Dashboard/",
            deployTitle: "Deployed Project"
        },
        {
            id: 6,
            name: "Note Taker Application",
            img: projectNT,
            gitHubURL: "https://github.com/damiandeleon/noteTaker",
            gitHubTitle: "GitHub Repository",
            deployURL: "https://github.com/damiandeleon/noteTaker",
            deployTitle: "_Launch Locally_"   
        },
    
    ];
    return (
        <Project details={projectDetails} />    
    )

};


export default ProjectList;