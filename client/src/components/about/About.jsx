import React, { useEffect, useState } from "react";
import Varanasi from "../../images/varanasi.jpg";
import SubDetails from "../mutual/SubDetails";
import axios from "axios";
import { Helmet } from "react-helmet";

function About({match}) {
  const route = match.params.name;
  // console.log(route)
  const [data, setData] = useState({});
  const [mode, setMode] = useState('online');
  const dataAbout = async () => {
    try {
      var url = `/${route}`;
      var request = {
        url,
        method: "get",
      };
      const res = await axios(request);
      const result = await res.data;
      setData(result);
      localStorage.setItem("data", JSON.stringify(result))
    } catch (err) {
      setMode('offline')
      let collection = localStorage.getItem("data");
      setData(JSON.parse(collection))
      console.log(err);
    }
  };
  useEffect(() => {
    dataAbout();
  }, [data]);

  const { title, intro, article, keyword, description, pageName } = data;
  return (
    <React.Fragment>
      <Helmet>        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content={keyword}
        />
        <meta
          name="description"
          content={description}
        />
      <meta name="author" content="@taxiinvaranasi" />
      <meta name="theme-color" content="#ffa43e" />

      <meta itemprop="name" content={pageName} />
      <meta
        itemprop="description"
        content={description}
      />
      <meta
        itemprop="image"
        content="https://www.taxiinvaranasi.in/images/logo.jpeg"
      />

      <meta name="twitter:card" content="Summary" />
      <meta name="twitter:site" content="@taxiinvaranasi" />
      <meta name="twitter:title" content={pageName} />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta name="twitter:creator" content="@taxiinvaranasi" />
      <meta
        name="twitter:image:src"
        content="https://www.taxiinvaranasi.in/images/logo.jpeg"
      />

      <meta property="og:title" content={pageName} />
      <meta property="og:type" content="Travel & Tourism" />
      <meta property="og:url" content="https://www.taxiinvaranasi.in/" />
      <meta
        property="og:image"
        content="https://www.taxiinvaranasi.in/images/logo.jpeg"
      />
      <meta
        property="og:description"
        content="Book a car rental in Varanasi with us for the lowest fare and most efficient car hire and Outstation taxi service. Hire us to visit Kashi Vishwanath, Sarnath Darshan, airport to kashi vishwanath and many more places for inside Varanasi as well as outstation taxi service and take your touring experience to another level."
      />
      <meta
        property="og:site_name"
        content={pageName}
      />
      <title>
        {pageName}
      </title>
    </Helmet>
      {
        mode === 'offline' ?
          <div className="alert alert-warning text-center font-medium" role="alert">
              You are in offline mode or some issue with connectivity
          </div>
          : null
      }
      <img src={Varanasi} alt="Varanasi" className="img-fluid" />
      <div className="container">
        <div className="col-lg-8 col-md-10 col-sm-12 col-12">
          <h1 className="main-heading mt-4">{title}</h1>
          {intro
            ? intro.map((introdetail, index) => {
                return <p key={index} className="font-regular">{introdetail}</p>;
              })
            : ""}
          {article
            ? article.map((subDetails) => {
                return (
                  <SubDetails key={subDetails.id} subDetails={subDetails} />
                );
              })
            : ""}
          <h2 className="about-last-heading mt-4">
            Hire cab for About us - Book a Taxi or Car Hire services in Varanasi
            at Minimum cost.
          </h2>
          <hr />
          <div className="blog-post mb-3 mt-0 font-medium">
            <i className="fas fa-user" /> 4500+ pickups&nbsp;&nbsp;&nbsp;
            <i className="fas fa-calendar" /> We will wait for
            you&nbsp;&nbsp;&nbsp;
            <i className="fas fa-comment" /> Fastest Cab in
            Varanasi&nbsp;&nbsp;&nbsp;
            <i className="fas fa-heart" /> 5 favourites&nbsp;&nbsp;&nbsp;
            <i className="fas fa-eye" /> 1.128k views
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
