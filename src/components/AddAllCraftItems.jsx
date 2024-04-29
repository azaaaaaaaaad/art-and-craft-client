import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from 'sweetalert2'


const AddAllCraftItems = () => {

    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        image: "",
        itemName: "",
        subcategoryName: "",
        shortDescription: "",
        price: "",
        rating: "",
        customization: "",
        processingTime: "",
        stockStatus: "",
        email: "",
        name: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to server
        console.log(formData);
        // Reset form data
        setFormData({
            image: '',
            itemName: '',
            subcategoryName: '',
            shortDescription: '',
            price: '',
            rating: '',
            customization: '',
            processingTime: '',
            stockStatus: '',
            email: '',
            name: ''
        });

        //send data to server
        fetch(`https://art-server-nine.vercel.app/addCraftItems`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Craft item has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    };
    return (
        <div>
            <h2 className="text-center text-2xl font-semibold">Add Craft Items</h2>
            <form onSubmit={handleSubmit}>
                <div className="space-y-4 text-center mt-6">
                    <div>
                        <label>Image URL:</label>
                        <input required className="border rounded" type="text" name="image" value={formData.image} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Item Name:</label>
                        <input required className="border rounded" type="text" name="itemName" value={formData.itemName} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Subcategory Name:</label>
                        <input required className="border rounded" type="text" name="subcategoryName" value={formData.subcategoryName} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Short Description:</label>
                        <input required className="border rounded" name="shortDescription" value={formData.shortDescription} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Price:</label>
                        <input required className="border rounded" type="text" name="price" value={formData.price} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Rating:</label>
                        <input required className="border rounded" type="text" name="rating" value={formData.rating} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Customization:</label>
                        <select required className="border rounded" name="customization" value={formData.customization} onChange={handleChange}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        <label>Processing Time:</label>
                        <input required className="border rounded" type="text" name="processingTime" value={formData.processingTime} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Stock Status:</label>
                        <select required className="border rounded" name="stockStatus" value={formData.stockStatus} onChange={handleChange}>
                            <option value="In stock">In stock</option>
                            <option value="Made to Order">Made to Order</option>
                        </select>
                    </div>
                    <div>
                        <label>User Email:</label>
                        <input required defaultValue={user.email} className="border rounded" type="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label>User Name:</label>
                        <input required defaultValue={user.displayName} className="border rounded" type="text" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <button className="btn" type="submit">Add Craft</button>
                </div>
            </form>
        </div>
    );
};

export default AddAllCraftItems;