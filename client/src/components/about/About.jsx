import React, { useEffect, useState } from "react";
import Varanasi from "../../images/varanasi.jpg";
// import SubDetails from "../mutual/SubDetails";
import axios from "axios";
import { Helmet } from "react-helmet";
import StickyBox from "react-sticky-box";
import Sidebar from "react-sticky-box";
// import styles from "react-sticky-box/dist/esnext/styles.module.css"

function About({match}) {
  // const route = match.params.name;
  // // console.log(route)
  // const [data, setData] = useState({});
  // const [mode, setMode] = useState('online');
  // const dataAbout = async () => {
  //   try {
  //     var url = `/${route}`;
  //     var request = {
  //       url,
  //       method: "get",
  //     };
  //     const res = await axios(request);
  //     const result = await res.data;
  //     setData(result);
  //     localStorage.setItem("data", JSON.stringify(result))
  //   } catch (err) {
  //     setMode('offline')
  //     let collection = localStorage.getItem("data");
  //     setData(JSON.parse(collection))
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   dataAbout();
  // }, [data]);

  // const { title, intro, article, keyword, description, pageName } = data;
  return (
    <React.Fragment>
      {/* <Helmet>        
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
    </Helmet> */}
      {/* {
        mode === 'offline' ?
          <div className="alert alert-warning text-center font-medium" role="alert">
              You are in offline mode or some issue with connectivity
          </div>
          : null
      } */}
      
        <div className="container">
          <div className="row" style={{ height: '100vh' , overflow: 'auto' }}>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">              
              <StickyBox>
                <img src={Varanasi} alt="Varanasi" className="img-fluid"/>
              </StickyBox>
            </div>              
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div style={{ height: 'auto'}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos illum reiciendis cupiditate exercitationem libero rerum fuga distinctio dignissimos numquam, illo, debitis sequi. Quibusdam, obcaecati esse beatae impedit explicabo, maiores veritatis sed aliquam itaque vero magnam soluta harum assumenda, in magni! Dolorem, suscipit minus facilis magnam temporibus error delectus repellat quam, odio, harum porro animi. Quasi praesentium officia ad itaque iusto fugiat rem, nulla fugit ullam quae excepturi provident amet laudantium modi doloribus tempora esse quos expedita perferendis architecto dolor maiores? Cum dolores deserunt suscipit sapiente velit doloremque voluptas nulla hic, quos ducimus, at adipisci totam odio nostrum inventore corrupti iste excepturi delectus. Impedit adipisci provident quam et. Officiis repudiandae quo perspiciatis molestias mollitia maiores. A corporis molestiae voluptas error aliquid, pariatur mollitia cupiditate architecto debitis? Officiis culpa soluta quod amet? Dolor sunt culpa distinctio doloremque quo eaque quas, tempora blanditiis, illum, fugiat cum. Dicta odit ipsam nam in voluptatibus quis sed qui fugiat maxime. Voluptatum vero dolorem nulla nesciunt neque, odit non ab ex unde, blanditiis autem aut quibusdam aliquam doloremque fugiat a! A aspernatur exercitationem nostrum eveniet at odio ad. Est quo ipsam repellat in iste voluptatum ut eius, corrupti blanditiis labore. Consequuntur dolor nam quam optio cum ex ab ut incidunt quod. Nihil incidunt consequuntur quibusdam officia? Magni, et? Ut consequuntur tempora, minus ab dolor nobis repellendus exercitationem labore illum dolore ipsam blanditiis obcaecati aspernatur. Quidem, rerum alias inventore consectetur earum placeat magnam reprehenderit officiis recusandae perspiciatis aliquid eaque praesentium laboriosam sapiente ipsa vel. Laudantium doloremque maiores libero blanditiis. Asperiores incidunt blanditiis consectetur dolore fuga suscipit inventore cum quod error tenetur repudiandae fugiat facere mollitia repellendus quo officiis non aliquam libero quibusdam laudantium, illo molestiae corporis! Adipisci ad expedita explicabo fugit, laboriosam, aperiam rerum laudantium accusantium iste eaque alias ut harum quae ullam quisquam? Mollitia, quia eum sunt suscipit magni dolor ipsa animi voluptas cupiditate error, sit exercitationem, soluta molestiae. Illo ut rerum esse possimus dicta, quasi inventore cupiditate optio porro nobis eaque repellendus ipsum repudiandae dolore cum doloribus doloremque est pariatur, facere magnam saepe, tenetur molestiae repellat. Impedit nobis odit atque unde ratione ut ea ipsum libero voluptate totam officia, accusantium dolore harum quod explicabo repellendus eos enim aliquam cupiditate, laudantium facilis. Voluptas obcaecati soluta et error accusantium ab nam officia ipsam sed quos, quo veniam facere illo itaque tempore incidunt. Excepturi mollitia in consectetur ducimus debitis expedita commodi modi, laudantium fugiat recusandae! Ut ipsum ea libero quos vel nam expedita quis dolor ex culpa? In, consequuntur quis maxime similique aut commodi fuga accusantium accusamus quae nam magnam necessitatibus sit sed sapiente pariatur, alias vel optio officia explicabo ut! Est ipsa deleniti minima, deserunt reprehenderit dignissimos voluptatibus perspiciatis. Nesciunt quaerat accusantium esse odio necessitatibus hic dicta! Quibusdam delectus optio in id temporibus maxime, nobis incidunt, nostrum, possimus odio amet earum veniam nesciunt illum vero sapiente obcaecati velit quos culpa repellat libero recusandae eveniet? Dicta odit, nostrum iusto numquam mollitia debitis earum deserunt quos. Delectus vel deserunt saepe perferendis, distinctio accusantium expedita architecto illum quisquam cum? Maiores, suscipit?
              </div>  
            </div>
          </div>
        </div>
        
      
      {/* <img src={Varanasi} alt="Varanasi" className="img-fluid" />
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
      </div> */}
    </React.Fragment>
  );
}

export default About;
