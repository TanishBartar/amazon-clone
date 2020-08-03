import React from 'react';
import './poster.css'
function poster({image1,image2,image3,image4,image5}){
    return(
        <div className="posterContainer">
            <img src= {image1} className="poster"></img>
            <img src={image2}className="poster"></img>
            <img src={image3}className="poster"></img>
            <img src={image4}className="poster"></img>
            <img src={image5}className="poster"></img>

           
        </div>
    )
}
export default poster;