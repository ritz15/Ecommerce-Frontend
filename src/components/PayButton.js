import { useSelector } from "react-redux";
import getStripe from "./getStripe";
import ProgressButton from 'react-progress-button'
import { useRef, useState } from "react";

const PayButton = ({ cartItems }) => {

  

 async function handleCheckout() {

    
    const stripe = await getStripe();

      const email = "ritikahangargi15@gmail.com"
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1Ls5lKKNvbgdSY1hyHJ5snNr",
          quantity: 5,
        },
      ],
      
      mode: 'payment',
      successUrl: `http://localhost:3000/checkout-success`,
      cancelUrl: `http://localhost:3000/cancel`,
      customerEmail: email,
      
 })
    
    }

  return <h6 onClick={handleCheckout}>Continue </h6>;
  // return <button onClick={() => OrderRef.current.AddOrder()}>Payment</button>;
 
  
}
  

 

export default PayButton;
