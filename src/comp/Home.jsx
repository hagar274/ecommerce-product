import React, { useEffect, useState } from "react";
import image1 from "../../public/images/slide-1.png";
import image2 from "../../public/images/shop_top.png";
import image3 from "../../public/images/Multi-Banner-3.png";
import Slider from 'react-slick';
import "./Home.css";
import { Link } from 'react-router-dom';
import Homeproduct from "./Home_Products";
import { FaEye, FaHeart, FaFacebook, FaShoppingCart, FaStar } from "react-icons/fa";
import { BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";
import { MdDescription } from "react-icons/md";



const imageList = [
  {
    id: 1,
    img: image1,
    title: "Apple Watch",
    description: "30% off at your first order"
  },
  {
    id: 2,
    img: image2,
    title: "Smart Phone",
    description: "save to 50% off Limited Only"
  },
  {
    id: 2,
    img: image3,
    title: "Speaker",
    description: "Beats On Go"
  },
];

const Home = ({addtocart}) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  //Product Category
  const[newProduct, setNewProduct ] = useState([]);
  const[featuredProduct, setFeaturedProduct ] = useState([]);
  const[topProduct, setTopProduct ] = useState([]);
  //Trending Product
    const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
    //Filter of tranding product
    const filtercate = (x) =>{
      const filterproduct = Homeproduct.filter((curElm) =>{
        return curElm.type === x
      })
      setTrendingProduct(filterproduct)
    }
    //All Trending Products
    const allTrendingProduct = () => {
      setTrendingProduct(Homeproduct)
    }

//     //Product Type
    useEffect(() =>{
      productcategory()
    })
    const productcategory = () => {
      //New Product
      const newcategory = Homeproduct.filter((x) => {
        return x.type === "new"
      })
      setNewProduct(newcategory)

      //Featured Product
      const featuredcategory = Homeproduct.filter((x) => {
        return x.type === "featured"
      })
      setFeaturedProduct(featuredcategory)

      //Top Product
      const topcategory = Homeproduct.filter((x) => {
        return x.type === "top"
      })
      setTopProduct(topcategory)
    }

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-200 dark:text-black duration-200">
{/* background pattern */}
          <div className="h-[700px] w-[700px] bg-yellow-400/50 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]home"></div>
          {/* home section */}
          <div className='container pb-8 sm:pb-0'>
            <Slider {...settings}>
              {imageList.map((curElm) => (
            <div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
              {/* text content section */}
              <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
              <h3 data-aos="zoom-out" data-aos-duration="500" data-oas-once="true">silver aluminum</h3>
                  <h2  data-aos="zoom-in" data-aos-duration="500" data-oas-once="true" className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{curElm.title}</h2>
                  <p  data-aos="zoom-up" data-aos-duration="500" data-oas-delay="100" className='text-sm'>{curElm.description}</p>
                  <div  data-aos="fade-out" data-aos-duration="500" data-oas-delay="300">
                  <Link to='/shop'><button className='bg-gradient-to-r from-yellow-400 to-yellow-200 hover:scale-10 duration-200 text-white py-2 px-4 rounded-full hover:bg-primary link' >
                  Shop Now
                </button>
                </Link>
              </div>
              </div>
              {/* Images section */}
              <div className='order-1 sm:order-2'>
                <div data-aos="zoom-in" data-oas-once="true" className='relative z-10'>
                  <img src={curElm.img} alt='image' className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto' />
                  </div>
              </div>
            </div>
        </div>
              ))}
            </Slider>

            <div className="trending">
                 <div className="container">
                  {/* header section */}
                      <div className="left_box">
                          <div className="header">
                              <div className="heading">
                                  <h2  data-aos="fade-up" className="font-bold" onClick={() => allTrendingProduct ()}>trending product</h2>
                              </div>
                              <div className=" cate">
                                  <h3  data-aos="fade-up" className="text-gray-400" onClick={() => filtercate ("new")}>New</h3>
                                  <h3  data-aos="fade-up" onClick={() => filtercate ("featured")}>Featured</h3>
                                  <h3  data-aos="fade-up" onClick={() => filtercate ("top")}>top selling</h3>
                              </div>
                          </div>
                          {/* body section */}
                          <div className="products">
                            <div className="container">
                              {/* card section' */}
                            {
                              trendingProduct.map((curElm) =>{
                                return(
                                    <>
                                       <div className="box">
                                        <div data-aos="fade-up" data-oas-delay={curElm.aosDelay} key={curElm.id} className="img_box">
                                            <img src={curElm.image} alt=""></img>
                                            <div className="icon">
                                                <div className="icon_box">
                                                <FaEye />
                                                </div>
                                                <div className="icon_box">
                                                <FaHeart />
                                                </div>
                                                <div className="w-full flex items-center justify-center gap-1">
                                                <FaStar className="text-yellow-500" />
                                                <FaStar className="text-yellow-500" />
                                                <FaStar className="text-yellow-500" />
                                              </div>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <h3 className="font-semibold">{curElm.Name}</h3>
                                            <p className="text-sm text-gray-600">${curElm.Price}</p>
                                            <button className="btn" onClick={() => addtocart (curElm)}>Add to cart</button>
                                        </div>
                                      </div> 
                                    </>
                                )
                              })      
                            }
                          </div>
                          <button className="w-28">Show More</button>
                        </div>
                    </div>
                     {/*
                    <div className="right_box">
                      <div className="right-container">
                        
                        <div className="testimonial">
                          <div className="head">
                            <h3>our testmonial</h3>
                          </div>
                          <div className="detail">
                            <div className="img_box">
                              <img src="images/T1.avif" alt="testimonial"></img>
                            </div>
                            <div className="info">
                              <h3>stephan robot</h3>
                              <h4>web designer</h4>
                              <p>Duis faucibus enim vitae nunc molestie, nec facilisis arcu pulvinar nullam mattisr nullam mattis.</p>
                            </div>
                          </div>
                        </div>
                        */}
                        {/* <div className="nwesLetter">
                          <div className="head">
                            <h3>nwes Letter</h3>
                          </div>
                          <div className="form">
                          <p>join our malling list</p>
                          <input type='email' placeholder='E-mail' autoComplete='off'></input>
                          <button>subscribe</button>
                          <div className="icon_box">
                            <div className="icon">
                            <FaFacebook />
                            </div>
                            <div className="icon">
                            <BiLogoTwitter />
                            </div>
                            <div className="icon">
                            <BiLogoInstagram />
                            </div>
                            <div className="icon">
                            <BiLogoYoutube />
                            </div>
                          </div>
                          </div>
                        </div> 
                      </div>
                    </div>
                    */}
                </div>
            </div>
 
            <div className='banners'>
           <div className='container'>
             <div className='left_box'>
               <div className='box'>
                 <img src='images/Multi-Banner-1.avif' alt='banner'></img>
               </div>
               <div className='box'>
                 <img src='images/Multi-Banner-2.avif' alt='banner'></img>
               </div>
             </div>

             <div className='right_box'>
               <div className='top'>
                 <img src='images/Multi-Banner-3.webp' alt=''></img>
                 <img src='images/Multi-Banner-4.avif' alt=''></img>
               </div>
               <div className='bottom'>
                 <img src='images/Multi-Banner-5.webp' alt=''></img>
               </div>
               </div>
             </div>
             </div>

             <div className="product_type">
               <div className="container">
                 <div className="box">
                  <div className="header">
                   <h2>New Product</h2>
                  </div>
                  {
                  newProduct.map((curElm) => {
                    return(
                      <>
                        <div className="productbox">
                          <div className="img_box">
                            <img src={curElm.image} alt=""></img>
                          </div>
                          <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>$ {curElm.Price}</p>
                        <div className='icon'>
                          <button><FaEye /></button>
                          <button><FaHeart /></button>
                          <button onClick={() => addtocart (curElm)}><FaShoppingCart /></button>
                        </div>
                      </div>
                        </div>
                      </>
                    )
                  })
                 }
                </div>

                <div className="box">
                 <div className="header">
                  <h2>Featured Product</h2>
                 </div>
                 {
                  featuredProduct.map((curElm) => {
                    return(
                      <>
                        <div className="productbox">
                          <div className="img_box">
                            <img src={curElm.image} alt=""></img>
                          </div>
                          <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>$ {curElm.Price}</p>
                        <div className='icon'>
                          <button><FaEye /></button>
                          <button><FaHeart /></button>
                          <button onClick={() => addtocart (curElm)}><FaShoppingCart /></button>
                        </div>
                      </div>
                        </div>
                      </>
                    )
                  })
                 }
                </div>

                <div className="box">
                 <div className="header">
                  <h2>Top Product</h2>
                 </div>
                 {
                  topProduct.map((curElm) => {
                    return(
                      <>
                        <div className="productbox">
                          <div className="img_box">
                            <img src={curElm.image} alt=""></img>
                          </div>
                          <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>$ {curElm.Price}</p>
                        <div className='icon'>
                          <button><FaEye /></button>
                          <button><FaHeart /></button>
                          <button onClick={() => addtocart (curElm)}><FaShoppingCart /></button>
                        </div>
                      </div>
                        </div>
                      </>
                    )
                  })
                 }

                </div>
              </div>
            </div> 
          </div>      
    </div>
  );
};

export default Home;
