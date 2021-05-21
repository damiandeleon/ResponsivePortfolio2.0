import { React } from "react";
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
            name: "Frienemies App",
            img: {projectFR},
            gitHubURL: "https://github.com/damiandeleon/project-2-group-3",
            gitHubTitle: "Link to GitHub Repository",
            deployURL: "https://damp-thicket-88352.herokuapp.com/login",
            deployTitle: "Link to Deployed Project"
        },
            {
            name: "Vacation Planner Application",
            img: {projectVP},
            gitHubURL: "https://github.com/damiandeleon/vacation_planner/",
            gitHubTitle: "Link to GitHub Repository",
            deployURL: "https://damiandeleon.github.io/vacation_planner/",
            deployTitle: "Link to Deployed Project"
        },
        {
            name: "Day Planner Application",
            img: {projectDP},
            gitHubURL: "https://github.com/damiandeleon/work-day-scheduler",
            gitHubTitle: "Link to GitHub Repository",
            deployURL: "https://damiandeleon.github.io/work-day-scheduler/",
            deployTitle: "Link to Deployed Project"
        },
        {
            name: "Password Generator Application",
            img: {projectPG},
            gitHubURL: "https://github.com/damiandeleon/Password-Generator",
            gitHubTitle: "Link to GitHub Repository",
            deployURL: "https://damiandeleon.github.io/Password-Generator/",
            deployTitle: "Link to Deployed Project"
        },
        {
            name: "Weather Dashboard",
            img: {projectWD},
            gitHubURL: "https://github.com/damiandeleon/Weather-Dashboard/",
            gitHubTitle: "Link to GitHub Repository",
            deployURL: "https://damiandeleon.github.io/Weather-Dashboard/",
            deployTitle: "Link to Deployed Project"
        },
        {
            name: "Note Taker Application",
            img: {projectNT},
            gitHubURL: "https://github.com/damiandeleon/noteTaker",
            gitHubTitle: "Link to GitHub Repository",
            deployURL: "",
            deployTitle: "See Github Link for instructions to launch locally"   
        },
    
    ];
    return (
        <Project details={projectDetails} />
     
    )

};


export default ProjectList;