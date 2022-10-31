import React, { useState } from "react";
import Breadcrumb from "../common/breadcrumb";
import { useFormik, useFormikContext } from "formik";
import { object, string } from "yup";
import Loader from "../common/loader";
import axios from "axios";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const baseUrl = "https://popcornlady.injury-lawyers-attorney.com/";

  const validationSchema = object({
    name: string().required("This field is required"),
    lname: string().required("This field is required"),
    email: string().email().required("This field is required"),
    phone: string().required("This field is required"),
    message: string().required("This field is required"),
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      lname: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      // values = it contains whole form object
      const apiUrl = baseUrl + "api/savedata";
      setIsLoading(true);
      axios
        .post(apiUrl, values)
        .then((response) => {
          // handle Success
          setIsLoading(false);
          if(response.data.status===true){
            alert(response.data.message);
            actions.setSubmitting(false);
            actions.resetForm();
          }
          else alert("An Error Occured");
        })
        .catch((error) => {
          // handle Error
          setIsLoading(false);
          console.log("Error:", error);
        });
    },
  });
  React.useEffect(() => {
    //   console.log(formik.values)
  }, [formik]);

  return (
    <>
      <Loader isLoading={isLoading} />
      <Breadcrumb pageTitle="Contact Us" />

      {/* <!-- Page Content start --> */}
      <div class="pageContnet-wrap contactWrap ">
        <div class="container">
          {/* <!-- row Start --> */}
          <div class="row">
            <div class="col-lg-7 col-md-6">
              <form method="post" action="#" onSubmit={formik.handleSubmit}>
                <input
                  type="hidden"
                  name="_token"
                  value="XDlIUkYOHdM2loPd1X9aF0NW4vuiE9o8iVUBlxVF"
                />{" "}
                <h2>Contact Us</h2>
                <p>We would love to hear from you!</p>
                <div class="row">
                  <div class="col-lg-6 col-md-12">
                    <div class="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control simple"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                      />
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {formik.errors.name}
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12">
                    <div class="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lname"
                        class="form-control simple"
                        value={formik.values.lname}
                        onChange={formik.handleChange}
                      />
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {formik.errors.lname}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-md-12">
                    <div class="form-group">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        class="form-control simple phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                      />
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {formik.errors.phone}
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12">
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        class="form-control simple"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {formik.errors.email}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <label>Message </label>
                      <textarea
                        name="message"
                        id="message"
                        class="form-control simple"
                        rows="3"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                      ></textarea>
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {formik.errors.message}
                      </span>
                    </div>
                  </div>
                </div>
                <br />
                <div class="form-group">
                  <button type="submit" class="submit_btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div class="col-lg-5 col-md-6">
              <div class="contact-info">
                <h2>
                  <strong>Get In Touch</strong>
                </h2>

                <div class="cn-info-detail">
                  <div class="cn-info-icon">
                    <i class="fas fa-home"></i>
                  </div>
                  <div class="cn-info-content">
                    <h4 class="cn-info-title">Reach Us</h4>
                    <p>1700 Marietta Blvd NW, Atlanta, GA 30318</p>
                  </div>
                </div>
                <div class="cn-info-detail">
                  <div class="cn-info-icon">
                    <i class="far fa-envelope"></i>
                  </div>
                  <div class="cn-info-content">
                    <h4 class="cn-info-title">Drop A Mail</h4>
                    <p>
                      <a href="mailto:info@popcornlady.com">
                        info@popcornlady.com
                      </a>
                    </p>
                  </div>
                </div>
                <div class="cn-info-detail">
                  <div class="cn-info-icon">
                    <i class="fas fa-mobile-alt"></i>
                  </div>
                  <div class="cn-info-content">
                    <h4 class="cn-info-title">Call Us</h4>
                    <p>
                      <a href="tel:678-722-3202">678-722-3202</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
      </div>
      {/* <!-- Page Content End --> */}
    </>
  );
}
