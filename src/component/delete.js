import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function DeleteTour(){
    const {id} = useParams()
    const [tour, setTour] =useState({})
    const navigate = useNavigate();
    useEffect(() =>{
        axios.get(`http://localhost:3000/tours/${id}`)
            .then(response =>{
                setTour(response.data)
            })
            .catch(error=>{
                console.log(error);
            });
    }, [id]);

    const handleDelete = () => {
        axios.delete(`http://localhost:3000/tours/${id}`)
            .then(()=>{
                navigate("/")
            })
            .catch(error => {
                console.log(error);
            })
    };
    return(
        <div>
            <h1>Delete tour</h1>
            <div>
                <label htmlFor="name">Name:</label>
                <h5>{tour.title}</h5>
            </div>
            <div>
                <label htmlFor="age">Price:</label>
                <h5>{tour.price}</h5>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <h5>{tour.description}</h5>
            </div>
            <button onClick={()=>{handleDelete()}}>Delete tour</button>
            <button><Link to={"/"}>Back to list tour</Link></button>
        </div>
    )
}