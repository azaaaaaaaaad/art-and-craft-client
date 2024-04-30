import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyArtCraft = () => {
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState([]);
    const [control, setControl] = useState(false);
    const [customizationFilter, setCustomizationFilter] = useState('all'); 

    useEffect(() => {
        fetch(`https://art-server-nine.vercel.app/myArtAndCraft/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            });
    }, [user, control]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://art-server-nine.vercel.app/addCraftItems/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            );
                            setControl(!control);
                        }
                    });
            }
        });
    };

    const filterItems = () => {
        if (customizationFilter === 'all') {
            return item;
        } else {
            return item.filter(p => p.customization === customizationFilter);
        }
    };

    return (
        <div>
            <div className="mb-4">
                <label htmlFor="customizationFilter" className="block text-sm font-medium text-gray-700">Customization:</label>
                <select
                    id="customizationFilter"
                    name="customizationFilter"
                    className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={customizationFilter}
                    onChange={e => setCustomizationFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <h2 className='text-2xl font-semibold text-center'>Craft Item of: {user.email}</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    filterItems().map(p => (
                        <div key={p.id}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={p.image} alt={p.itemName} />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{p.itemName}</h2>
                                    <p>Price: {p.price}$</p>
                                    <p>Rating: {p.rating}</p>
                                    <hr />
                                    <p>Customization: {p.customization}</p>
                                    <p>Stock Status: {p.stockStatus}</p>
                                    <div className="card-actions">
                                        <Link to={`/myArtAndCraft/${p._id}`}><button className="btn btn-active">Update</button></Link>
                                        <button onClick={() => handleDelete(p._id)} className="btn btn-active">Delete</button>
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
