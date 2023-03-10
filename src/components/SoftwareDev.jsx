import React from 'react';
import { Component } from "react"
import '../css/Resume.css'  
import '../css/resume.scss'
import forest from '../css/forest.jpg'
import forestGif from '../css/littleGif.jpg'
//import portfolio from '../css/portfolio.css' 
const BIO = 'Certified AWS Developer Full Stack Software Engineer experienced in Docker, JavaScript, NextJS, Python, and Terraform. I have a passion for solving problems and building functional applications. Possess strong skills in programming, development, creativity, emotional intelligence, delivering clean code in a timely manner, design, teamwork, and effective verbal and written communication.'
const SKILL = ["Android Development", "Bootstrap", "CRUD API", "CSS", "Docker","ES6", "Github", "HTML", "IOS Development", "JavaScript", "JQuery", "JSON","Mobile","MVC", "Next.js", "PostgreSQL","Python", "React", "Redux", "REST API",  "Ruby", "Ruby On Rails", "SCSS","Terraform"]
class SoftwareDev extends Component{
        constructor(props){
            super(props)
            this.color_changer = this.color_changer.bind(this)
        }
    color_changer(anArray){
        return anArray.map((e, i) => <span className={ Math.floor(Math.random() * 3) == 0 ? "zero" : i%3 == 1 ? "one" : "two"}>&nbsp;{e}&nbsp;</span>)
    }
    render(){
        return (<div className="resume_2 flex-column justify-content-center w-100 ">
            <h3 className="text-center">SOFTWARE ENGINEER</h3>
        <p>{BIO}</p>
        
        <h3>TECHNICAL SKILLS</h3>
        <div id="flex">{this.color_changer(SKILL)}</div> 
        
        
        <h3>EXPERIENCE</h3>
            <h4>AWS Cloud Developer-Contractor, Effectual &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.effectual.com/" target="_blank">Effectual</a> 05/2022 - 01/2023</h4>
            <li>Updated sFTP python script in Docker image to use Checksums and AWS IAM role for better security.</li>
            <li>Deployed AWS ECS Image from terraform AWS CodePipeline, CodeBuild, and CodeDeploy.</li>
            <li>Bash Scripted installation software packages and reboot scripts for new servers to automate upgrade.</li>
            <li>Upgraded/Deployed many Servers to new Supported Linux versions to production for security.</li>
            <li>Built loading Skeleton Screen for React-Native Mobile Application for enhanced UI.</li>
        <h4>Full Stack Web Developer-Contractor, SteadyInstall, inc. Tempe, AZ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.steadyinstall.com/" target="_blank">SteadyIntall, inc.</a> 07/2021 - 12/2021</h4>
            <li className="mb-0">Designed and implimented back/front-end feature: Foreman Profiles</li>
            <li className="mb-0">Created Video Chat for the app to replace Zoom</li> 
            <li className="m-0">Reconfigured back-end server to use 50% less memory</li>
            <li>Technial support for Users of the app</li>
            <h4>Software Developer/Webmaster-Contractor, PetSafeKennels, Phoenix, AZ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.petsafekennels.com/" target="_blank">Pet-Safe-Kennels</a> or <a href="http://petsafe-kennels.com/" target="_blank">Mobile First Site</a> 11/2020 - 08/2021</h4>
            <li>Design full stack web application for business</li>
            <li>Style React frontend UI with SCSS to make page more elegant and professional</li>
            <li>Implement a mobile first design philosophy where UI looks amazing on all viewports</li>
            <li>CD/CI process to design and implement new features</li> 
            <li>Maintain website and hosting issues</li>
         <h4>Jr. Software Engineer  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://nourimeals.com/" target="_blank">Nouri, Inc</a> 08/2020 - 05/2021</h4> 
            <li>Under mentorship of senior Software Engineer and Team Lead Software Engineer follow instructions for creating React UI</li> 
            <li>Style UI with SCSS to make page more elegant and professional</li>
            <li>Implement a mobile first design philosophy where UI looks amazing on all viewports</li>
            <h3>TECHNICAL PROJECTS</h3>
            <h4>PatientsHub -  Github <a href="https://github.com/rhtaylor/PatientsHubClient" target="_blank">Front-End</a> | <a href="https://github.com/rhtaylor/PatientsHub" target="_blank">Back-End</a></h4>
            <p>An app that allows healthcare providers to virtually chart on their patients.</p>
            <ul><li>Selected Bcrypt for secured password creation/validation/authentication/login.</li>
                <li>Utilized PostgreSQL database to achieve data persistence.</li>
                <li>Wrote React-Redux front-end and Rails back-end allowing seamless dataflow for users.</li>
                <li>Incorporated Rails API for table relationships to organize data based on associations.</li></ul>
            <h4>Boiling Forest - Github <a href="https://github.com/rhtaylor/tempGradientRailsJsonAPIJS/tree/master/modules/front" target="_blank">Front-End</a> | <a href="https://github.com/rhtaylor/tempGradientRailsJsonAPIJS" target="_blank">Back-End</a></h4>
            

            <p>As a proof of Global Warming an application that tracks rate of global cooling after sunset.</p>
            <ul><li>Centralizes real weather stations API data in JSON format to track actual global warming.</li>
                <li>Calculates temperature rate changes of area cooling past sunset over time as a proof of global warming.</li>
                <li>Personalizes the application by enabling users to check for a weather station via city and then add/track it from their database.</li></ul>

        </div>
        )
    
} 
 }

export default SoftwareDev