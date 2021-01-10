import React from "react";
import "./menuItems.styles.scss";

const MenuItems = ({ title, size, imageUrl }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItems;
