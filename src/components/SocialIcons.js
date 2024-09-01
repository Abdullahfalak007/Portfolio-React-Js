import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

const SocialIcons = () => {
  return (
    <div id="socials-container">
      <img
        src={linkedin}
        alt="LinkedIn"
        className="icon"
        onClick={() =>
          window.open("https://www.linkedin.com/in/abdullahfalak007", "_blank")
        }
      />
      <img
        src={github}
        alt="GitHub"
        className="icon"
        onClick={() =>
          window.open("https://github.com/Abdullahfalak007", "_blank")
        }
      />
      <img
        src={youtube}
        alt="YouTube"
        className="icon"
        onClick={() =>
          window.open("https://www.youtube.com/c/FalakTechrary", "_blank")
        }
      />
      <img
        src={facebook}
        alt="Facebook"
        className="icon"
        onClick={() =>
          window.open("https://www.facebook.com/abdullahfalak007", "_blank")
        }
      />
      <img
        src={instagram}
        alt="Instagram"
        className="icon"
        onClick={() =>
          window.open("https://www.instagram.com/Abdullahfalak007/", "_blank")
        }
      />
    </div>
  );
};

export default SocialIcons;
