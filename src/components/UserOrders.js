import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PayButton from './PayButton'
import{

  getTotals,

} from "../slices/cartSlice";
const NotFound = () => {

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);



console.log(cart)
  return (
    <>
     
      <div className="cart-container">



        <h3 className="total">Total</h3>


        {cart.cartItems &&
          cart.cartItems.map((cartItem) => (
            <div className="cart-item" key={cartItem.productId}>

              <div className="cart-product-price">${cartItem.price}</div>

              <div className="count">{cartItem.cartQuantity}</div>


              ${cartItem.price * cartItem.cartQuantity}

            </div>
          ))}
      </div><span>Subtotal</span><span className="amount">${cart.cartTotalAmount}</span></>
              
              

              
  );
};

export default NotFound;
