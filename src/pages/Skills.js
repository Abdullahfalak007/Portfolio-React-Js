import React from "react";
import checkmark from "../assets/checkmark.png";

const Skills = () => {
  return (
    <section id="skills">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img src={checkmark} alt="Checkmark icon" className="icon" />
                <div>
                  <h3>HTML5</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Checkmark icon" className="icon" />
                <div>
                  <h3>CSS3</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Checkmark icon" className="icon" />
                <div>
                  <h3>JavaScript (ES6+)</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Checkmark icon" className="icon" />
                <div>
                  <h3>React.js</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Checkmark icon" className="icon" />
                <div>
                  <h3>TypeScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Checkmark icon" className="icon" />
                <div>
                  <h3>Bootstrap</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Checkmark icon" className="icon" />
                <div>
                  <h3>Tailwind</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">
              Backend Development & Other Technologies
            </h2>
            <div className="article-container">
              <article>
                <img src={checkmark} alt="Checkmark icon" className="icon" />
                <div>
                  <h3>Node.js</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Checkmark icon" className="icon" />
                <div>
                  <h3>Express.js</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Checkmark icon" className="icon" />
                <div>
                  <h3>MongoDB</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Checkmark icon" className="icon" />
                <div>
                  <h3>Git</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Checkmark icon" className="icon" />
                <div>
                  <h3>Python</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Checkmark icon" className="icon" />
                <div>
                  <h3>Selenium</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Checkmark icon" className="icon" />
                <div>
                  <h3>Beautiful Soup</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Checkmark icon" className="icon" />
                <div>
                  <h3>App Script</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
