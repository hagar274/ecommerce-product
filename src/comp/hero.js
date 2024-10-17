// import React, { useEffect, useState } from "react";
// import "./Home.css";
// import { Link } from "react-router-dom";
// import Homeproduct from "./Home_Products";
// import { FaEye, FaHeart, FaFacebook, FaShoppingCart } from "react-icons/fa";
// import { BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";
// import { MdDescription } from "react-icons/md";
//import React, { useEffect, useState } from "react";

// const Home = ({addtocart}) => {
//   //Product Category
//   const[newProduct, setNewProduct ] = useState([]);
//   const[featuredProduct, setFeaturedProduct ] = useState([]);
//   const[topProduct, setTopProduct ] = useState([]);
//   //Trending Product
//     const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
//     //Filter of tranding product
//     const filtercate = (x) =>{
//       const filterproduct = Homeproduct.filter((curElm) =>{
//         return curElm.type === x
//       })
//       setTrendingProduct(filterproduct)
//     }
//     //All Trending Products
//     const allTrendingProduct = () => {
//       setTrendingProduct(Homeproduct)
//     }

//     //Product Type
//     useEffect(() =>{
//       productcategory()
//     })
//     const productcategory = () => {
//       //New Product
//       const newcategory = Homeproduct.filter((x) => {
//         return x.type === "new"
//       })
//       setNewProduct(newcategory)

//       //Featured Product
//       const featuredcategory = Homeproduct.filter((x) => {
//         return x.type === "featured"
//       })
//       setFeaturedProduct(featuredcategory)

//       //Top Product
//       const topcategory = Homeproduct.filter((x) => {
//         return x.type === "top"
//       })
//       setTopProduct(topcategory)
//     }
//     return(
//         <>
//         {/* background pattern */}
//         <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white">
//           <div className="h-[700] w-[700px] bg-yellow-400 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9 home">
//             <div className="top_banner">
//                 <div className="content">
//                     <h3>silver aluminum</h3>
//                     <h2>Apple Watch</h2>
//                     <p>30% off at your first order</p>
//                     <Link to="/shop" className="link">Shop Now</Link>
//                 </div>
//             </div>

//             <div className="trending">
// //                 <div className="container">
// //                     <div className="left_box">
// //                         <div className="header">
// //                             <div className="heading">
// //                                 <h2 onClick={() => allTrendingProduct ()}>trending product</h2>
// //                             </div>
// //                             <div className="cate">
// //                                 <h3 onClick={() => filtercate ("new")}>New</h3>
// //                                 <h3 onClick={() => filtercate ("featured")}>Featured</h3>
// //                                 <h3 onClick={() => filtercate ("top")}>top selling</h3>
// //                             </div>
// //                         </div>
// //                         <div className="products">
// //                           <div className="container">
// //                             {
//                               trendingProduct.map((curElm) =>{
//                                 return(
//                                     <>
//                                       <div className="box">
//                                         <div className="img_box">
//                                             <img src={curElm.image} alt=""></img>
//                                             <div className="icon">
//                                                 <div className="icon_box">
//                                                 <FaEye />
//                                                 </div>
//                                                 <div className="icon_box">
//                                                 <FaHeart />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="info">
//                                             <h3>{curElm.Name}</h3>
//                                             <p>${curElm.Price}</p>
//                                             <button className="btn" onClick={() => addtocart (curElm)}>Add to cart</button>
//                                         </div>
//                                       </div>
//                                     </>
//                                 )
//                               })      
//                             }
//                           </div>
//                           <button>Show More</button>
//                         </div>
//                     </div>
//                     <div className="right_box">
//                       <div className="right-container">
//                         <div className="testimonial">
//                           <div className="head">
//                             <h3>our testmonial</h3>
//                           </div>
//                           <div className="detail">
//                             <div className="img_box">
//                               <img src="images/T1.avif" alt="testimonial"></img>
//                             </div>
//                             <div className="info">
//                               <h3>stephan robot</h3>
//                               <h4>web designer</h4>
//                               <p>Duis faucibus enim vitae nunc molestie, nec facilisis arcu pulvinar nullam mattisr nullam mattis.</p>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="nwesLetter">
//                           <div className="head">
//                             <h3>nwes Letter</h3>
//                           </div>
//                           <div className="form">
//                           <p>join our malling list</p>
//                           <input type='email' placeholder='E-mail' autoComplete='off'></input>
//                           <button>subscribe</button>
//                           <div className="icon_box">
//                             <div className="icon">
//                             <FaFacebook />
//                             </div>
//                             <div className="icon">
//                             <BiLogoTwitter />
//                             </div>
//                             <div className="icon">
//                             <BiLogoInstagram />
//                             </div>
//                             <div className="icon">
//                             <BiLogoYoutube />
//                             </div>
//                           </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                 </div>
//             </div>

//             <div className='banners'>
//           <div className='container'>
//             <div className='left_box'>
//               <div className='box'>
//                 <img src='images/Multi-Banner-1.avif' alt='banner'></img>
//               </div>
//               <div className='box'>
//                 <img src='images/Multi-Banner-2.avif' alt='banner'></img>
//               </div>
//             </div>

//             <div className='right_box'>
//               <div className='top'>
//                 <img src='images/Multi-Banner-3.webp' alt=''></img>
//                 <img src='images/Multi-Banner-4.avif' alt=''></img>
//               </div>
//               <div className='bottom'>
//                 <img src='images/Multi-Banner-5.webp' alt=''></img>
//               </div>
//               </div>
//             </div>
//             </div>

//             <div className="product_type">
//               <div className="container">
//                 <div className="box">
//                  <div className="header">
//                   <h2>New Product</h2>
//                  </div>
//                  {
//                   newProduct.map((curElm) => {
//                     return(
//                       <>
//                         <div className="productbox">
//                           <div className="img_box">
//                             <img src={curElm.image} alt=""></img>
//                           </div>
//                           <div className='detail'>
//                         <h3>{curElm.Name}</h3>
//                         <p>$ {curElm.Price}</p>
//                         <div className='icon'>
//                           <button><FaEye /></button>
//                           <button><FaHeart /></button>
//                           <button onClick={() => addtocart (curElm)}><FaShoppingCart /></button>
//                         </div>
//                       </div>
//                         </div>
//                       </>
//                     )
//                   })
//                  }
//                 </div>

//                 <div className="box">
//                  <div className="header">
//                   <h2>Featured Product</h2>
//                  </div>
//                  {
//                   featuredProduct.map((curElm) => {
//                     return(
//                       <>
//                         <div className="productbox">
//                           <div className="img_box">
//                             <img src={curElm.image} alt=""></img>
//                           </div>
//                           <div className='detail'>
//                         <h3>{curElm.Name}</h3>
//                         <p>$ {curElm.Price}</p>
//                         <div className='icon'>
//                           <button><FaEye /></button>
//                           <button><FaHeart /></button>
//                           <button onClick={() => addtocart (curElm)}><FaShoppingCart /></button>
//                         </div>
//                       </div>
//                         </div>
//                       </>
//                     )
//                   })
//                  }
//                 </div>

//                 <div className="box">
//                  <div className="header">
//                   <h2>Top Product</h2>
//                  </div>
//                  {
//                   topProduct.map((curElm) => {
//                     return(
//                       <>
//                         <div className="productbox">
//                           <div className="img_box">
//                             <img src={curElm.image} alt=""></img>
//                           </div>
//                           <div className='detail'>
//                         <h3>{curElm.Name}</h3>
//                         <p>$ {curElm.Price}</p>
//                         <div className='icon'>
//                           <button><FaEye /></button>
//                           <button><FaHeart /></button>
//                           <button onClick={() => addtocart (curElm)}><FaShoppingCart /></button>
//                         </div>
//                       </div>
//                         </div>
//                       </>
//                     )
//                   })
//                  }
//                 </div>

//               </div>
//             </div>
//           </div>
//           </div>
//         </>
//     );
// }


// export default Home;