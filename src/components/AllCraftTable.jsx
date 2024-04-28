import { Link } from "react-router-dom";


const AllCraftTable = ({ craft }) => {

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
        userEmail,
        userName } = craft

    return (
        // <div className="card w-96 bg-base-100 shadow-xl">
        //     <figure className="px-10 pt-10">
        //         <img src={image} alt="Shoes" className="rounded-xl" />
        //     </figure>
        //     <div className="card-body items-center text-center">
        //         <h2 className="card-title">{itemName}</h2>
        //         <p>{subcategoryName}</p>
        //         <p>{shortDescription}</p>
        //         <p>{price}</p>
        //         <div className="card-actions justify-end">
        //                 <Link to={`/viewDetails/${_id}`}><button className="btn btn-active">View Details</button></Link>
        //             </div>
        //     </div>
        // </div>
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Sub Category Name</th>
                            <th>Price</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{itemName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{subcategoryName}</td>
                            <td>{price}$</td>
                            <th>
                            <Link to={`/viewDetailsTWO/${_id}`}><button className="btn btn-active">View Details</button></Link>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCraftTable;