import { Link } from "react-router-dom";


const CraftCard = ({ craft }) => {

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
        stock_status } = craft;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item_name}</h2>
                    <p>{short_description}</p>
                    <p>Rating: {rating}</p>
                    <p>Stock: {stock_status}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/viewDetails/${_id}`}><button className="btn btn-active">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;