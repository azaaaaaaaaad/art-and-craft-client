import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";


const ViewDetailsTWO = () => {
    const details = useLoaderData();

    const {
        _id,
        image,
        itemName,
        subcategoryName,
        shortDescription,
        price,
        rating,
        customization,
        processingTime,
        stockStatus,
        email,
        name
    } = details;


    return (
        <div>
            <Fade delay={1000} direction="left">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{itemName}</h2>
                    <p>Sub-Category: {subcategoryName}</p>
                    <hr />
                    <p>Price: {price}$</p>
                    <div className="flex items-center">
                        <p>Rating: {rating}</p>
                        <FaStar></FaStar>
                    </div>
                    <p>Description: {shortDescription}</p>
                    <hr />
                    <p>Processing-time: {processingTime}</p>
                    <p>Stock: {stockStatus}</p>
                    {/* <p>{email}</p>
                    <p>{name}</p> */}
                    <div className="card-actions justify-end">
                        <Link to={'/'}><button className="btn btn-active">Go Back</button></Link>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    );
};

export default ViewDetailsTWO;

