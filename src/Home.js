import React from "react"
import School from "./School";
import Skills from "./Skills";

function Home() {

    let school1 = "Rithm School";
    let city1 = "remote";
    let degree1 = "Fullstack Web Development Bootcamp";
    let date1 = "July 2023";
    let image1 = ""

    let school2 = "Boston Univ. School of Law";
    let city2 = "Boston, MA";
    let degree2 = "Juris Doctor (J.D)";
    let date2 = "May 2014";
    let image2 = ""

    let school3 = "Columbia University";
    let city3 = "New York, NY";
    let degree3 = "Bachelor of Arts (B.A.)";
    let date3 = "May 2007";
    let image3 = "./columbia.png"

    let skillType1 = "Languages";
    let skills1 = ["Javascript", "Python", "HTML", "CSS", "SQL"];

    let skillType2 = "Libraries & Frameworks";
    let skills2 = ["React", "Express", "Node", "Django", "Flask", "PostgreSQL", "SQLAlchemy"];

    let skillType3 = "Testing & Tools";
    let skills3 = ["Jest", "unittest", "React Testing Library", "Jasmine",  "VSCode", "Git", "Github"];


    return (
      <div className="Home p-3">
        <br/>
        <div className="homeNameDiv">
            <div className="homeNameTextDiv">
                <h2>Jonathan Stern</h2>
                <p>Brooklyn, NY - 201.906.0125 - <a href="jstern718@gmail.com" className="text-muted">Email</a> - <a href="" className="text-muted">LinkedIn</a> - <a href="https://github.com/jstern718" className="text-muted">GitHub</a></p>
                <div className="text-start">
                    <p className="px-4">Software engineer seeking to put full stack skills to use in a
                        challenging junior engineer role — and to leverage past
                        experience with client communication, working under strict
                        deadlines, in-depth research, attention to detail, public
                        speaking and working with and managing teams.</p>
                </div>
            </div>
        </div>
        <br/>
        <div className="row">
            <div className="col-7 my-3 mx-4 p-0">
                <h4>Skills</h4>
                <div className="row">
                    <Skills skillType={skillType1} skills = {skills1} />
                    <Skills skillType={skillType2} skills = {skills2} />
                    <Skills skillType={skillType3} skills = {skills3} />
                </div>

            </div>
            <div className="col-4 my-3">
                <h4 className="">Education</h4>
                <div className="">
                    <School school={school1} city={city1} degree={degree1} date={date1} image={image1}/>
                    <School school={school2} city={city2} degree={degree2} date={date2} image={image2}/>
                    <School school={school3} city={city3} degree={degree3} date={date3} image={image3}/>
                </div>

            </div>
        </div>


      </div>

    );
  }

export default Home;