import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import img1 from "../navbar/logo.png";
import "./navbar.scss";

const Navbar = () => {
  const navRef = useRef();
  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(-40);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
      }

      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <nav className={`active ${show && "hidden"}`}>
      <div className="logo">
        <img className="loguito" src={img1} alt="" />
      </div>

      <div ref={navRef} className="links">
        <ul>
          <li>
            <a href="#programs" className="tags">
              Daily Workouts
            </a>
          </li>
          <li>
            <a href="Coaching" className="tags">
              Coaching
            </a>
          </li>
          <li>
            <a href="Nutrition" className="tags">
              Nutrition
            </a>
          </li>
          <li>
            <a href="#programs" className="tags">
              Videos
            </a>
          </li>
          <a className="join-now" href="Login">
            Login
          </a>
          <button className="nav-btn nav-btn-close" onClick={showNav}>
            <FaTimes />
          </button>
        </ul>
      </div>
      <button className="nav-btn" onClick={showNav}>
        <FaBars />
      </button>
    </nav>
  );
};
export default Navbar;
