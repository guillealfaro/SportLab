import React from "react";
import "../ingreso/ingreso.scss";
import loguito from "../ingreso/logo.png";

const Ingreso = () => {
  return (
    <div className="container-login">
      <div className="cuadro">
        <div className="cuadro-container">
          <div className="image-cont">
            <img className="loginimage" src={loguito} alt="" />
          </div>
          <div className="sing">
            <p>Sing In</p>
          </div>
          <div className="user">
            <input type="text" value="Username" />
          </div>
          <div className="pass">
            <input type="text" value="Password" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ingreso;
