import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

    export default  function  Views () {
        const {id}=useParams();
        const [tour,setTour]=useState({

        });
        useEffect(()=>{
            axios.get(`http://localhost:3000/tours/${id}`)
                .then(response=>{
                    setTour(response.data)
                })
        },[id])
        return(
            <div>
                <h1>View tour</h1>
                <div>
                    <label htmlFor="title">Name</label>
                    <h5>{tour.title}</h5>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <h5>{tour.price}</h5>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <h5>{tour.description}</h5>
                </div>
                <br/>
                <Link to={"/"}>List</Link>


            </div>
        )

    }
