import React, { useEffect, useState, FunctionComponent, forwardRef, useImperativeHandle } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Box, Button, Typography, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material';
import { TextField } from 'formik-mui';
import { Field, Form, Formik } from 'formik';
import PayButton from '../components/PayButton'
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import { ArrowRightSharp } from '@material-ui/icons';

 const   Orders = () => {
 
 const ORDER_URL = '//localhost:8084/api/v3/addOrders'
 const URL  = "//localhost:8084/api/v3";
 const [orders, setOrders ] = useState([]);  
 const [show, setShow] = useState(false);
 const cart = useSelector((state) => state.cart);
const currDate = new Date().toLocaleDateString();

function getParsedDate(currDate){
    var strSplitDate = String(currDate).split(' ');
    var date = new Date(strSplitDate[0]);
    // alert(date);
    var dd = date.getDate();
    var mm = date.getMonth() + 1; 
    var yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    date =  yyyy + "-" + mm + "-" + dd;
    return date.toString();
}

const [orderDate, setOrderDate]= useState(getParsedDate(currDate));

const [quantity, setQuantity]= useState(cart.cartTotalQuantity);

const [ totalCost, setTotalCost]= useState(cart.cartTotalAmount);

const [transactionMode, setTransactionMode]= useState('stripe');

const [firstName, setFirstname]= useState('');
const [lastName, setLastName]= useState('');
const [city, setCity]= useState('');
const [address, setAddress]= useState('');
const [phoneNumber, setPhonenumber]= useState('');
const [postIndex, setpostIndex ] = useState('')



   
   const AddOrder = async (ref) => {
        console.log(firstName, lastName)
        const order = {orderDate, quantity,  totalCost, transactionMode,firstName, lastName, city , address, phoneNumber, postIndex };

         await axios.post(ORDER_URL, order).then(res => {

          console.log(res.data)
          
         })
        
       
    };
    



  return (
           
              <>
              

                <Grid container spacing={3}>
        <Grid item container>
          <Typography variant="h3" fontStyle={"oblique"} paddingBottom = "17px">Shipping Details</Typography>
        </Grid>
        </Grid>
               {/* <Formik initialValues={initialValues} > */}
               <Formik >
      <Form onSubmit={AddOrder} >
             <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="First Name"
          name={`firstName`}
          variant="outlined"
          onChange={(e) => setFirstname(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Last Name"
          name={`lastName`}
          variant="outlined"
          fullWidth
          onChange={(e) => setLastName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          label="Address line "
          name={`addressLine1`}
          variant="outlined"
         fullWidth
          onChange={(e) => setAddress(e.target.value)}
        />
      </Grid>
      
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="City"
          name={`city`}
          variant="outlined"
          fullWidth
          onChange={(e) => setCity(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Phone Number"
          name= ' phno'
          variant="outlined"
          fullWidth
          onChange={(e) => setPhonenumber(e.target.value)}
        />
      </Grid>
            
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Zip/Postal Code"
          name={`zipPostalCode`}
          variant="outlined"
          fullWidth
          onChange={(e) => setpostIndex(e.target.value)}
        />
      </Grid>
    </Grid>
     <Box textAlign="right" mt={2}>
          {/* <Button
            type="submit"
            variant="contained"
            color="primary"
            // endIcon={<ArrowRightSharp />}
            size="large"
          >
            Continue
          </Button> */}
           <div className="cart-checkout" style={{"marginLeft" : "0%"}}>
          {/* <PayButton cartItems={cart.cartItems} /> */}
          {/* <button onClick={AddOrder}>Save</button> */}
          
          </div>

        </Box>
         
      </Form>
    </Formik>
          <FormControl>
  <FormLabel id="demo-radio-buttons-group-label" style={{"fontSize": "24px"}}>Payment Methods Avilable</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="stripe" control={<Radio />} label="Stripe" />
    <FormControlLabel value="disabled" disabled control={<Radio />} label="PayPal" />
  </RadioGroup>
  
</FormControl>
<div className="cart-checkout" style={{"marginLeft" : "0%"}}>
         <button onClick={AddOrder}><PayButton cartItems={cart.cartItems}  /></button> 
         {/* <button onClick={AddOrder}>bleeek</button> */}
         
          
          </div>
              </> 
      
     
     
 
    
    
  );
};
export default Orders;