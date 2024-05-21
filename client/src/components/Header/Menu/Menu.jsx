import React from "react";
import { MdClose } from "react-icons/md";
import "./Menu.scss";
import { useNavigate } from "react-router-dom";

const Menu = ({ setShowMenu }) => {
  const navigate = useNavigate();
  return (
    <div className="menu-panel">
      <div className="opac-layer" onClick={() => setShowMenu(false)}></div>
      <div className="menu-content">
        <div className="menu-header">
          <span className="heading">Options</span>
          <span className="close-btn" onClick={() => setShowMenu(false)}>
            <MdClose className="close-btn" />
            <span className="text">close</span>
          </span>
        </div>

        <ul className="list-items">
          <li
            onClick={() => {
              navigate("/");
              setShowMenu(false);
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("/about");
              setShowMenu(false);
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              navigate("/collections");
              setShowMenu(false);
            }}
          >
            Collections
          </li>
          <li
            onClick={() => {
              navigate("/contact");
              setShowMenu(false);
            }}
          >
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
