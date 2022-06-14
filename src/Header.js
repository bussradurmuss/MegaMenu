import {
  Facebook,
  Favorite,
  Instagram,
  Person,
  Search,
  ShoppingCart,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import React from "react";
import "./Header.css";
import Menu from "./Menu";

function Header() {
  const [selected, setSelected] = useState("");

  return (
    <div className="header container">
      <div className="header__top">
        <div className="header__top__left">
          <Facebook />

          <Twitter />

          <YouTube />

          <Instagram />
        </div>

        <div className="header__top__right">
          <div>Order tracking</div>
          <div>Help</div>
          <ReactFlagsSelect
            selected={selected}
            onSelect={(code) => setSelected(code)}
          />
        </div>
      </div>

      <div className="header__center">
        <div className="header__center__logo">LOGO</div>
        <div className="header__center__search">
          <div className="header__center__search__input">
            <input type="text" placeholder="Search all products" />
          </div>
          <div className="header__center__search__button">
            <Search />
          </div>
        </div>
        <div className="header__center__infobar">
          <ShoppingCart />
          <Favorite />
          <Person />
        </div>
      </div>

      <Menu />
    </div>
  );
}

export default Header;
