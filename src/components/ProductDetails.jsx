import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";


const ProductDetails = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams();
    console.log(id);
    const [product, setProduct] = useState({})


    useEffect(() => {
        fetch(`https://art-server-nine.vercel.app/addCraftItems/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                console.log(data);


            })
    }, [id])

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

    const handleUpdate = (e) => {
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

        //update data to server
        fetch(`https://art-server-nine.vercel.app/addCraftItems/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Craft item has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    };




    return (
        <div>
            ProductDetails
            <form onSubmit={handleUpdate}>
                <div className="space-y-4 text-center mt-6">
                    <div>
                        <label>Image URL:</label>
                        <input  className="border rounded" type="text" name="image" value={formData.image} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Item Name:</label>
                        <input  className="border rounded" type="text" name="itemName" value={formData.itemName} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Subcategory Name:</label>
                        <input  className="border rounded" type="text" name="subcategoryName" value={formData.subcategoryName} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Short Description:</label>
                        <input  className="border rounded" name="shortDescription" value={formData.shortDescription} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Price:</label>
                        <input  className="border rounded" type="text" name="price" value={formData.price} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Rating:</label>
                        <input  className="border rounded" type="text" name="rating" value={formData.rating} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Customization:</label>
                        <select  className="border rounded" name="customization" value={formData.customization} onChange={handleChange}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        <label>Processing Time:</label>
                        <input  className="border rounded" type="text" name="processingTime" value={formData.processingTime} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Stock Status:</label>
                        <select  className="border rounded" name="stockStatus" value={formData.stockStatus} onChange={handleChange}>
                            <option value="In stock">In stock</option>
                            <option value="Made to Order">Made to Order</option>
                        </select>
                    </div>
                    <div>
                        <label>User Email:</label>
                        <input  className="border rounded" type="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label>User Name:</label>
                        <input className="border rounded" type="text" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <button className="btn" type="submit">Update Craft</button>
                </div>
            </form>
        </div>
    );
};

export default ProductDetails;