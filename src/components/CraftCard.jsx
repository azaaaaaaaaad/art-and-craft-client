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
            {/* <div className="card lg:card-side bg-base-100 shadow-xl">
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
            </div> */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
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


// https://i.ibb.co/PGmHn4X/e2b5512729b6596f9fdad9f7ee0ea7049eb39fbb.jpg
// https://i.ibb.co/FV5Ybgg/very-large-sitting-proud-lion-gatepost-statue-her13-proud-lion-81102.jpg
// https://i.ibb.co/D7cxxT5/lion-aslan-metal-sculpture-selcuk-y-lmaz-1.jpg
// https://i.ibb.co/L8wRNyx/492ca3bd2dbb1cd94317456eceb12233.jpg
// https://i.ibb.co/hYF4ZcW/5f47f451008aa1f1fe17f73a2c.jpg
// https://i.ibb.co/86VV2KZ/5591594cc1a6520a314059bdd6fe7e1d.jpg