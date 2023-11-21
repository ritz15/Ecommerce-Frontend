
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addToCart } from "../slices/cartSlice";
import Footer from "../components/Footer"
// import { useGetAllProductsQuery } from "../slices/productsApi";


const Home = () => {
  const { items: data, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // const { data, error, isLoading } = useGetAllProductsQuery();

    const authorized = JSON.parse(localStorage.getItem('user'));
      


  const Unauthorized  = () =>{

    toast.error("Please login first", {
      position: "top-center"
    })
    setTimeout(() => {
      window.location.href = "http://localhost:3000/login";
}, 1000);
    
  }



  const handleAddToCart = (product) => {

    
    if(authorized == null){
      Unauthorized();
    }
    else 
    {dispatch(addToCart(product));
    navigate("/cart");}
    
  };

  return (
 <>
    <div className="home-container">
      {status === "success" ? (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data &&
              data?.map((product) => (
                <div key={product.productId} className="product">
                  <h3>{product.productName}</h3>
                  <img src={product.image} alt={product.name} />
                  <div className="details">
                    <span>{product.category}</span>
                    <span className="price">${product.price}</span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
          </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    
    </div>
    <Footer />
    </>
  );
};

export default Home;
