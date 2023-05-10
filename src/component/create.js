import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function CreateTour() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tour, setTour] = useState({
        title: '',
        price: '',
        description: '',

    });
    const handleChange = (event) => {
        setTour({
            ...tour,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/tours", tour)
            .then(response => {
                setTour({
                    title: "",
                    price: "",
                    description: ""
                })
            })
            .catch(error => {
                console.log(error);
            })
    };
    return(
        <div>
            <h1>Create tour</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Name</label>
                    <input type="text" id="title" name={"title"} value={tour.title} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="text" id="price" name={"price"} value={tour.price} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" name={"description"} value={tour.description} onChange={handleChange}/>
                </div>
                <button type="submit">Create</button>
                <button><Link to={"/"}>Back to list tour</Link></button>
            </form>
        </div>
    )
}