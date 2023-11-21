import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom' 
import {Link} from 'react-router-dom'

import UserService from "../../services/UserService";

const UpdateUserComponent = () => {

    //  const [cartId, setCartId] = useState('')
    // const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();
     const {id}=useParams();

    const updateUser=(e)=>{
    e.preventDefault();
    const user={"id":id,"name":name, "age":age,"gender": gender, "email":email, "address":address,"password": password ,"role":role}
   
      

        UserService.updateUser( user, id)
        .then((response) => {
            console.log(response.data)
          navigate("/admin/users");
        })
        .catch((error) => {
          console.log(error);
        });
    
        
    }
 

    useEffect(() => {
        UserService.getUserById(id).then((response) => {
        //    setId(response.data.id)
            setName(response.data.name)
            setAge(response.data.age)
            setGender(response.data.gender)
            setEmail(response.data.email)
            setAddress(response.data.address)
            setPassword(response.data.password)
            setRole(response.data.role)
          })
          .catch((error) => {
            console.log(error)
    
          });
      }, []);
// const title=()=>{
//     if(cartId){
//         return <h2 className='text-center'>Update Cart</h2>
//     }
//     else{
//         return <h2 className='text-center'>Add Cart</h2>
//     }
// }

  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                <h2 className='text-center'>Update User</h2>
                    <div className='card-body'>
                        <form>
                        <div className="form=group mb-2">
                  <label className="form-label"> Id</label>
                  <input
                    type="text"
                    placeholder="Enter id"
                    name="id"
                    className="form-control"
                    value={id}
                    onChange={(e) => {value}
                    }
                  ></input>
                </div>
              
                <div className="form=group mb-2">
                  <label className="form-label"> Name</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>

                <div className="form=group mb-2">
               <div className="col">
                  <label htmlFor="inputstate"> Gender </label><br/>
                 <select
                 class="browser-default custo-select mb-4"
                 id="gender"
                 onChange={(e) => setGender(e.target.value)}
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
                    onChange={(e) => setAge(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setAddress(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
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
                <div className="form=group mb-2">
                <div className="col">
                   <label htmlFor="inputstate"> Role </label><br/>
                  <select
                  class="browser-default custo-select mb-4"
                  id="role"
                  onChange={(e) => setRole(e.target.value)}
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
                 <button
                  className="btn btn-success"
                  onClick={(e) => updateUser(e)}
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
    </div>
  )
}

export default UpdateUserComponent