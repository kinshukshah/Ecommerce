import React from "react";
import "./menuItems.styles.scss";
import { withRouter } from "react-router";

const MenuItems = ({ title, size, imageUrl, linkUrl, history }) => {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => {
        history.push(`/${linkUrl}`);
      }}
    >
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

export default withRouter(MenuItems);
