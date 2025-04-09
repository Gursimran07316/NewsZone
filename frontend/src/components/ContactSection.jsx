import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
  return (
    <div className="container-fluid bg-dark pt-5 px-sm-3 px-md-5 mt-5">
      <div className="row py-4">

        {/* Get In Touch */}
        <div className="col-lg-3 col-md-6 mb-5">
          <h5 className="mb-4 text-white text-uppercase font-weight-bold">Get In Touch</h5>
          <p className="font-weight-medium">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />123 Street, New York, USA
          </p>
          <p className="font-weight-medium">
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />+012 345 67890
          </p>
          <p className="font-weight-medium">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />info@example.com
          </p>
          <h6 className="mt-4 mb-3 text-white text-uppercase font-weight-bold">Follow Us</h6>
          <div className="d-flex justify-content-start">
            <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a className="btn btn-lg btn-secondary btn-lg-square" href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>

        {/* Popular News */}
        <div className="col-lg-3 col-md-6 mb-5">
          <h5 className="mb-4 text-white text-uppercase font-weight-bold">Popular News</h5>
          {[1, 2, 3].map((item, index) => (
            <div className="mb-3" key={index}>
              <div className="mb-2">
                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="#">Business</a>
                <a className="text-body" href="#"><small>Jan 01, 2045</small></a>
              </div>
              <a className="small text-body text-uppercase font-weight-medium" href="#">
                Lorem ipsum dolor sit amet elit. Proin vitae porta diam...
              </a>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="col-lg-3 col-md-6 mb-5">
          <h5 className="mb-4 text-white text-uppercase font-weight-bold">Categories</h5>
          <div className="m-n1">
            {[
              "Politics", "Business", "Corporate", "Business", "Health", "Education",
              "Science", "Business", "Foods", "Entertainment", "Travel", "Lifestyle",
              "Politics", "Business", "Corporate", "Business", "Health", "Education",
              "Science", "Business", "Foods"
            ].map((category, index) => (
              <a href="#" className="btn btn-sm btn-secondary m-1" key={index}>{category}</a>
            ))}
          </div>
        </div>

        {/* Flickr Photos */}
        <div className="col-lg-3 col-md-6 mb-5">
          <h5 className="mb-4 text-white text-uppercase font-weight-bold">Flickr Photos</h5>
          <div className="row">
            {[1, 2, 3, 4, 5, 1].map((num, index) => (
              <div className="col-4 mb-3" key={index}>
                <a href="#"><img className="w-100" src={`/src/assets/news-110x110-${num}.jpg`} alt={`Flickr ${num}`} /></a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;
