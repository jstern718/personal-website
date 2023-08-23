import React from "react"

function Card({address, title, text, repository}) {

    console.log("address", address);
    console.log("title", title);
    console.log("text", text);
    console.log("repository", repository);

    return (
      <div className="card col-4">
            <img className="card-img-top img-thumbnail mx-auto" src={address} alt="hello"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text m-2 text-start">{text}</p>
                <div className="d-grid gap2 d-md-block">
                    <a href={repository} type="button" className= "btn btn-outline-secondary m-2">GitHub</a>
                    <a href={repository} type="button" className="btn btn-outline-primary m-2">Website</a>
                </div>

            </div>
      </div>
    );
  }

export default Card;