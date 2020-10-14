import React from "react";
import './home.css';
import HomeCarousel from "./HomeCarousel";
import Quotes from "./Quotes";
import Buttons from "./Buttons";
import Package from "./Package";

function Home() {
  return (
    <React.Fragment>
      <Quotes />
      <div className="bg-home center-aligned-home">
        <div>
          <HomeCarousel />
          <Buttons />
        </div>        
      </div>    
      <Package />  
    </React.Fragment>
  );
}

export default Home;
