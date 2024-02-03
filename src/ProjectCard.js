import React, { useState } from "react";


function ProjectCard({oldid,
                      addressa,
                      addressb,
                      title,
                      text,
                      repository0,
                      repository1,
                      repository2,
                      website}) {

    let id = `#carousel${oldid}`;

    console.log("id", id);
    console.log("addressa", addressa);
    console.log("addressb", addressb);
    console.log("title", title);
    console.log("text", text);
    // console.log("repository", repositories);
    console.log("website", website);


    const [activeSlide, setActiveSlide] = useState(0);
    const handlePrevSlide = () => {
        setActiveSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
      };

      const handleNextSlide = () => {
        setActiveSlide((prevSlide) => (prevSlide === 1 ? 0 : 1));
      };


    return (
        <div className="col-4" >
            <div className="full-card">
                <div id={id} className="carousel slide card-image" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className={`carousel-item ${activeSlide === 0 ? 'active' : ''}`}>
                            <img className="d-block w-100 card-img" src={addressa} alt="First slide" />
                        </div>
                        <div className={`carousel-item ${activeSlide === 1 ? 'active' : ''}`}>
                            <img className="d-block w-100" src={addressb} alt="Second slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" role="button" onClick={handlePrevSlide}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only"></span>
                    </a>
                    <a className="carousel-control-next" role="button" onClick={handleNextSlide}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only"></span>
                    </a>
                </div>
                <div className="card-caption" >
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text m-2 text-start">{text}</p>
                    <div className="d-grid gap2 d-md-block">
                        <div >
                            {(repository2)
                                ? <div>
                                    <div>
                                        <a href={repository0} type="button" className= "btn btn-outline-dark buttonClass">GitHub Repo:</a>
                                        <a href={repository1} type="button" className= "btn btn-dark btn-outline-secondary text-light">Frontend</a>
                                        <a href={repository2} type="button" className= "btn btn-dark btn-outline-secondary text-light">Backend</a>
                                    </div>
                                    <a href={website} type="button" className="btn btn-outline-dark buttonClass mt-2 ml-0 mr-0">Deployed Website</a>
                                  </div>
                                : <div>
                                    <a href={repository0} type="button" className= "m-2 p-2 btn btn-dark btn-outline-secondary text-light">GitHub Repo</a>
                                    <a href={website} type="button" className="m-2 p-2 btn btn-outline-dark buttonClass">Deployed Website</a>
                                  </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
      </div>
    );
  }

export default ProjectCard;

