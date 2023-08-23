import React from "react";
import Card from "./Card";

let address1 = "./screenshot1.png";
let title1 = "Friendly";
let text1 = "Fullstack job search, matching and application app using Flask, Jinja, SQL, SQLAlchemy";
let repository1 = "https://github.com/jstern718/friendly";

let address2 = "./screenshot1.png";
let title2 = "Friendly";
let text2 = "Fullstack app using Flask, Jinja, SQL, SQLAlchemy";
let repository2 = "https://github.com/jstern718/friendly";

let address3 = "./screenshot1.png";
let title3 = "Friendly";
let text3 = "Fullstack app using Flask, Jinja, SQL, SQLAlchemy";
let repository3 = "https://github.com/jstern718/friendly";


function Projects() {
    return (
        <div className="row">
            <Card address={address1} title={title1} text={text1} repository={repository1}/>
            <Card address={address2} title={title2} text={text2} repository={repository2}/>
            <Card address={address3} title={title3} text={text3} repository={repository3}/>
        </div>

    );
  }

export default Projects;