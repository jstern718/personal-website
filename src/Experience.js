import React from "react";
import Job from "./Job";

function Experience() {

    let position1 = "Software Engineering Intern";
    let firm1 = "Rithm School";
    let city1 = "remote";
    let dates1 = "July 2023";
    let description1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    let position2 = "Associate Attorney (Litigation)";
    let firm2 = "Fleming Ruvoldt PLLC";
    let city2 = "New York, NY";
    let dates2 = "May 2016 - March 2020";
    let description2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


    return (
        <div className="Experience p-5">
            <h2>Experience</h2>
            <Job position={position1} firm={firm1} city={city1} dates={dates1} description={description1}/>
            <br/>
            <h4>Prior Experience</h4>
            <Job position={position2} firm={firm2} city={city2} dates={dates2} description={description2}/>

        </div>
    );
}

export default Experience;