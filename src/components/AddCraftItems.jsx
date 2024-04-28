import { useState } from "react";
import Swal from 'sweetalert2'


const AddCraftItems = () => {
    const [formData, setFormData] = useState({
        image: '',
        item_name: '',
        subcategory_name: '',
        short_description: '',
        price: '',
        rating: '',
        customization: '',
        processing_time: '',
        stock_status: ''
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
        // You can handle form submission logic here
        console.log(formData);
        // Reset form data
        setFormData({
            image: '',
            item_name: '',
            subcategory_name: '',
            short_description: '',
            price: '',
            rating: '',
            customization: '',
            processing_time: '',
            stock_status: ''
        });

        //send data to server
        fetch(`https://art-server-nine.vercel.app/crafts`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
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
        <div >
            <h2 className="text-center text-2xl font-semibold">Add Craft Items</h2>
            <form onSubmit={handleSubmit}>
                <div className="space-y-4 text-center mt-6">
                    <div>
                        <label>Image URL:</label>
                        <input required className="border rounded" type="text" name="image" value={formData.image} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Item Name:</label>
                        <input required className="border rounded" type="text" name="item_name" value={formData.item_name} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Subcategory Name:</label>
                        <input required className="border rounded" type="text" name="subcategory_name" value={formData.subcategory_name} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Short Description:</label>
                        <input required className="border rounded" name="short_description" value={formData.short_description} onChange={handleChange} />
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
                        <input required className="border rounded" type="text" name="processing_time" value={formData.processing_time} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Stock Status:</label>
                        <select required className="border rounded" name="stock_status" value={formData.stock_status} onChange={handleChange}>
                            <option value="in_stock">In Stock</option>
                            <option value="made_to_order">Made to Order</option>
                        </select>
                    </div>
                    <button className="btn" type="submit">Add Craft Items</button>
                </div>
            </form>
        </div>
    );
};

export default AddCraftItems;