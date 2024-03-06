import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../images/main-logo.png";
import NavDropdown from "react-bootstrap/NavDropdown"

function NavbarComponent() {
  // const [show, setShow] = useState(true);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // let btn_class = show ? "widthHun" : "widthZero"
  return (
    <React.Fragment>
      {/* <div className={btn_class}>
        <div className="overlay">
          <a href="javascript:void(0)" className="closebtn" onclick={handleClose}>&times;</a>
          <div className="overlay-content">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <span onclick={handleShow}>open</span>
      </div> */}
      <Navbar expand="lg" className="nav-background py-0" sticky="top" collapseOnSelect={true} variant="dark">
        <Navbar.Brand href="/" className="mx-0">
          <img src={Logo} alt="Vinayak Travels" className="img-fluid py-0 my-0"/>
          <span className="text-white font-bold">Outstation Taxi Service</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact to="/" activeClassName="activeNav">
              <Nav.Link
                href="/"
                className="font-medium font-17 px-3 navbar-item
                  text-white text-center"
              >
                Home
              </Nav.Link>
            </NavLink>
            <NavDropdown title="Blogs" id="collasible-nav-dropdown" className="font-medium font-17 px-3 navbar-item text-white text-center active">
              <div style={{background: '#FFECD3', border: 'none', borderRadius: '5px', color: '#663D14'}}>
                <Link to="/blogs/Kashi Vishwanath" className="font-15 text-brown font-regular dropdown-item">                  
                  KashiVishwanath                  
                </Link>
                <Link to="/blogs/Top 10 Places" className="font-15 text-brown font-regular dropdown-item">
                  Top 10 places in Varanasi
                </Link>
                <Link to="/blogs/Ghats" className="font-15 text-brown font-regular dropdown-item">
                  Top Ghats
                </Link>
                <Link to="/blogs/Ayodhya" className="font-15 text-brown font-regular dropdown-item">
                  Ayodhya
                </Link>
                <Link to="/blogs/Bhu" className="font-15 text-brown font-regular dropdown-item">
                  BHU
                </Link>
                <Link to="/blogs/DevDipawali" className="font-15 text-brown font-regular dropdown-item">
                  Dev Depawali
                </Link>
                <Link to="/blogs/Prayagraj" className="font-15 text-brown font-regular dropdown-item">
                  Prayagraj
                </Link>
                <Link to="/blogs/Vindhyachal" className="font-15 text-brown font-regular dropdown-item">
                  Vindhyachal
                </Link>
                <Link to="/blogs/Gaya" className="font-15 text-brown font-regular dropdown-item">
                  Gaya
                </Link>
                <Link to="/blogs/Sarnath" className="font-15 text-brown font-regular dropdown-item">
                  Sarnath
                </Link>
                <Link to="/blogs/Durgamandir" className="font-15 text-brown font-regular dropdown-item">
                  Durga Mata Mandir
                </Link>
              </div>
            </NavDropdown>
            <NavDropdown title="Packages" id="collasible-nav-dropdown" className="font-medium font-17 px-3 navbar-item text-white text-center active">
              <div style={{background: '#FFECD3', border: 'none', borderRadius: '5px', color: '#663D14'}}>
                <Link to="/package/Top 10 places" className="font-15 text-brown font-regular dropdown-item">                  
                  Airport                
                </Link>
                <Link to="/package/Varanasi to Ayodhya Taxi" className="font-15 text-brown font-regular dropdown-item">                  
                  Varanasi to Ayodhya Taxi                
                </Link>
                <Link to="/package/Varanasi to Ayodhya Bus" className="font-15 text-brown font-regular dropdown-item">                  
                  Varanasi to Ayodhya Bus                
                </Link><Link to="/package/Varanasi to Ayodhya Train" className="font-15 text-brown font-regular dropdown-item">                  
                  Varanasi to Ayodhya Train                
                </Link>
                <Link to="/package/Varanasi to Gaya Taxi" className="font-15 text-brown font-regular dropdown-item">                  
                  Varnasi to Gaya Taxi                
                </Link><Link to="/package/Varanasi to Gaya Bus" className="font-15 text-brown font-regular dropdown-item">                  
                  Varanasi to Gaya Bus            
                </Link><Link to="/package/Varanasi to Gaya Train" className="font-15 text-brown font-regular dropdown-item">                  
                  Varanasi to Gaya Train                
                </Link>
                <Link to="/package/Vindhyachal" className="font-15 text-brown font-regular dropdown-item">                  
                 Varanasi to Vindhyachal                
                </Link>
                <Link to="/package/Prayagraj" className="font-15 text-brown font-regular dropdown-item">                  
                  Varanasi to Prayagraj             
                </Link>
                
              </div>
            </NavDropdown>
            <NavLink to="/blogs/carHire" activeClassName="activeNav">
              <Nav.Link
                href="/blogs/carRental"
                className="font-medium font-17 px-3 navbar-item
                  text-white text-center"
              >
                Rental cars
              </Nav.Link>
            </NavLink>            
            <NavLink to="/about" activeClassName="activeNav">
              <Nav.Link
                href="/about"
                className="font-medium font-17
                  px-3 navbar-item text-white text-center"
              >
                About Us
              </Nav.Link>
            </NavLink>
            <NavLink to="/contact" activeClassName="activeLastNav">
              <Nav.Link
                href="/contact"
                className="font-medium font-17 px-3 navbar-last-item
                  mx-auto text-white text-center bg-brown d-none d-lg-block"
              >
                Get in Touch
              </Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarComponent;
