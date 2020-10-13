import React from "react";
import HomeCarousel from "./HomeCarousel";
import Quotes from "./Quotes";

function Home() {
  return (
    <React.Fragment>
      <Quotes />
      <HomeCarousel />      
    </React.Fragment>
  );
}

export default Home;
