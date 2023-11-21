import UserService from "../../services/UserService";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const ListUserComponent = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
 getAllUsers();
  },[]);

  
  const getAllUsers=()=>{
    UserService.getAllUsers()
    .then((response)=>{
      setUser(response.data);
      console.log(response.data);
    
      }).catch((error) =>{
        console.log(error);
      });

  };
  const deleteUser = (userId) => {
    console.log("***"+userId);
    UserService.deleteUser(userId)
    .then((response) => {
    
      getAllUsers();
      
      })
      .catch((error) => {
        console.log(error);
      });
  };




  return (
    <div className="container">
      <h2 className="text-center"> List Users</h2>

      <Link to="/admin/add-user" className="btn btn-primary mb-2">Add User</Link>
      <table className="table table-bordered table-striped">
        <thead>
          <th>User Id</th>
          <th>User Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Email</th>
          <th>Address</th>
          <th>Password</th>
          <th>Role</th>
          <th>Actions</th>
        </thead>
        <tbody>
        {
           user.map( (user) =>(
            <tr key={user.id}>
            <td> {user.id}</td>
            <td> {user.name}</td>
            <td> {user.gender}</td>
            <td>{user.age}</td>
            <td> {user.email}</td>
            <td> {user.address}</td>
            <td> {user.password}</td>
            <td>{user.role}</td>
            <td>
            <Link className="btn btn-info" to={`/admin/edit-user/${user.id}`}>Update</Link>
           
            <button className="btn btn-danger "
            onClick={() => deleteUser(user.id)}
            style={{ marginLeft: "10px" }}
            >Delete
            </button>
            </td>
            </tr>
           ))}
        
        </tbody>
      </table>
    </div>
  );
};

export default ListUserComponent;