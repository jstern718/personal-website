import React from "react"

function SeparateButtons(props) {

    console.log("run SeparateButtons");
    let {repository0, repository1, repository2} = props

    return (
        <div id={"buttonChange"}>
            <a href={repository0} type="button" className= "btn btn-outline-dark buttonClass">GitHub Repo:</a>
            <a href={repository1} type="button" className= "btn btn-dark btn-outline-secondary text-light">Frontend</a>
            <a href={repository2} type="button" className= "btn btn-dark btn-outline-secondary text-light">Backend</a>
        </div>
    )
}

export default SeparateButtons;