import React from "react";
import "./Footer.css";
import { FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet } from 'react-icons/fa';


const Footer = () => {
    return(
      <>
        <div className="footer">
            <div className="container">
                <div className="left-box">
                    <div className="box">
                        <div className="icon_box">
                        <FaPiggyBank />
                        </div>
                        <div className="detail">
                            <h3>Great Saving</h3>
                            <p>lorem ipsum dolar sit amet,</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon_box">
                        <FaShippingFast />
                        </div>
                        <div className="detail">
                            <h3>Free Delivery</h3>
                            <p>lorem ipsum dolar sit amet,</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon_box">
                        <FaHeadphonesAlt />
                        </div>
                        <div className="detail">
                            <h3>24X7 Support</h3>
                            <p>lorem ipsum dolar sit amet,</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon_box">
                        <FaWallet />
                        </div>
                        <div className="detail">
                            <h3>Money Back</h3>
                            <p>lorem ipsum dolar sit amet,</p>
                        </div>
                    </div>
                </div>

                <div className="right_box">
                    <div className="header">
                        <img src="images/logo.webp" alt=""></img>
                        <p>Lorem ipsum dolor sit amet, consectetur Nuliscing elit. Duis faucibus ipsum id sem Putconsequat Text.</p>
                    </div>

                    <div className="bottom">
                        <div className="box">
                            <h3>Your Account</h3>
                            <ul>
                                <li>About us</li>
                                <li>Account</li>
                                <li>Payment</li>
                                <li>sales</li>
                            </ul>
                        </div>

                        <div className="box">
                            <h3>Products</h3>
                            <ul>
                                <li>Delivery</li>
                                <li>Track Oder</li>
                                <li>New product</li>
                                <li>old product</li>
                            </ul>
                        </div>

                        <div className="box">
                            <h3>contact us</h3>
                            <ul>
                                {/* <li>4005, Silver Business PointIndia</li> */}
                                <li>+(20)01275679688</li>
                                <li>hagartahoun@gmail.com</li>
                        </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      </>
    );
}

export default Footer;