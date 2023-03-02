import React from "react";

const Header = ({ onActive }) => {
  return (
    <div className="audio__header">
      <h3 className="header__logo">Mstudio</h3>
      <i className="bi bi-music-note-list" onClick={() => onActive()}></i>
    </div>
  );
};

export default Header;
