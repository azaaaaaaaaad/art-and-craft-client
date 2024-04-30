import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const ProductDetails = () => {
    const { id } = useParams();
    console.log(id);
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://art-server-nine.vercel.app/addCraftItems/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                console.log(data);
            })
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        const image = form.image.value;
        const itemName = form.itemName.value;
        const subcategoryName = form.subcategoryName.value;
        const shortDescription = form.shortDescription.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const email = form.email.value;
        const name = form.name.value;

        const updateInfo = { image, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, email, name }
        console.log(updateInfo);

        //update data to server
        fetch(`https://art-server-nine.vercel.app/addCraftItems/${id}`,{
            method: "PUT",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(updateInfo)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    icon: "success",
                    title: "Craft item has been added",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
        
    }


    return (
        <div>
            <h2 className="text-2xl font-semibold text-center">Product Details of: {product.itemName}</h2>
            <form onSubmit={handleUpdate}>
                <div className="space-y-4 text-center mt-6">
                    <div>
                        <label>Image URL:</label>
                        <input required defaultValue={product.image} className="border rounded" type="text" name="image" placeholder="image url" />
                    </div>
                    <div>
                        <label>Item Name:</label>
                        <input required defaultValue={product.itemName} className="border rounded" type="text" name="itemName" placeholder="item name" />
                    </div>
                    <div>
                        <label>Subcategory Name:</label>
                        <input required defaultValue={product.subcategoryName} className="border rounded" type="text" name="subcategoryName" placeholder="subcategory name" />
                    </div>
                    <div>
                        <label>Short Description:</label>
                        <input required defaultValue={product.shortDescription} className="border rounded" name="shortDescription" placeholder="short description" />
                    </div>
                    <div>
                        <label>Price:</label>
                        <input required defaultValue={product.price} className="border rounded" type="text" name="price" placeholder="price" />
                    </div>
                    <div>
                        <label>Rating:</label>
                        <input required defaultValue={product.rating} className="border rounded" type="text" name="rating" placeholder="rating" />
                    </div>
                    <div>
                        <label>Customization:</label>
                        <select required defaultValue={product.customization} className="border rounded" name="customization">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        <label>Processing Time:</label>
                        <input required defaultValue={product.processingTime} className="border rounded" type="text" name="processingTime" placeholder="processing time" />
                    </div>
                    <div>
                        <label>Stock Status:</label>
                        <select required defaultValue={product.stockStatus} className="border rounded" name="stockStatus" >
                            <option value="In stock">In stock</option>
                            <option value="Made to Order">Made to Order</option>
                        </select>
                    </div>
                    <div>
                        <label>User Email:</label>
                        <input required defaultValue={product.email} className="border rounded" type="email" name="email" placeholder="email" />
                    </div>
                    <div>
                        <label>User Name:</label>
                        <input required defaultValue={product.name} className="border rounded" type="text" name="name" placeholder="full name" />
                    </div>
                    <button className="btn btn-active" type="submit">Update Craft</button>
                </div>
            </form>
        </div>
    );
};

export default ProductDetails;