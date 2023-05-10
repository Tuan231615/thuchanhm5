import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function EditTour() {
    const {id} = useParams();
    const [tour, setTour] = useState({
        title: "",
        price: "",
        description: ""
    });
    useEffect(() => {
        axios.get(`http://localhost:3000/tours/${id}`)
            .then((response) => {
                setTour(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [id]);
    const handleChange = (event) => {
        setTour({
            ...tour,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = event => {
        event.preventDefault();
        axios.put(`http://localhost:3000/tours/${id}`, tour)
            .then((response) => {
                console.log("update tour successfully!");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div>
            <h1>Edit tour</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Name</label>
                    <input type="text" name="title" id="title" value={tour.title} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" id="price" value={tour.price} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" value={tour.description} onChange={handleChange}/>
                </div>
                <button type="submit">Update Tour</button>
                <button><Link to={"/"}>Back to list tour</Link></button>
            </form>
        </div>
    )
}