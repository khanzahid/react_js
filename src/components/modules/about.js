import React, {useState,useEffect} from 'react'
import axios from 'axios';
import Breadcrumb from '../common/breadcrumb';
import Loader from "../common/loader";

export default function About() {
    const [isLoading, setIsLoading] = useState(false);
    const baseUrl=process.env.REACT_APP_API_URL;
    const [about, setAbout] = useState([]);

    useEffect((response) => {
        setIsLoading(true);
        const url = baseUrl+'api/about';
        axios.get(url).then( (response)=>{
            setAbout(response.data.about);
            setIsLoading(false);
        }).catch( (error)=>{
            setIsLoading(false);
            console.log("Errors:", error);
        });
    }, [])
    

    return (
        <>
            {/* <!-- About --> */}

            <Loader isLoading={isLoading} />
            <Breadcrumb pageTitle="About Us"/>

            <div class="about-wrap">
                <div class="container">
                <div class="row" >
                        <div class="col-lg-6">
                            <div class="left_sec">
                                <div class="aboutImg"><img src={baseUrl+'uploads/module/cms/'+about.featured_img} alt="About" /></div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about_left">
                                <div class="title">
                                    <p>{about.heading}</p>
                                    <h1>{about.additional_field_1}</h1>
                                </div>
                                <p>{about.content}</p>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
            {/* <!--About End-->  */}
        </>

    )
}