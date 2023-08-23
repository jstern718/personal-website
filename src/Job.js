import React from "react"

function Job({position, firm, city, dates, description}) {

    console.log("position", position);

    return (
      <div className="card m-4">
            <div className="card-body">
                <h3 className="card-title mt-3">{position}</h3>
                <p className="card-text m-2 text-start mt-4 mb-4"><span className="fw-bold">{firm}</span> -- <span className="fst-italic">{city}</span> -- {dates}</p>
                <p className="card-text m-2 text-start">{description}</p>
            </div>
      </div>
    );
  }

export default Job;