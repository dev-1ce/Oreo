import React from 'react'

function Buttons() {
    return (
        <React.Fragment>
          <div className="container">
            <div className="row no-gutters mb-5 mt-2">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 mx-auto bg-white py-4 px-2">
                <div className="row no-gutters">
                  <div className="col-lg-6 col-md-6 col-6 col-sm-6 mx-auto book-now-button">
                    <div className="text-dark font-weight-bold text-center py-2">
                      Book Now
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-6 col-sm-6 mx-auto call-now-button">                
                    <div className="text-white font-weight-bold text-center py-2">
                      <i className="fas fa-phone-alt text-white" /> &nbsp;Call Now
                    </div>
                  </div>
                </div>
              </div>
            </div>               
          </div>          
        </React.Fragment>
    )
}

export default Buttons
