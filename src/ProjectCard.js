import React from "react"

function ProjectCard({address, title, text, repository}) {

    console.log("address", address);
    console.log("title", title);
    console.log("text", text);
    console.log("repository", repository);

    return (
      <div className="card ProjectCard col-4 m-4 p-0">
            <img className="card-img-top img-thumbnail m-0 p-0 w-100" src={address}/>
            <div className="card-body ProjectCardBody m-3">
                <h5 className="card-title">{title}</h5>
                <p className="card-text m-2 text-start">{text}</p>
                <div className="d-grid gap2 d-md-block">
                    <a href={repository} type="button" className= "btn btn-secondary m-2">GitHub</a>
                    <a href={repository} type="button" className="btn btn-light m-2">Website</a>
                </div>

            </div>
      </div>
    );
  }

export default ProjectCard;