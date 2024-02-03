import React from "react";
import ProjectCard from "./ProjectCard";

let addressa1 = "./jobly_screenshot1.heic";
let addressb1 = "./jobly_screenshot2.heic";
let title1 = "Jobly";
let text1 = `Fullstack job search, matching and application app using Node,
Javascript, Express and SQL on the backend, and Javascript, React and SQL on
the frontend. Testing via SuperTest.`;
let repository0a = "https://github.com/jstern718";
let repository1a = "https://github.com/jstern718/react-jobly";
let repository1b = "https://github.com/jstern718/express-jobly";
let website1 = "https://jstern-jobly-frontend.surge.sh/";

let addressa2 = "./warbler_screenshot1.heic";
let addressb2 = "./warbler_screenshot2.heic";
let title2 = "Warbler";
let text2 = `Fullstack social networking app and Twitter clone using Python,
            Flask, SQL and SQLAlchemy for the backend; Jinja templating for the
            frontend; and with testing in Unittest.`;
let repository0b = "https://github.com/jstern718/warbler";
let website2 = "https://jstern-warbler.onrender.com/";


function Projects() {
    return (
        <div className="Projects p-5">
            <h2>Projects</h2>
            <div className="row my-4 py-4">
                <ProjectCard oldid="1" addressa={addressa1} addressb={addressb1}
                    title={title1} text={text1} repository0={repository0a}
                    repository1={repository1a} repository2 ={repository1b}
                    website={website1}/>
                <ProjectCard oldid="2" addressa={addressa2} addressb={addressb2}
                    title={title2} text={text2} repository0={repository0b}
                    website={website2}/>
            </div>
        </div>

    );
  }

export default Projects;
