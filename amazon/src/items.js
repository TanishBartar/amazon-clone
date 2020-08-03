import React from 'react';
import './items.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function items({heading,url,caption}){
    return(
        <div className="photo">
            <div>
             <h2>{heading}</h2>
            </div>
            <img src={url} className="itemphoto"></img>
            <Link>
              <h7 className="h">See more</h7>
            </Link>

        </div>
    )
}
export default items;