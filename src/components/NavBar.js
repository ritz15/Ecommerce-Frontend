import React from 'react'
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
const NavBar = () => {
     const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
      
      <>
        <span>{cartTotalQuantity}</span>
        </>


      //   <nav className="nav-bar">
      //     <Link to={"/"} >
      //       OnlineShop
      //     </Link>
      //     <div className="navbar-nav mr-auto">
      //       <li className="nav-item">
      //         <Link to={"/home"} className="nav-link">
      //           Home
      //         </Link>
      //       </li>

      //       {showModeratorBoard && (
      //         <li className="nav-item">
      //           <Link to={"/mod"} className="nav-link">
      //             Moderator Board
      //           </Link>
      //         </li>
      //       )}

      //       {showAdminBoard && (
      //         <li className="nav-item">
      //           <Link to={"/admin"} className="nav-link">
      //             Admin Board
      //           </Link>
      //         </li>
      //       )}

      //       {currentUser && (
      //         <li className="nav-item">
      //           <Link to={"/user"} className="nav-link">
      //             User
      //           </Link>
      //         </li>
      //       )}
      //     </div>

      //     {currentUser ? (
      //       <div className="navbar-nav ml-auto">
      //         <li className="nav-item">
      //           <Link to={"/profile"} className="nav-link">
      //             {currentUser.username}
      //           </Link>
      //         </li>
      //         <li className="nav-item">
      //           <a href="/login" className="nav-link" onClick={this.logOut}>
      //             LogOut
      //           </a>
      //         </li>
      //       </div>
      //     ) : (
      //       <div className="navbar-nav ml-auto">
      //         <li className="nav-item">
      //           <Link to={"/login"} className="nav-link">
      //             Login
      //           </Link>
      //         </li>

      //         <li className="nav-item">
      //           <Link to={"/register"} className="nav-link">
      //             Sign Up
      //           </Link>
      //         </li>


      //       </div>
      //     )}

      //     <Link to="/cart">
      //   <div className="nav-bag">
      //     <svg
      //       xmlns="http://www.w3.org/2000/svg"
      //       width="35"
      //       height="35"
      //       fill="currentColor"
      //       className="bi bi-handbag-fill"
      //       viewBox="0 0 16 16"
      //     >
      //       <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
      //     </svg>
      //     <span className="bag-quantity">
      //       <span>{cartTotalQuantity}</span>
      //     </span>
      //   </div>
      // </Link>
      //   </nav>
        
    //    <nav className="nav-bar">
    //   <Link to="/">
    //     <h2>OnlineShop</h2>
    //   </Link>
    //   <Link to="/cart">
    //     <div className="nav-bag">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="35"
    //         height="35"
    //         fill="currentColor"
    //         className="bi bi-handbag-fill"
    //         viewBox="0 0 16 16"
    //       >
    //         <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
    //       </svg>
    //       <span className="bag-quantity">
    //         <span>{cartTotalQuantity}</span>
    //       </span>
    //     </div>
    //   </Link>
    // </nav>
  )
}

export default NavBar