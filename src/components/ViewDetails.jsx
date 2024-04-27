import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";


const ViewDetails = () => {
    const details = useLoaderData();

    const {
        _id,
        image,
        item_name,
        subcategory_name,
        short_description,
        price,
        rating,
        customization,
        processing_time,
        stock_status } = details;


    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item_name}</h2>
                    <p>Sub-Category: {subcategory_name}</p>
                    <hr />
                    <p>Price: {price}$</p>
                    <div className="flex items-center">
                        <p>Rating: {rating}</p>
                        <FaStar></FaStar>
                    </div>
                    <p>Description: {short_description}</p>
                    <hr />
                    <p>Processing-time: {processing_time}</p>
                    <p>Stock: {stock_status}</p>
                    <div className="card-actions justify-end">
                        <Link to={'/'}><button className="btn btn-active">Go Back</button></Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ViewDetails;

