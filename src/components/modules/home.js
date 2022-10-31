import React, { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import axios from "axios";
import Loader from "../common/loader";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Home() {
  const baseUrl=process.env.REACT_APP_API_URL;
  const [isLoading, setIsLoading] = useState(false);
  const options={
    loop:true,
    margin:30,
    items:4,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
      nav:true,
    dots:false,
      responsive:{ 0:{items:1},560:{ items:2},767:{items:3},992:{items:1}
      }
  };
  const [sliders, setSliders] = useState([]);
  const [aboutUs, setAboutUs] = useState({});
  const [services, setServices] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const url = baseUrl + "api/home";
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        // handle Success
        setSliders(response.data.home_slider);
        console.log(response.data);
        setAboutUs(response.data.about_us);
        setServices(response.data.services);
        setEvents(response.data.events);
        setIsLoading(false);
      })
      .catch((error) => {
        // handle Error
        setIsLoading(false);
        console.log("Error:", error);
      });
    // When componet load
    // When component unload
    // When anything given in paramenter is changed
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />

      {/* <!-- slider start --> */}
    
      <div class="tp-banner-container">
        <div class="tp-banner">
          <ul>
              <OwlCarousel className='owl-theme' {...options}>
                  {sliders
                      ? sliders.map((item, index) => (
                      <li key={index + 1} class='item'>
                        <img
                          alt={item.heading}
                          src={baseUrl+'uploads/module/slider/'+item.featured_img}
                          data-lazyload={baseUrl+'uploads/module/slider/'+item.featured_img}
                        />
                      </li>
                    ))
                  : ""}
              </OwlCarousel>;
          </ul>
        </div>
      </div>

      {/* <!-- slider end -->  */}

      {/* <!-- About start --> */}
      <div class="about-wrap">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="left_sec">
                <div class="aboutImg">
                  <img src={baseUrl+'uploads/widgets/'+aboutUs.featured_image} />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about_left">
                <div class="title">
                  <p>{aboutUs.heading}</p>
                  <h1>{aboutUs.additional_field_1}</h1>
                </div>
                <p>{aboutUs.content}</p>
                <div class="readmore">
                  <Link to="/about">{aboutUs.additional_field_2}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Services start --> */}
      <div class="services-wrap">
        <div class="container">
          <div class="title text-center">
            <h1>Our Services</h1>
            <p>
              We cover all of the bases when it comes to FUN, FOOD, and PARTIES!
            </p>
          </div>
          <div class="row">
            {services
              ? services.map((item, index) => (
                  <div class="col-lg-4 col-md-6" key={index + 1}>
                    <div class="service_box">
                      <div class="service_info">
                        <div class="service_img">
                          <img
                            src={
                              baseUrl +
                              "uploads/module/services/" +
                              item.featured_img
                            }
                            alt="Caterings"
                          />
                        </div>
                        <h3>
                          <a href="#">{item.heading}</a>
                        </h3>
                        <p>{item.content}</p>
                        <div class="readmore">
                          <Link to="/catering">Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
          {/* <!-- event pop start --> */}
          <div class="evnet-wrap">
            <div class="title">
              <h1>Let's Make Your Event Pop!</h1>
              <span>Select An Event</span>
            </div>
            <div class="row">
              {events ? events.map((eventitem, index) => (

                <div class="col-lg-4 col-md-6">
                  <div class="gallery-img">
                    <Link to="/catering">
                      <img
                        src={baseUrl+'uploads/module/events/'+eventitem.featured_img}
                        alt={eventitem.heading}
                      />
                      <div class="event_hover">
                        <h3>{eventitem.heading}</h3>
                      </div>
                    </Link>
                  </div>
                </div>
                )) : ""}  


              <div class="readmore">
                <Link to="/catering">VIEW ALL EVENTS</Link>
              </div>
            </div>
          </div>
          {/* <!-- event pop End --> */}
        </div>
      </div>
      {/* <!-- Services End --> */}

      {/* <!-- place order start --> */}
      <div class="call_wrap">
        <div class="container">
          <div class="call_bx">
            <h1>Let us cater your next event!</h1>
            <div class="d-flex flex-wrap">
              <div class="readmore">
                <Link to="/contact">Get A Quote!</Link>
              </div>
              <div class="conInfo phonewrp">
                <a href="tel:678-722-3202">
                  {" "}
                  <i class="fas fa-mobile-alt"></i> 678-722-3202
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- place order end --> */}
    </>
  );
}
