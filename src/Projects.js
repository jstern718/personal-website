import React from "react";
import ProjectCard from "./ProjectCard";

let address1 = "./screenshot1.png";
let title1 = "Friendly";
let text1 = "Fullstack friend filtering and matching app using Python, Flask, Jinja, SQL, SQLAlchemy";
let repository1 = "https://github.com/jstern718/friendly";

let address2 = "./screenshot1.png";
let title2 = "Jobly";
let text2 = "Fullstack job search, matching and application app using Javascript, Node, Express, React, SQL";
let repository2 = "https://github.com/jstern718/friendly";

let address3 = "./screenshot1.png";
let title3 = "Friendly";
let text3 = "Fullstack app using Flask, Jinja, SQL, SQLAlchemy";
let repository3 = "https://github.com/jstern718/friendly";


function Projects() {
    return (
        <div className="Projects p-5">
            <h2>Projects</h2>
            <div className="row my-4 py-4">
                <ProjectCard address={address1} title={title1} text={text1} repository={repository1}/>
                <ProjectCard address={address2} title={title2} text={text2} repository={repository2}/>
            </div>
        </div>

    );
  }

export default Projects;