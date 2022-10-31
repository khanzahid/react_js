import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    // <!--Footer Start-->
    <>
      <div class="footer_wrap">
        <div class="footer-text">
          <div class="container">
            <div class="row">
              <div class="col-lg-3">
                <div class="footer-logo-box">
                  <div class="footer_logo"><a href="#">
                    <img src="assets/images/popcorn-logo.png" alt="footer logo" />
                  </a>
                  </div>
                  <ul class="unorderList social_media">
                    <li><a target="_blank" title="facebook" href="https://www.facebook.com/ThePopcornLady"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                     <li><a target="_blank" title="instagram" href="https://www.instagram.com/popcornladyatlanta/"><i class="fab fa-instagram" aria-hidden="true"></i></a></li> 
                     <li><a target="_blank" title="Twitter" href="https://twitter.com/PopcornLadyATL"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="quick-links pdl-2">
                      <div class="ex-small-heading heading-bg">
                        <h2>Services</h2>
                      </div>
                      <ul>
                        <li><Link to="/catering">Caterings</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="quick-links pdl-2">
                      <div class="ex-small-heading heading-bg">
                        <h2>Rentals</h2>
                      </div>
                      <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p>Our mission is to bring the atmosphere of fun by bringing authentic carts and machines as well as serving fresh & delicious foods and treats.</p>
              </div>
              <div class="col-lg-4">
                <div class="quick-links footer-info">
                  <div class="ex-small-heading heading-bg">
                    <h2>Quick Links</h2>
                  </div>
                  <div class="call-us"><span>Address</span>
                    <a href="">1700 Marietta Blvd NW, Atlanta, GA 30318</a>
                  </div>
                  <p class="call-us phone">
                    <span>Call Us Now</span>
                    <a href="">678-722-3202</a>
                  </p>
                  <div class="call-us email"><span>Email Us</span><a href="">info@popcornlady.com</a> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copy-right">
        <div class="container">
          <div class="row justify-content-md-between justify-content-center">
            <div class="col-auto">
              <p>Copyright © 2022 The Popcorn Lady. All Rights Reserved.</p>
            </div>
            <div class="col-auto credit">
              <p>Site Credits: <a href="https://www.medialinkers.com/" target="_blank">MediaLinkers</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
    // <!--Footer end--> 
  )
}