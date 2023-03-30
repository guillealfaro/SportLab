import React from "react";
import "../footer/footer.scss";
import logo from "../footer/logolargo.png";
import insta from "./instagram.png";
import tiktok from "./tiktok.png";
import wa from "./whats.png";

const Footer = () => {
  return (
    <footer className="footersh">
      <div className="left">
        <div className="minilogo">
          <a href="#navbar">
            <img className="footer-logo" src={logo} alt="" />
          </a>
        </div>
        <div className="icons">
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
      <div className="right">
        <div className="info">
          <a href="">Contact</a>
          <a href=""> |</a>
          <a href=""> About Us</a>
          <a href=""> |</a>
          <a href=""> Clients</a>
        </div>
        <div className="copyright">
          <a href="">Copyright © SportLab 2023. All rights reserved.</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
