import React from 'react';
import {
  Link, NavLink
} from "react-router-dom";

export default function Header() {
  const baseUrl=process.env.REACT_APP_BASE_URL;
  return (
    <>
      {/* // <!-- Header start --> */}
      <div class="header-wrap   main_home_header ">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 navbar-light">
              <div class="logo"><a href="index.html"><img src={baseUrl+"assets/images/popcorn-logo.png"} alt="logo" /></a></div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
            </div>
            <div class="col-lg-9">
              <div class="header-info">
                <div class="header_left">
                  <div class="conInfo phonewrp emailInfo"><span>Let us cater your next event!</span> <a href="mailto:info@popcornlady.com"></a></div>
                  <div class="conInfo phonewrp"><span></span> <a href="tel:678-722-3202"><i class="fas fa-phone-alt"></i> 678-722-3202</a></div>
                  <div class="topbarbtn"><Link to="/contact" class="btn btn-sm btn-primary">Get A Quote!</Link></div>
                </div>
                <ul class="unorderList social_media">
                  <li><a target="_blank" title="facebook" href="https://www.facebook.com/ThePopcornLady"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li> <li><a target="_blank" title="instagram" href="https://www.instagram.com/popcornladyatlanta/"><i class="fab fa-instagram" aria-hidden="true"></i></a></li> <li><a target="_blank" title="Twitter" href="https://twitter.com/PopcornLadyATL"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                </ul>
              </div>

              <nav class="navbar navbar-expand-lg navbar-light">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <button class="close-toggler" type="button" data-toggle="offcanvas"> <span><i class="fas fa-times-circle" aria-hidden="true"></i></span> </button>
                  <ul class="navbar-nav  mb-2 mb-lg-0 me-auto">
                 
                    <li class="nav-item "><Link class="nav-link " to="/" >Home </Link></li>
                     <li class="nav-item "><Link class="nav-link " to="/about" >About </Link></li>
                      <li class="nav-item "><Link class="nav-link " to="/catering" >Caterings </Link></li> 
                       <li class="nav-item "><Link class="nav-link " to="/gallery" >Gallery </Link></li> 
                       <li class="nav-item "><Link class="nav-link " to="/contact" >Contact </Link></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}