import React, { useState } from "react";
import Nav from './comp/Nav'; 
// import Home from './comp/Home';
// import Product from './comp/Product';
import Homeproduct from "./comp/Home_Products";
import {BrowserRouter} from "react-router-dom" 
import Rout from "./comp/Rout";
import Footer from "./comp/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

   //Add To Cart
   const [cart, setCart] = useState([])
   //Shop Page Product
   const [shop, setShop] = useState(Homeproduct);
   //Shop Search Filter
   const [search, setSearch] = useState([])
   //Shop Category Filter
   const Filter = (x) => {
     const catefilter = Homeproduct.filter((product) => {
       return product.cat === x
     })
     setShop(catefilter);
   }
   const allcatefilter = () => {
     setShop(Homeproduct);
   }
   //Shop Search Filter
   const searchlength = (search || []).length === 0
   const searchproduct = () => {
   if(searchlength){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Search Something!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
     setShop(Homeproduct)
   }
   else{
 
       const searchfilter = Homeproduct.filter((x) => {
         return x.cat === search
       })
       setShop(searchfilter);
     }
 }
 //Add To Cart
 const addtocart = (product) => {
   const exist = cart.find((x) =>{
     return x.id === product.id
   })
   if(exist){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "This product is alleardy added in cart",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
   }
   else{
     setCart([...cart, {...product, qty:1}])
     Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added To cart",
      showConfirmButton: false,
      timer: 1500
    });
   }
 }
 console.log(cart)
  return (
    <div>
      <BrowserRouter>
    <Nav search={search} setSearch={setSearch} searchproduct={searchproduct} />
    <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart} />
    <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App;