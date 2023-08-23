import React from "react"
import SkillListItem from "./SkillListItem";

function skillFunc(x){
    return <SkillListItem skillItem={x}/>
}


function Skills({skillType, skills}) {
    // console.log("skills", skills);
    return (
      <div className="col-3 card m-2 p-4 d-flex flex-column flex-fill">
        <h5>{skillType}</h5>
        <ul className="text-start">
            {skills.map(skillFunc)}
        </ul>
      </div>
    );
  }

export default Skills;