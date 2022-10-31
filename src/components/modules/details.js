import React, {useState,useEffect} from 'react'
import axios from 'axios';
import Breadcrumb from '../common/breadcrumb';
import Loader from "../common/loader";
import { useParams } from 'react-router-dom';

export default function Details() {
    const [isLoading, setIsLoading] = useState(false);
    const baseUrl=process.env.REACT_APP_API_URL;
    const [details, setDetails] = useState([]);
    const { slug } = useParams();

    useEffect(() => {
        setIsLoading(true);
        const url = baseUrl+'api/details/'+slug;
        axios.get(url).then( (response)=>{
            setDetails(response.data);
            setIsLoading(false);
        }).catch( (error)=>{
            setIsLoading(false);
            console.log("Errors:", error);
        });
    }, [])
    

    return (
        <>
            <Loader isLoading={isLoading} />
            <Breadcrumb pageTitle="Catering Details"/>
        </>

    )
}