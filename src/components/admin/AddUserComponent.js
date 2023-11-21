import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserService from "../../services/UserService";

const AddUserComponent = () => {

  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("");

 const navigate = useNavigate();
  const { id } = useParams();

  const saveUser = (e) => {
    e.preventDefault();

    const user = { name, age, gender, email, address, password ,role};
    // if (id) {
    //   UserService.updateUser( id, user)
    //     .then((response) => {
    //       navigate("/users");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // } else {
      UserService.saveUser(user)
        .then((response) => {
          console.log(response.data);
         navigate("/admin/users")
        })
        .catch((error) => {
          console.log(error);
          
       });
     
  };

  // useEffect(() => {
  //   UserService.getUserById(id)
  //     .then((response) => {
       
  //       setname(response.data.name);
  //       setage(response.data.age);
  //       setgender(response.data.gender);
  //       setemail(response.data.email);
  //       setaddress(response.data.address);
  //       setpassword(response.data.password);
  //       setrole(response.data.role);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // const title = () => {
  //   if (id) {
  //     return <h2 className="text-center"> Update User</h2>;
  //   } else {
  //     return <h2 className="text-center"> Add User</h2>;
  //   }
  // };

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h1>Add User</h1>
            <div className="card-body">
              <form>
              
                <div className="form=group mb-2">
                  <label className="form-label"> Name</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  ></input>
                </div>

               <div className="form=group mb-2">
               <div className="col">
                  <label htmlFor="inputstate"> Gender </label><br/>
                 <select
                 class="browser-default custo-select mb-4"
                 id="gender"
                 onChange={(e) => setgender(e.target.value)}
                 required
                 >
                 <option value="" disabled selected>
                 ---Gender---
                 </option>
                 <option value="Male">Male</option>
                 <option value="Female">Female</option>
                 </select>
                 </div>
                 
                </div> 

                
           {/**      <div className="form=group mb-2">
                <label for="form-label">Gender</label>
                <select className="form-control" id="form-label">
                  <option>Male</option>
                  <option>Female</option>
                  
                </select>
              </div> */}

                <div className="form=group mb-2">
                  <label className="form-label"> Age </label>
                  <input
                    type="text"
                    placeholder="Enter age"
                    name="age"
                    className="form-control"
                    value={age}
                    onChange={(e) => setage(e.target.value)}
                  ></input>
                </div>

                <div className="form=group mb-2">
                  <label className="form-label"> Email-id </label>
                  <input
                    type="text"
                    placeholder="Enter email-id"
                    name="email-id"
                    className="form-control"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  ></input>
                </div>

                <div className="form=group mb-2">
                  <label className="form-label"> Address </label>
                  <input
                    type="text"
                    placeholder="Enter address"
                    name="address"
                    className="form-control"
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                  ></input>
                </div>

                <div className="form=group mb-2">
                  <label className="form-label"> Password </label>
                  <input
                    type="text"
                    placeholder="Enter password"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                   
                  ></input>
                </div>

                <div className="form=group mb-2">
                <div className="col">
                   <label htmlFor="inputstate"> Role </label><br/>
                  <select
                  class="browser-default custo-select mb-4"
                  id="role"
                  onChange={(e) => setrole(e.target.value)}
                  required
                  >
                  <option value="" disabled selected>
                  ---Role---
                  </option>
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                  </select>
                  </div>
                  
                 </div> 







            {/**   <div className="form=group mb-2">
                <label className="form-label"> Role</label>
                <input
                  type="text"
                  placeholder="Enter role"
                  name="role"
                  className="form-control"
                  value={role}
                  onChange={(e) => setrole(e.target.value)}
                ></input>
              </div> */}  
             

                <button
                  className="btn btn-success"
                  onClick={(e) => saveUser(e)}
                >
                  Submit
                </button>

                <br />
                <br />
                <Link to="/admin/users" className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default AddUserComponent;