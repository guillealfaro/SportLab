import React from "react";
import "./section.css";
import insta from "./instagram.png";
import tiktok from "./tiktok.png";
import wa from "./whats.png";

const Section = () => {
  return (
    <section className="contain">
      <div className="space"></div>

      <div className="column">
        <div className="quote">
          <p>HARD WORK PAYS OFF</p>
        </div>

        <div className="quote2">
          <p>
            Sport Lab is a fitness program for people who wants to put in the
            work for a better life
          </p>
        </div>

        <div className="contact">
          <a href="https://www.instagram.com/sportlabcr/">
            <img src={insta} alt="" className="insta" />
          </a>
          <a href="#tiktok">
            <img src={tiktok} alt="" className="tiktok" />
          </a>
          <a href="">
            <img src={wa} alt="" className="whats" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section;
