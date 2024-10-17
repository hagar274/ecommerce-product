import React, { useState } from "react";
import "./Shop.css";
import { FaHeart, FaEye } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';


const Shop = ({shop, Filter, allcatefilter, addtocart}) => {
    //Toggle Product Detail
    const [showDetail, setShowDetail] = useState(false);
    // Detail Page Data
    const [detail, setDetail] = useState([]);
    //Showing Detail Box
    const detailpage = (product) => {
            const detaildata = ([{product}]);
            const productdetail = detaildata[0]['product'];
            // console.log(productdetail)
        setDetail(productdetail);
        setShowDetail(true);
    }
    const closedetail = () => {
            setShowDetail(false)
        }
    return(
       <>
       {
         showDetail ? 
         <>
       <div data-aos="fade-up" data-oas-delay={curElm.aosDelay} className="product_details">
        <button className="close_btn" onClick={closedetail} ><AiOutlineClose /></button>
        <div className="container">
            <div className="img_box">
            <img src={detail.image} alt=''></img>
            </div>
            <div data-aos="fade-up" data-oas-delay={curElm.aosDelay} className="info">
                <h4># {detail.cat}</h4>
                <h2>{detail.Name}</h2>
                <p>A Searchcreen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8...</p>
                <h3>${detail.Price}</h3>
                <button onClick={() => addtocart (detail)}>Add To Cart</button>
            </div>
        </div>
        </div>
         </>
        :
        null
       }
         <div className="shop">
            <h2># shop</h2>
            <p>Home . shop</p>
            <div className="container">
                <div className="left_box">
                    <div className="category">
                        <div className="header">
                            <h3>All Categories</h3>
                        </div>
                        <div className="box">
                            <ul>
                                <li onClick={() => allcatefilter ()}># All</li>
                                <li onClick={() => Filter ("tv")}># tv</li>
                                <li onClick={() => Filter ("laptop")}># laptop</li>
                                <li onClick={() => Filter ("watch")}># watch</li>
                                <li onClick={() => Filter ("speaker")}># speaker</li>
                                <li onClick={() => Filter ("electronics")}># electronics</li>
                                <li onClick={() => Filter ("headphone")}># headphone</li>
                                <li onClick={() => Filter ("phone")}># phone</li>
                            </ul>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="img_box">
                            <img src="images/shop_left.avif" alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="right_box">
                    <div className="banner">
                        <div className="img_box">
                            <img src="images/shop_top.webp" alt=""></img>
                        </div>
                    </div>
                    <div className="product_box">
                        <h2>Shop Product</h2>
                        <div className="product_container">
                            {
                                shop.map((curElm) => {
                                    return(
                                        <>
                                          <div className="box">
                                            <div className="img_box">
                                                <img src={curElm.image} alt=""></img>
                                                <div className="icon">
                                                    <li><FaHeart /></li>
                                                    <li onClick={() => detailpage (curElm)}><FaEye /></li>
                                                </div>
                                            </div>
                                            <div className="detail">
                                                <h3>{curElm.Name}</h3>
                                                <p>{curElm.Price}</p>
                                                <button onClick={() => addtocart(curElm)}>Add To Cart</button>
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
       </>
    );
}

export default Shop;