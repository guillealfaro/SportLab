import React from "react";
import "./programs.css";
import plan1 from "../programs/screen2.png";
import plan2 from "../programs/adult-training-body-building.jpg";
import plan3 from "../programs/person-doing-crossfit-training.jpg";

const ProgramsPlan = () => {
  return (
    <div className="contenedor-programs">
      <div className="first">
        <img className="programa-uno" src={plan1} alt="" />
        <div className="overlay">
          <p className="price">140$</p>
          <p className="complete">COMPLETE</p>
          <p className="prim-text">Everything you need</p>
          <p className="prim-text">to achieve your goals.</p>
          <a href="#progrms">MORE INFO</a>
        </div>
      </div>

      <div className="first">
        <img className="programa-uno" src={plan2} alt="" />
        <div className="overlay">
          <p className="price">140$</p>
          <p className="complete">ADVANCED</p>
          <p className="prim-text">Think big</p>
          <p className="prim-text">Achieve big.</p>
          <a href="#progrms">MORE INFO</a>
        </div>
      </div>

      <div className="first">
        <img className="programa-uno" src={plan3} alt="" />
        <div className="overlay">
          <p className="price">140$</p>
          <p className="complete">FOCUSED</p>
          <p className="prim-text">Hard work</p>
          <p className="prim-text">beats talent.</p>
          <a href="#progrms">MORE INFO</a>
        </div>
      </div>
    </div>
  );
};
export default ProgramsPlan;
