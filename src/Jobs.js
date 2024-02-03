import React from "react";
import Job from "./JobCard";

function Jobs() {

    let position1 = "Software Engineering Intern";
    let firm1 = "Evlos Technology";
    let city1 = "remote";
    let dates1 = "Dec 2023 - Present";
    let description1 = [`Designed and built an SQL database with model data
                        accessible via an API implemented in Express and a
                        frontend built in React.`,
                        `Used MUI to design model components with a uniform
                        style that can nonetheless be easily adapted to display
                        information in an easily intelligible manner.`
                       ];

    let position2 = "Software Engineer Intern";
    let firm2 = "Rithm School";
    let city2 = "remote";
    let dates2 = "July 2023";
    let description2 = [`Resolved complex bugs in Learning Information System,
                        an adaptable, class-based Django application serving
                        thousands of students and teachers across schools and
                        companies.`,
                        `Implemented logic in templates to increase visibility
                        of event responsibilities across the application,
                        creating uniform visual i.d. for event “ownership” and
                        reducing possibility of miscommunication.`,
                        `Employed model factories to devise a comprehensive
                        testing strategy for front-end template additions,
                        maintaining 97% coverage using unittest library.`,
                        `Developed a new feature using cron file and Slack API
                        integration to notify users of overdue assignments.`
                       ];

    let position3 = "Associate Attorney (Litigation)";
    let firm3 = "Fleming Ruvoldt PLLC";
    let city3 = "New York, NY";
    let dates3 = "May 2016 - March 2020";
    let description3 = [`Identified unexpected risks in complex white-collar
                        prosecutions and advised clients on how to avoid them,
                        including by discovering exposure to obscure trafficking
                        charges, enabling clients to prepare a defense.`,
                        `Prepared countless legal briefs, including on misuse of
                        evidence rules and fingerprint evidence, leading to a
                        mistrial in what prosecutors incorrectly saw as an
                        open-and-shut murder case.`,
                        `Served as liaison to clients, including by preparing an
                        incarcerated client to testify in the largest money
                        laundering trial to date, testimony that helped get a
                        2-3 year sentence vs. requested 99 yrs.`,
                        `Coordinated teams of lawyers and paralegals to meet
                        strict deadlines, often managing databases to facilitate
                        document review, gaining experience of client-side needs
                        and working w/ IT teams and programmers to fix bugs.`
                       ];



    return (
        <div className="Experience p-5">
            <h2>Experience</h2>
            <Job position={position1} firm={firm1} city={city1} dates={dates1} description={description1}/>
            <br/>
            <Job position={position2} firm={firm2} city={city2} dates={dates2} description={description2}/>
            <br/>
            <h4>Prior Experience</h4>
            <Job position={position3} firm={firm3} city={city3} dates={dates3} description={description3}/>

        </div>
    );
}

export default Jobs;