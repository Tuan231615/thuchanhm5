import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListTours() {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/tours")
            .then((response) => {
                setTours(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div>
            <h1>List tours</h1>
            <Link to={"/Create"}>Create new Tour</Link>
            <table border={1}>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                <tbody>
                {tours.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td><Link to={`/view/${item.id}`}>{item.title}</Link></td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <tr>
                            <td>
                                <button><Link to={`/edit/${item.id}`}>Edit</Link></button>
                            </td>
                            <td>
                                <button><Link to={`/delete/${item.id}`}>Delete</Link></button>
                            </td>

                            </tr>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}