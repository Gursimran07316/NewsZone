import React from 'react'
import Adbanner from '../assets/ads-728x90.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faGooglePlusG, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Nav from './Nav';

const Header = () => {
  return (
    <>
    <div className="container-fluid d-none d-lg-block">
  <div className="row align-items-center bg-dark px-lg-5">
    <div className="col-lg-9">
      <nav className="navbar navbar-expand-sm bg-dark p-0">
        <ul className="navbar-nav ml-n2">
          <li className="nav-item border-right border-secondary">
            <a className="nav-link text-body small" href="#">Monday, January 1, 2045</a>
          </li>
          <li className="nav-item border-right border-secondary">
            <a className="nav-link text-body small" href="#">Advertise</a>
          </li>
          <li className="nav-item border-right border-secondary">
            <a className="nav-link text-body small" href="#">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body small" href="#">Login</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="col-lg-3 text-right d-none d-md-block">
      <nav className="navbar navbar-expand-sm bg-dark p-0">
        <ul className="navbar-nav ml-auto mr-n2">
          <li className="nav-item">
            <a className="nav-link text-body" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body" href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body" href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body" href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div className="row align-items-center bg-white py-3 px-lg-5">
    <div className="col-lg-4">
      <a href="index.html" className="navbar-brand p-0 d-none d-lg-block">
        <h1 className="m-0 display-4 text-uppercase text-primary">
          News<span className="text-secondary font-weight-normal">Zone</span>
        </h1>
      </a>
    </div>
    <div className="col-lg-8 text-center text-lg-right">
      <a href="https://htmlcodex.com">
        <img className="img-fluid" src={Adbanner} alt="" />
      </a>
    </div>
  </div>
</div>
<Nav/>
</>
  )
}

export default Header