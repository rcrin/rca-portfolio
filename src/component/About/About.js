import React from "react";
import "./About.css";
import Reveal from "../utils/Reveal/Reveal";

const About = () => {
  return (
    <div className="about-content">
      <Reveal
        text="I worked mainly as a Java Developer, now I wanting to expand my
        expertise to javascript."
      />
      <br />
      <Reveal text="Email: ramilatangan@gmail.com" />
    </div>
  );
};

export default About;
