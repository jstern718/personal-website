import React from "react"

function Job({position, firm, city, dates, description}) {

    console.log("description", description);
    console.log("position", position);

    return (
      <div className="card JobCard m-4">
            <div className="card-body">
                <h3 className="card-title mt-3">{position}</h3>
                <p className="card-text m-2 text-start mt-4 mb-4"><span className="fw-bold">{firm}</span> -- <span className="fst-italic">{city}</span> -- {dates}</p>
                <ul className="card-text m-2 text-start">
                    {description && description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}


                </ul>
            </div>
      </div>
    );
  }

export default Job;