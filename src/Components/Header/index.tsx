import React, { FC } from "react";
import "./style.css";
import logo from '../../asset/images/logo.png';

const Header: FC = () => {
  return (
    <header className="app-header">
      <img src={logo} alt="logo" id="logo" />
      Eden
    </header>
  );
};

export default Header;
