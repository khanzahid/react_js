import axios from "axios";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../common/breadcrumb";
import Loader from "../common/loader";

export default function Gallery() {
  const [isLoading, setIsLoading] = useState(false);
  const baseUrl = "https://popcornlady.injury-lawyers-attorney.com/";
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const url = baseUrl + "api/gallery";
    axios
      .get(url)
      .then((response) => {
        setGallery(response.data.images);
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
      <Breadcrumb pageTitle="Gallery" />
      {/* // <!-- Page Content start --> */}
      <div class="pageContnet-wrap">
        <div class="gallery-wrap">
          <div class="container">
            <div class="row">
              {gallery
                ? gallery.map((gitems, index) => (
                    <div class="col-lg-4 col-md-6">
                      <div class="gallerybox">
                        <div class="galleryImg">
                          <img
                            src={
                              baseUrl + "uploads/gallery/3/" + gitems.imageUrl
                            }
                            alt=""
                          />
                          <div class="portfolio-overley">
                            <div class="content">
                              <a
                                href={
                                  baseUrl +
                                  "uploads/gallery/3/" +
                                  gitems.imageUrl
                                }
                                class="image-popup image-link"
                              >
                                <img src="front/images/plus_icon.png" alt="" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Content End --> */}
    </>
  );
}
