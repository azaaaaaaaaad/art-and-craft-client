import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';

const MyArtCraft = () => {

    const { user } = useContext(AuthContext)
    const [item, setItem] = useState([]);
    // console.log(user);
    useEffect(() => {
        fetch(`http://localhost:5000/myArtAndCraft/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
    }, [user])

    return (
        <div>
            <h2 className='text-2xl font-semibold text-center'>Craft Item of: {user.email}</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    item.map(p => (
                        <div key={p.id}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={p.image} />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{p.itemName}</h2>
                                    <p>Price: {p.price}$</p>
                                    <p>Rating: {p.rating}</p>
                                    <hr />
                                    <p>Customization: {p.customization}</p>
                                    <p>Stock Status: {p.stockStatus}</p>
                                    <div className="card-actions">
                                        <button className="btn btn-active">Update</button>
                                        <button className="btn btn-active">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyArtCraft;

// const [formData, setFormData] = useState({
//     image: "",
//     itemName: "",
//     subcategoryName: "",
//     shortDescription: "",
//     price: "",
//     rating: "",
//     customization: "",
//     processingTime: "",
//     stockStatus: "",
//     email: "",
//     name: ""
// });