import React from "react";
import "./footer.css";
import FooterNav from "./FooterNav";
import Copyright from "./Copyright";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 footer-left pb-3">
              <h6>Har Har Mahadev!</h6> 
              <p className="font-middle">
                Since the dawn of time people have come to varanasi to attain salvation and enhancing this  experience with the best outstation taxi service is just the cherry on the top. We are available 24*7 and have been providing the finest outstation taxi service since 1986.
              </p>
              <p className="font-middle">Har Har Mahadev!!</p>             
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 footer-middle pb-3 px-5">              
              <h4>We Love You</h4>
              <div className="mid-btm ">
                <p className="font-middle">
                  Travelling with your entire family bua,masi,dadi,baba and siblings don’t worry we've got that covered travel in minibuses and enjoy your trip with us without any worry. Had an impromptu 6 friends trip ride in style with our brand new XUV. Planning a romantic weekend getaway? sedan would make an excellent choice.
                </p>
                <a href="https://www.taxiinvaranasi.in/ ">
                  https://www.taxiinvaranasi.in/
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 footer-right pb-3 px-5">
              <h4>Quick Links</h4>
              <Link to="/">
                <li className="text-white footer-li">
                  Varanasi Airport pickup
                </li>
              </Link>
              <Link to="/">
                <li className="text-white footer-li">
                  Distance between Varanasi airport to city
                </li>
              </Link>
              <Link to="/">
                <li className="text-white footer-li">
                  Cab rent from varanasi to Sangam
                </li>
              </Link>
              <Link to="/">
                <li className="text-white footer-li">
                  Kashi Vishwanath Darshan
                </li>
              </Link>
              <Link to="/">
                <li className="text-white footer-li">
                  Reserve taxi In varanasi
                </li>
              </Link>
              <Link to="/">
                <li className="text-white footer-li">
                  Varanasi to Gaya cab rental
                </li>
              </Link>
            </div>            
          </div>
        </div>
      </div>
      <FooterNav />
      <Copyright />
    </React.Fragment>
  );
}

export default Footer;
