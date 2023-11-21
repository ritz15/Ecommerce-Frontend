import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import Dashboard from './admin/Dashboard';
export const ListOrders = () => {
 
 const ORDER_URL = '//localhost:8084/api/v3/'
 const [orders, setOrders ] = React.useState([]);  
 const [show, setShow] = useState(false);

const [orderDate, setOrderDate]= useState('');

const [quantity, setQuantity]= useState('');

const [ totalCost, setTotalCost]= useState('');

const [transactionMode, setTransactionMode]= useState('');


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

useEffect(() => {
        async function fetchdata(){
    const response = await axios.get(ORDER_URL + "allorders" );
    
    console.log(response.data)
    setOrders(response.data)
  

  }
  fetchdata();
   },[]   )


   
 const deleteOrder = async (OrderID) => {
  const response = await axios.delete(`${ORDER_URL}/delete/${OrderID}`).then((response) => {
     console.log(response.data);
  });
  
};
    
        




  return (
    <>
      <h2><FontAwesomeIcon className="ml-2 mr-2" icon={faShoppingBag}/> List of all orders</h2>
        <><Table strpied bordered hover>
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">Order Date</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">City</th>
                  <th scope="col">postIndex</th>
                  <th scope="col">Total Cost</th>
                  <th scope="col">Transaction Mode</th>
                  <th scope="col">Actions</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr scope="row" key={order.bookingOrderId}>
                    <td>{order.bookingOrderId}</td>
                    <td>{order.orderDate}</td>
                    <td>{order.firstName}</td>
                    <td>{order.lastName}</td>
                    <td>{order.quantity}</td>
                    <td>{order.city}</td>
                    <td>{order.postIndex}</td>
                    <td>${order.totalCost}</td>
                    <td>{order.transactionMode}</td>

                    <td>
                      
                       
                        <Button variant='danger' onClick={deleteOrder(order.bookingOrderId)} className='btn-sm'>
                        Delete
                      </Button>
                      
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            
            
              
              </>
    </>
  );
};

