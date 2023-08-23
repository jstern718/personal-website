import React from "react"

function SkillListItem({skillItem}) {

    console.log("skillItem", skillItem)

    return (
            <div>
                <li m-0 p-0 align-start>{skillItem}</li>
            </div>
    );
  }

export default SkillListItem;