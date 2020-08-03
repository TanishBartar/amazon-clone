import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React from 'react';
import Header from './header';
import image4 from './image4.jpg';
import './homepage.css'
import homephoto from './homephoto.jpg'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Items from './items'
import Poster from './poster'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function homepage(){

 return(
        <div>
           <Header />
           <div className="photodiv">
                <img src={homephoto} className="homephoto"></img>
     </div>
     <div className="card">
         <Items heading="Electronics" url="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg"/>
         <Items heading="Get fit at home" url="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_2x._SY608_CB434924743_.jpg"/>
         <Items heading="Beauty picks" url="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg"/>
         <Items heading="Amazon Basics" url="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg"/>
         <Items heading="Deals " url="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals__2x._SY608_CB430401031_.jpg"/>
         <Items heading="Sports" url="https://www.superwh.com.au/user/images/5134_300_300.jpg?t=1908121548"/>
         <Items heading="Food" url="https://th.bing.com/th/id/OIP.kG_ATgGew3Bu0epkuuuOnQHaHa?pid=Api&rs=1"/>
         <Items heading="Clothes" url="https://images-na.ssl-images-amazon.com/images/I/71id+wwTw-L._AC_SY400_.jpg"/>
   </div>
       <Poster 
        image1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_2x._CB445837684_.png"
        image2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_2X._CB451228332_.jpg"
        image3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_V2_en_US_2x._CB447531871_.png"
        image4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_2X._CB451228335_.jpg"
        image5="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_2X._CB451228334_.jpg"
        />
        <Poster
        image1="https://images-na.ssl-images-amazon.com/images/I/91rQEZWc8NL._AC_SY400_.jpg"
        image2="https://images-na.ssl-images-amazon.com/images/I/61Gh+dmUEvL._AC_SY400_.jpg"
        image3="https://images-na.ssl-images-amazon.com/images/I/91Y2IOHgprL._AC_SY400_.jpg"
        image4="https://images-na.ssl-images-amazon.com/images/I/61GAYAnW98L._AC_SY400_.jpg"
        image5="https://images-na.ssl-images-amazon.com/images/I/A1ByaX5mx3L._AC_SY400_.jpg"
        />
        <Poster
        image1="https://images-na.ssl-images-amazon.com/images/I/71gjJZ4Df2L._AC_SY400_.jpg"
        image2="https://images-na.ssl-images-amazon.com/images/I/91xxqc9IwcL._AC_SY400_.jpg"
        image3="https://images-na.ssl-images-amazon.com/images/I/71URNvzoWqL._AC_SY400_.jpg"
        image4="https://images-na.ssl-images-amazon.com/images/I/71s7HbyqzEL._AC_SY400_.jpg"
        image5="https://images-na.ssl-images-amazon.com/images/I/61po+blqBuL._AC_SY400_.jpg"
        />
        <Poster
        image1="https://images-na.ssl-images-amazon.com/images/I/41TWHhFUC3L._AC_SY400_.jpg"
        image2="https://images-na.ssl-images-amazon.com/images/I/81BIw-Txa9L._AC_SY400_.jpg"
        image3="https://images-na.ssl-images-amazon.com/images/I/81vHq4yY38L._AC_SY400_.jpg"
        image4="https://images-na.ssl-images-amazon.com/images/I/71lbJjoQHuL._AC_SY400_.jpg"
        image5="https://images-na.ssl-images-amazon.com/images/I/91oiSVwU7OL._AC_SY400_.jpg"
        
        />
        <Poster
        image1="https://images-na.ssl-images-amazon.com/images/I/816RCA7sAZL.__BG0,0,0,0_FMpng_AC_SY220_.jpg"
        image2="https://images-na.ssl-images-amazon.com/images/I/81MSe4mnRlL.__BG0,0,0,0_FMpng_AC_SY220_.jpg"
        image3="https://images-na.ssl-images-amazon.com/images/I/91SwTq7GGRL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_SY220_.jpg"
        image4="https://images-na.ssl-images-amazon.com/images/I/81T6jOwH9RL.__BG0,0,0,0_FMpng_AC_SY220_.jpg"
        image5="https://images-na.ssl-images-amazon.com/images/I/81R08HiW3UL.__BG0,0,0,0_FMpng_AC_SY220_.jpg"
        />
       <Poster 
       image1="https://images-na.ssl-images-amazon.com/images/I/81xV+D1OkGL._AC_SY400_.jpg"
       image2="https://images-na.ssl-images-amazon.com/images/I/91JhcC33dTL._AC_SY400_.jpg"
       image3="https://images-na.ssl-images-amazon.com/images/I/81OAWwX3djL._AC_SY400_.jpg"
       image4="https://images-na.ssl-images-amazon.com/images/I/81-mDmkhyFL._AC_SY400_.jpg"
       image5="https://images-na.ssl-images-amazon.com/images/I/71YGe6bOE0L._AC_SY400_.jpg"
       />

</div>

       
       
    );
 }
export default homepage;