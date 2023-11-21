import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "@stripe/stripe-js";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Cancel from "./components/Cancel";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import EventBus from './common/EventBus'
import CheckoutSuccess from "./components/CheckoutSuccess";
import Dashboard from "./components/admin/Dashboard";
import Products from "./components/admin/Products";
import Users from "./components/admin/Users";
import Orders from './components copy/Orders'
//import Summary from "./components/admin/Summary";
import CreateProduct from "./components/admin/CreateProduct";
import { Component } from "react";
import { ListOrders } from "./components/ListOrders";
///
import UserOrders from './components/UserOrders'
import NavBar from "./components/NavBar";
import AuthService from './services/auth.service'
import eventBus from "./common/EventBus";
import Login from "./components copy/login.component"
import Register from "./components copy/register.component"
import Profile from './components copy/profile.component'
import BoardUser from './components copy/board-user.component'
import BoardModerator from './components copy/board-moderator.component'
import BoardAdmin from './components copy/board-admin.component'
import ViewallProducts from "./components/admin/ViewallProducts";
import ListUserComponent from "./components/admin/ListUserComponent";
import AddUserComponent from "./components/admin/AddUserComponent";
import UpdateUserComponent from "./components/admin/UpdateUserComponent";
import UpdateProductComponent from "./components/admin/UpdateProductComponent";
import Footer from "./components/Footer"
class  App extends Component {
  
 constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        // showModeratorBoard: user.roles
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
    toast.info("Logged Out Successfully", {
          position: "bottom-left",
        });
        localStorage.removeItem("cartItems");
  }
 
render() {
  const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
  return (

    <div className="App">
    <BrowserRouter>
       <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">

           <b> OnlineShop</b>
          </Link>
        <div className="navbar-nav mr-auto">
           <li className="nav-item">
            <Link to={"/home"} className="nav-link">
               Home
             </Link>
           </li>
           <li className="nav-item">
           <Link to={"/Contact"} className="nav-link">
              Contact Us
            </Link>
          </li>
         
          
            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {/* {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )} */}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/home" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>

             
            </div>
            
          )}

          <Link to="/cart">
        <div className="nav-bag">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-handbag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
          </svg>
          <span className="bag-quantity">
            <span>
              <NavBar/>
            </span>
          </span>
        </div>
      </Link>
        </nav>
        
      
          <ToastContainer />
          {/* <NavBar/> */}
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
               <Route path="Home" element={<Home />} />
               <Route path="Contact" element={<Contact />} />
               <Route path="/cancel" element={<Cancel />} />

              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout-success" element={<CheckoutSuccess />} />
              <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/userorders" element={<UserOrders />} />
            
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/ListOrders" element={<ListOrders />} />
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="products" element={<Products />}></Route>
            {/* <Route path="/admin" element={<BoardAdmin />} /> */}
              <Route path="/admin" element={<Dashboard />}>
               {/* <Route path="summary" element={<Summary />} /> */}
                 <Route path="product/list" element={<ViewallProducts />} />
                <Route path="products" element={<Products />}>
                <Route path="ListOrders" element={<ListOrders />} />
                <Route path="create-product" element={<CreateProduct />} />
                <Route path="edit/:productId" element={<UpdateProductComponent/>}/>
                </Route>
              
                <Route path="users" element={<ListUserComponent />}/>
                  
                 
                  <Route path="add-user" element={<AddUserComponent/>}/>
                  <Route path="edit-user/:id" element={<UpdateUserComponent />}/>
                
                
                
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
    {/**  { window.location.pathname !== '/admin' && location.pathname !== '/ListOrders' && <Footer />}   */}  
        {/* <Footer/> */}
      </div>

      
  );
}
}
export default App;
