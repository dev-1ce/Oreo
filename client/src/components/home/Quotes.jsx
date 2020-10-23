import React, { useState, useEffect } from "react";

function Quotes(){
  const [collection , setCollection] = useState('')
  const quotes = [
    "Take your touring experience to another level",
    "Fasten your seat belts and brace yourself",
    "Be the first one in town to get on board with us",
    "Planning a trip to varansi? Do it with outstation taxi service",
    "Get the best out of an unplanned trip with us",
    "Panic mode : OFF! ❌ ESSENTIALS ARE ON! ✔️",
    "Enjoy a hassle free ride in our frequently sanitized cabs",  
    "Presenting the best outstation taxi service and car rental in varanasi.",
    "We partnered up with city's top car and best can driver to give you an amazing experience round the town",    
  ];
  useEffect(() => {
    const interval = setInterval(() => {
        setQuote()
    }, 5000);
    return() => {
        clearInterval(interval)
    }
  })
  const setQuote = () => {
    const rand = Math.floor(Math.random() * (8 - 0)) + 0;
    setCollection(quotes[rand])
  }
  return (
    <React.Fragment>
      <div className="text-brown text-center py-1 font-15 mb-3 font-regular" style={{background: "#fff3cd"}}>{collection}</div>
    </React.Fragment>
  );
}

export default Quotes;