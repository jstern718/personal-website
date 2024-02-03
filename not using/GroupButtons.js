import React from "react"

function GroupButtons(props) {

    console.log("run GroupButtons");
    let {repository0, repository1, repository2} = props

    return (
        <div id={"buttonChange"} className={"btn-group"}>
            <a href={repository0} id="grp1" type="button" className= "grp btn btn-dark btn-outline-secondary">GitHub Repo:</a>
            <a href={repository1} id="grp2" type="button" className= "grp btn btn-dark btn-outline-secondary text-light front">Frontend</a>
            <a href={repository2} id="grp3" type="button" className= "grp btn btn-dark btn-outline-secondary text-light">Backend</a>
        </div>
    )
}

export default GroupButtons;