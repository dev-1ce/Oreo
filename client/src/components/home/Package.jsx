import React from 'react';
import One from "../../images/packageOne.png"
import Two from "../../images/packageTwo.png"
import Three from "../../images/packageThree.png"
import Four from "../../images/packageFour.png"


function Package() {
    return (
        <div className="container pb-5 mb-5">
            <div className="text-dark my-5 pt-4">
                <h2 className="mutual-heading font-weight-bold">Packages</h2>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={One} alt="Airport" className="rounded mb-3 img-fluid"/>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={Two} alt="Allahabad" className="rounded mb-3 img-fluid"/>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={Three} alt="Gaya" className="rounded mb-3 img-fluid"/>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={Four} alt="Vindhayachal" className="rounded mb-3 img-fluid"/>
                </div>
            </div>
        </div>
    )
}

export default Package
