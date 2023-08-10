import {
  Apps,
  Menu,
  Notifications,
  Search,
  VideoCall,
} from "@mui/icons-material";
import React, { useState } from "react";
import hk from "./hk.svg";
import { Avatar } from "@mui/material";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  // console.log(inputSearch);
  return (
    <div className="header">
      <div className="header__left">
      <Menu />
        
        <Link to='/ '>
        <img src={hk} alt="" className="header__logo" />
        </Link>
      </div>

      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
        <Search className="header__inputButton" />
        </Link>
        
      </div>

      <div className="header__icons">
        <VideoCall className="header__icon" />
        <Apps className="header__icon" />
        <Notifications className="header__icon" />
        <Avatar src={hk} className="header__icon" />
      </div>
    </div>
  );
}

export default Header;
