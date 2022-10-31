import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../common/breadcrumb";
import Loader from "../common/loader";

export default function Catering() {
  const [isLoading, setIsLoading] = useState(false);
  const baseUrl = "https://popcornlady.injury-lawyers-attorney.com/";
  const [catering, setCatering] = useState({});
  const [events, setEvents] = useState([]);
  const [othercatering, setOthercatering] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const url = baseUrl + "api/catering";
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data.catering);
        setCatering(response.data.catering);
        setEvents(response.data.events);
        setOthercatering(response.data.other_catering);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      <Breadcrumb pageTitle="Catering" />

      <div class="pageContnet-wrap">
        <div class="container">
          {catering.content}
          <h3 class="title_center">{catering.additional_field_1}</h3>
          <div class="item_list row">
            {events
              ? events.map((eventItem, index) => (
                  <div class="col-lg-3 col-md-6">
                    <div class="itembx">
                      <div class="itemImg">
                        <img
                          src={
                            baseUrl +
                            "uploads/module/caterings/" +
                            eventItem.featured_img
                          }
                          alt={eventItem.heading}
                        />
                      </div>
                      <h3 ><Link to={"/"+eventItem.post_slug} style={{textDecoration:'none'}}>{eventItem.heading}</Link></h3>
                      {eventItem.content}
                    </div>
                  </div>
                ))
              : ""}
          </div>
          <div class="readmore title_center accordion">
            <a href="#">View All Items</a>
          </div>
          <div class="panel mainpanel">
            <div class="row accordn-panel">
              <h2>CATERED EVENTS AVAILABLE:</h2>
              {othercatering
                ? othercatering.map((items, index) => (
                    <div class="col-lg-6 col-md-6">
                      <div class="panel-lefttxt">
                        <h3>{items.heading}</h3>
                        {items.content}
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </div>

          <div class="callbar-old cateringcall-bg">
            <img
              src={
                baseUrl + "uploads/module/caterings/catering-bottom-banner.jpg"
              }
              usemap="#image-map"
              alt="bottom Catering banner"
            />

            <div class="readmore title_center">
              <a href="get-a-quote.html">Get A Quote!</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
