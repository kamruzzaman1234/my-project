import React,{useState, useRef} from 'react';
import {FaBars, FaTimes } from 'react-icons/fa';
import {BsYoutube} from 'react-icons/bs';

import  {MdProductionQuantityLimits, MdOutlineFoodBank,MdOutlineMedicalServices} from 'react-icons/md';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './Navbar.css';

const Navabr = ()=>{
    const formRef = useRef();

    const formHandle = ()=>{
        formRef.current.classList.toggle('responsive_nav');
    }

    return(
        <header className="heading">
            <h4 style={{fontSize:'40px', fontWeight:'bold'}}><AiOutlineShoppingCart/> <sup>Shop</sup></h4>
            <nav ref={formRef}>
                <a href="#" className="btn btn-primary px-5"> <MdOutlineFoodBank /> </a>
                <a href="#" className="btn btn-primary px-5"> <MdProductionQuantityLimits/> </a>
                <a href="#" className="btn btn-primary px-5"> <MdOutlineMedicalServices/></a>
               

                <button className="nav-btn nav-close-btn" onClick={formHandle}>
                  <FaTimes />
                </button>
            </nav>
            <button className="nav-btn " onClick={formHandle}>
                <FaBars />
            </button>

      </header>
    )
}
export default Navabr;