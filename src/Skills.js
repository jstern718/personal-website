import React from "react"
import SkillListItem from "./SkillListItem";

function skillFunc(x){
    return <SkillListItem skillItem={x}/>
}


function Skills({skillType, skills}) {
    // console.log("skills", skills);
    return (
      <div className="col-4 card m-2 p-2 d-flex flex-column flex-fill SkillType">
        <h5>{skillType}</h5>
        <div className="SkillCard">
            <ul className="text-start">
                {skills.map(skillFunc)}
            </ul>
        </div>

      </div>
    );
  }

export default Skills;