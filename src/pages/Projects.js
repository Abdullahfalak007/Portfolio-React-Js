import React from "react";
import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/Project-5.png";

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project1} alt="Project 1" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">
              Gmail Automation
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://github.com/Abdullahfalak007/Email-extraction-script-from-the-body-of-an-email-message-using-python",
                    "_blank"
                  )
                }
              >
                Github
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project3} alt="Project 3" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">
              Customer Representatives Advocate
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://github.com/Abdullahfalak007/Customer-Representative-Advocate",
                    "_blank"
                  )
                }
              >
                Github
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project2} alt="Project 2" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">
              Lead Tracker (Extension)
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://github.com/Abdullahfalak007/Lead-Tracker-App.git",
                    "_blank"
                  )
                }
              >
                Github
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project4} alt="Project 4" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">
              Nordic Rose (Webpage)
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://github.com/Abdullahfalak007/Nordic-Rose.git",
                    "_blank"
                  )
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://abdullahfalak007.github.io/Task-06/",
                    "_blank"
                  )
                }
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project5} alt="Project 5" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Blog Website</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://github.com/Abdullahfalak007/Task-08.git",
                    "_blank"
                  )
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://abdullahfalak007.github.io/Task-05/",
                    "_blank"
                  )
                }
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
