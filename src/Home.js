import React from "react"
import School from "./School";
import Skills from "./Skills";

function Home() {

    let school1 = "Rithm School";
    let city1 = "remote";
    let degree1 = "Full Stack Web Development Bootcamp";
    let date1 = "July 2023";

    let school2 = "Boston University School of Law";
    let city2 = "Boston, MA";
    let degree2 = "Juris Doctor (J.D)";
    let date2 = "May 2014";

    let school3 = "Columbia University";
    let city3 = "New York, NY";
    let degree3 = "Bachelor of Arts (B.A.)";
    let date3 = "May 2007";

    let skillType1 = "Languages";
    let skills1 = ["Javascript", "Python", "HTML", "CSS", "SQL"];

    let skillType2 = "Libraries/Frameworks";
    let skills2 = ["React", "Express", "Node", "Django", "Flask", "PostgreSQL", "SQLAlchemy"];

    let skillType3 = "Testing/Tools/Other";
    let skills3 = ["Jest", "unittest", "React Testing Library", "Jasmine",  "VSCode", "Git", "Github"];


    return (
      <div className="Home">
        <br/>
        <h2>Jonathan Stern</h2>
        <p>Brooklyn, NY - 201.906.0125 - <a href="jstern718@gmail.com">Email</a> - <a href="">LinkedIn</a> - <a href="https://github.com/jstern718">GitHub</a></p>
        <div className="text-start">
            <p>Software engineer seeking to put full stack skills to use in a
                challenging junior engineer role; and to leverage past
                experience with client communication, working under strict
                deadlines, in-depth research, attention to detail, public
                speaking and working with and managing teams.</p>
        </div>
        <br/>
        <div className="row">
            <div className="col-7 m-3">
                <h4>Skills</h4>
                <div className="row">
                    <Skills skillType={skillType1} skills = {skills1} />
                    <Skills skillType={skillType2} skills = {skills2} />
                    <Skills skillType={skillType3} skills = {skills3} />
                </div>

            </div>
            <div className="col-4">
                    <h4>Education</h4>
                    <School school={school1} city={city1} degree={degree1} date={date1}/>
                    <School school={school2} city={city2} degree={degree2} date={date2}/>
                    <School school={school3} city={city3} degree={degree3} date={date3}/>
            </div>
        </div>


      </div>

    );
  }

export default Home;