import React from "react"

function School({school, city, degree, date}) {

    return (
      <div className="card m-4">
            <div className="card-body">
                <h6 className="card-title mt-2 mb-2"><span className="fw-bold">{school}</span> -- {city}</h6>
                <p className="card-text mb-0 text-start">{degree} -- {date}</p>
            </div>
      </div>
    );
  }

export default School;