import axios from "axios";

//const USER_BASE_URL='http://localhost:8082/api/v1/';
 const USER_LIST_API="http://localhost:8081/api/v1/getUsers";
 const ADD_USER_API="http://localhost:8081/api/v1/user";
 const UPDATE_USER_API="http://localhost:8081/api/v1/user";
 const DELETE_USER_API="http://localhost:8081/api/v1/delete";
 const USER_LIST_ID_API="http://localhost:8081/api/v1/user";


class UserService{

    async getAllUsers(){
       // return axios.get(USER_LIST_API);
       const response= await axios.get(USER_LIST_API)
       return response;
    }

    saveUser(user){
        return axios.post(ADD_USER_API,user);
    }

    getUserById(id){
        return axios.get(USER_LIST_ID_API+'/'+id);
    }

    updateUser(user,id){
        return axios.put(UPDATE_USER_API+'/'+id,user);
    }

    deleteUser(id){
        return axios.delete(DELETE_USER_API+'/'+id);
    } 
}

export default new UserService()