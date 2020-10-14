import React, { useState, useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { DetailsContext } from "../../context/context";

function HomeCarousel() {
  const { home } = useContext(DetailsContext);
  const { article } = home;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <React.Fragment>
      
        <div className="container">
          <div className="carousel-custom">
            <Carousel activeIndex={index} onSelect={handleSelect} fade>
              {article.map(slide => (
                <Carousel.Item className="carousel-custom">
                  <div className="row no-gutters">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="card">
                        <div className="card-body py-2 px-0 pt-0">
                          <img
                            className="slick-slide-image img-fluid w-100 p-lg-3"
                            src={slide.image}
                          />
                        </div>
                      </div>
                    </div>              
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 px-2">
                      <div className="center-aligned">
                      <h3 className="text-dark font-weight-bold">{slide.name}</h3>
                      <p className="text-dark text-center pb-3">{slide.paragraph}</p>
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr className="pb-0">
                              <th className="table-headings">
                                <p className="text-center text-white py-0 my-0">
                                  City Ride
                                </p>
                              </th>
                              <th className="table-headings">
                                <p className="text-center text-white py-0 my-0">
                                  Outstation
                                </p>
                              </th>
                              <th className="table-headings">
                                <p className="text-center text-white py-0 my-0">
                                  Airport
                                </p>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="pb-0">
                              <td className="bg-white">
                                <p className="text-center font-weight-bold text-blue py-0 my-0">
                                  {slide.city == "-" ? <span>{slide.city}</span> : <span>&#x20B9;{slide.city}km/day</span>}
                                </p>
                              </td>
                              <td className="bg-white">
                                <p className="text-center font-weight-bold text-blue py-0 my-0">
                                  &#x20B9;{slide.outstation}km/hr
                                </p>
                              </td>
                              <td className="bg-white">
                                <p className="text-center font-weight-bold text-blue py-0 my-0">
                                  &#x20B9;{slide.airport}
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      </div>                      
                    </div>              
                  </div>                        
              </Carousel.Item>
            ))}
            </Carousel>
          </div>
        </div>          
    </React.Fragment>
  );
}

export default HomeCarousel;
