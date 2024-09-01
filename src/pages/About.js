import React from "react";
import aboutPic from "../assets/about-pic.png";
import experienceIcon from "../assets/experience.png";
import educationIcon from "../assets/education.png";

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={aboutPic}
            alt="About Muhammad Abdullah"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experienceIcon} alt="Experience" className="icon" />
              <h3>Experience</h3>
              <p>
                Frontend Development (2+ Years)
                <br />
                Mern Stack Developer (1+ Years)
              </p>
            </div>
            <div className="details-container">
              <img src={educationIcon} alt="Education" className="icon" />
              <h3>Education</h3>
              <p>
                Bachelor of Computer Science (BSCS)
                <br />
                Riphah International University
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Seasoned Full Stack Developer and Software Engineer with a solid
              track record in front-end and back-end development, and API
              integration. Specializes in automating complex processes using
              Python and App Script, delivering custom software solutions that
              enhance business operations. Proficient in developing specialized
              tools, including a browser extension for lead management.
              Effective at transforming client requirements into efficient
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
