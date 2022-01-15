import React from "react";
import "./menu-item.styles.scss";

function MenuItem(props) {
  return (
    <div className={`menu-item ${props.size}`}>
      <div
        style={{
          backgroundImage: `url(${props.imageURL})`,
        }}
        className="background-image"
      ></div>
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
