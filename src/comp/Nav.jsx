import React from "react";
import { MdLocalShipping } from 'react-icons/md';
import { MdOutlineSearch } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import { FaShoppingCart } from "react-icons/fa";
import { CiLogout, CiSquareAlert, CiUser } from 'react-icons/ci';
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom';
import "./Nav.css";


const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Shop",
      link: "/#shop",
    },
    {
      id: 3,
      name: "Cart",
      link: "/#cart",
    },
    {
      id: 3,
      name: "About",
      link: "/#about",
    },
    {
      id: 3,
      name: "Contact",
      link: "/#contact",
    },
  ];

const Nav = ({search, setSearch, searchproduct}) => {
const { loginWithRedirect, logout, user, isAuthenticated  } = useAuth0();
    return(
        <>
        <div>
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 header">
            <div className="top_header">
                <div className="icon">
                     <MdLocalShipping />
                </div>
                <div className="info">
                    <p>Free Shipping When Shopping upto $1000</p>
                </div>
            </div>
            {/* upper navbar */}
            <div className="bg-yellow-400 py-2">
            <div className="container flex justify-between items-center mid_header">
                <div className="logo">
                    <Link path="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
                    <img className="w-100" src="images/logo.webp" alt="logo"></img>
                    </Link>
                </div> 
                {/* search bar */}
                <div className="flex justify-between items-center gap-4">
                <div className="relative group hidden:sm:block">
                 <input type="text" value={search} placeholder="Search" className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary" onChange={(e) => setSearch(e.target.value)} />
                <button onClick={searchproduct} className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"><MdOutlineSearch /></button>
                </div>
                </div>

                {/* order buttom */}
                <button onClick={() => Swal.fire("Ordering not available yet")} className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                    <span className="group-hover:block hidden transition-all duration-200">Order</span>
                    <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer"/>
                </button>
                {
                    isAuthenticated?
                    //If user is Login them Logout Button will shown and also user profile
                    <div className="user">
                    <div className="icon">
                    <CiLogout />
                    </div>
                    <div className="btn">
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                    </div>
                </div>
                :
                    //If user is not Login them Login Button will shown
                <div className="user">
                    <div className="icon">
                       <FiLogIn />
                    </div>
                    <div className="btn">
                        <button onClick={() => loginWithRedirect()}>Login</button>
                    </div>
                </div>
                }
            </div>
            </div>
            {/* lower navbar */}
            <div className="flex bg-white text-black font-bold justify-center">
                <ul className="sm:flex hidden items-center gap-4 nav">
                    {/* {Menu.map((curElm) => (
                        <li key={curElm.id}>
                            <a href={curElm.link} className="inline-block px-4 hover:text-yellow-500 duration-200">
                                {curElm.name}
                            </a>
                        </li>
                    ))} */}
                    <li><Link to='/' className="link">Home</Link></li>
                        <li><Link to='/shop' className="link">Shop</Link></li>
                        <li><Link to='/cart' className="link">Cart</Link></li>
                        <li><Link to='/about' className="link">About</Link></li>
                        <li><Link to='/contact' className="link">Contact</Link></li>
             </ul>
             </div>
            </div>
            </div>
            </> 

); 
};

export default Nav;     
{/*                 
                <div className="last_header">
                <div className="user_profile">
                    {
                        //User Profile Will Shown Here
                        isAuthenticated ?
                        <>
                        <div className="icon">
                        <CiUser />
                        </div>
                        <div className="info">
                          <h2>{user.name}</h2>
                          <p>{user.email}</p>
                        </div>
                        </>
                        :
                        <>
                        <div className="icon">
                            <CiUser />
                        </div>
                        <div className="info">
                            <p>Please Login</p>
                        </div>
                        <div className="last_header">
                <div className="user_profile">
                    {
                        //User Profile Will Shown Here
                        isAuthenticated ?
                        <>
                        <div className="icon">
                        <CiUser />
                        </div>
                        <div className="info">
                          <h2>{user.name}</h2>
                          <p>{user.email}</p>
                        </div>
                        </>
                        :
                        <>
                        <div className="icon">
                            <CiUser />
                        </div>
                        <div className="info">
                            <p>Please Login</p>
                        </div>
                        </>
                    }
                </div>
                </div>
                </>
                    }
                </div>
                </div>
                <div className="navbar-collapse nav" id="navbarSupportedContent">
                    <ul className="me-auto mb-2 mb-sm-5">
                        <li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to='/shop' className="nav-link">Shop</Link></li>
                        <li className="nav-item"><Link to='/cart' className="nav-link">Cart</Link></li>
                        <li className="nav-item"><Link to='/about' className="nav-link">About</Link></li>
                        <li className="nav-item"><Link to='/contact' className="nav-link">Contact</Link></li>
                    </ul>
                </div>
                <div className="offer">
                    <p>flat 10% over all iphone</p>
                </div> */}
                        {/* dark mode switch  */}
                {/* <div>
                    <DarkMode />
                </div> */}