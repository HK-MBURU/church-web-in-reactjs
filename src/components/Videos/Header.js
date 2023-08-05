import {
  Apps,
  Menu,
  Notifications,
  Search,
  VideoCall,
} from "@mui/icons-material";
import React from "react";
import hk from "./hk.svg";
import { Avatar } from "@mui/material";
import "./header.css";

function Header() {
  return (
    <div className="header">
      
      <div className="header__left">
        <img src={hk} alt="" className="header__logo" />
        <Menu />
      </div>

      <div className="header__input">
        <input type="text" placeholder="Search" />
        <Search className="header__inputButton" />
      </div>

      <div className="header__icons">
        <VideoCall  className="header__icon"/>
        <Apps className="header__icon" />
        <Notifications className="header__icon" />
        <Avatar src={hk}  className="header__icon"/>
      </div>
    </div>
  );
}

export default Header;
