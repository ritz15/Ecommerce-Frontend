import axios from "axios";
import React, { useEffect,  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";
import {toast} from 'react-toastify';

const ViewallProducts = () => {
     const { items: data, status } = useSelector((state) => state.products);
  const [product, setProduct] = useState([]);
  const URL  = "http://localhost:8086/api/v2/delete/";

 const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteProduct = async (productId) => {
   
    const response = await axios.delete(URL + productId)
    .then((response) => {
        
        ViewallProducts();
        console.log(response)
         toast.success("deleted Successfully", {
          position: "top-center",
        });
        window.location.reload(false);
      
      })
      .catch((error) => {
        console.log(error);
      });
      
  };

  

  return (
    <div className="container">
      <AdminHeaders>
        <h2>Products</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/products/create-product")}
        >
          Create
        </PrimaryButton>
        </AdminHeaders>


      <table className="table table-bordered table-striped">
        <thead>
          <th>Product Id</th>
          <th>Product Type</th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Rating</th>
          <th>Review</th>
          <th>Price</th>
          <th>Description</th>
          <th>Specification</th>
          <th>Actions</th>
        </thead>
        <tbody>
        { data && 
           data.map( (product) =>(
            <tr key={product.id}>
            <td> {product.productId}</td>
            <td> {product.productType}</td>
            <td> {product.productName}</td>
            <td> {product.category}</td>
            <td> {product.rating}</td>
            <td> {product.review}</td>
            <td> {product.price}</td>
             <td> {product.description}</td>
             <td> {product.specification}</td>
            <td>
            <Link className="btn btn-info" to={`/admin/products/edit/${product.productId}`}>Update</Link>
           
            <button className="btn btn-danger"
           
            style={{ marginLeft: "10px" }}
              onClick={() => deleteProduct(product.productId)}
            >Delete
            </button>
           
           


            </td>
            </tr>
           ))}
        
        </tbody>
      </table>
      <Link to="/admin" className="btn btn-primary mb-2">Back</Link>
    </div>
  );
};

export default ViewallProducts;