import React from "react";
import "./bio.css";

const BioSection = () => {
  return (
    <div className="section-bio">
      <p className="titulo">ARE YOU WILLING TO DO WHAT IT TAKES?</p>

      <div className="text">
        <p className="little">
          Sport Lab adapts to each person and their needs
        </p>

        <p className="little">
          personalized routines to work on your preference
        </p>

        <p className="little">
          whether you need to recover or prevent an injury
        </p>

        <p className="little">
          get a nutrition plan based on your physique goals
        </p>

        <p className="little">or train hard and smart for better results.</p>
      </div>

      <a href="#whateves">Contact Us</a>
    </div>
  );
};
export default BioSection;
