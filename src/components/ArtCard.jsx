import { Link } from "react-router-dom";


const ArtCard = ({ category }) => {

    const {
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
        name, } = category

    return (
        <div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{itemName}</h2>
                        <p>{subcategoryName}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ArtCard;