import React from "react";
import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        className="logo"
        alt=""
      />

      <div className="search">
        <input className="input" type="text" />
        <SearchIcon className="icon" />
      </div>
      <div className="nav">
        <div className="option">
          <span className="optionOne">Hello Guest</span>
          <span className="optionTwo">Sign in</span>
        </div>
        <div className="option">
          <span className="optionOne">Returns &</span>
          <span className="optionTwo">Orders</span>
        </div>
        <div className="option">
          <span className="optionOne">Your</span>
          <span className="optionTwo">Prime</span>
        </div>
        <div className="optionBasket">
          <ShoppingBasket />
          <span className="BacketCount">0</span>
        </div>
      </div>
    </div>
  );
}
export default Header;
