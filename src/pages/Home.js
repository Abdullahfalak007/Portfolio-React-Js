import React from "react";
import profilePic from "../assets/profile-pic.jpg";
import SocialIcons from "../components/SocialIcons";
import Button from "../components/Button";

const Home = () => {
  return (
    <section id="profile">
      <div className="section__pic-container slideInLeft">
        <img src={profilePic} alt="Muhammad Abdullah profile picture" />
      </div>
      <div className="section__text slideInRight">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Muhammad Abdullah</h1>
        <p className="section__text__p2">
          Full Stack Developer | Software Engineer
        </p>
        <div className="btn-container">
          <Button
            text="Download CV"
            link="/assets/Muhammad-Abdullah-Resume-2024.pdf"
            isExternal={true}
          />
          <Button text="Contact Info" link="/contact" isExternal={false} />
        </div>
        <SocialIcons />
      </div>
    </section>
  );
};

export default Home;
