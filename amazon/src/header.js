import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
function header() {
    return (
      <div className="header">
          <div className="header__menue">
            <MenuIcon className="menue" />
          </div>
          <div className="header__logo">
              <img src="http://www.bkitchensupplies.com/wp-content/uploads/2017/05/amazon_logo_white_text.png" className="logo"></img>
          </div>
          <div className="header__input">
            <input className="input"></input>
            <SearchIcon className="searchicon" />
          </div>
          

          <div className="Header__flag">
            <img src="https://th.bing.com/th/id/OIP.mj6ZxHH_YhezE3baAh0MNwHaEs?pid=Api&rs=1" className="flag"></img>
          </div>
          <Link to='./signin'>
          <div className="signin">
           <h3>Sign in</h3>
          </div>
        </Link>
        <Link>
          <div className="returnsandorders">
            <h3>Returns and <br></br>orders</h3>
           </div>
         </Link>
         <Link to="./signin">
         <div className="cart">
           <ShoppingCartIcon className="carticon"/>
           <h1>0 </h1>
           
          </div>
         </Link>
        </div>
    );
  }
  
  export default header;
  