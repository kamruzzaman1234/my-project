import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Welcome.css';
import Img from './img13.jpg';
import S1 from './s1.jpg';
import S2 from './s2.jpg';
import S3 from './s3.jpg';
import S4 from './s4.jpg';
import S5 from './s5.jpg';
import S6 from './s6.jpg';
import S7 from './s7.jpg';
import S8 from './s8.jpg';
import S9 from './s9.jpg';
import S10 from './s10.jpg';
import S11 from './s11.jpg';
import S12 from './s12.jpg';


const Welcome = ()=>{
    return(
        <div className="welcome" style={{background:'#3a3a3a'}}>
            <div className="container">
                <div className="row">
                        <div className="col-md-6" data-aos="flip-left">
        <h5 className="text-primary">Our Product <span className="type"><TypeAnimation className="text-light"
      sequence={[
        'Fruits', 
        1000, 
        'Vegitable', 
        2000, 
        'T-shirt', 
        1000,
        'Shirts',
        1000,
        'Bag',
        2000,
        'Shoess',
        1000,
        'Cup',
        1000,
        
        () => {
          console.log('Done typing!'); 
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em' }}
    /></span> </h5>
     <h2 className="text-primary">Welcome To <br/> Our Shop</h2>

         <a href="#" className="btn btn-primary mt-3">View Our Side</a>
        </div>
        <div className="col-md-6 mt-sm-3">
        <div className="show-product"> 
        <div className="row">
          <div className="col-md-4 col-sm-12 mb-sm-3 " data-aos="zoom-in-up">  
            <img src={S3} alt={S3}/>
          </div>
          <div className="col-md-4 col-sm-12 mb-sm-3" data-aos="zoom-in-up">  
            <img src={S1} alt={S1}/>
          </div>
          <div className="col-md-4 col-sm-12 mb-sm-3" data-aos="zoom-in-up">  
            <img src={S2} alt={S2}/>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4 col-sm-12 mb-sm-3" data-aos="flip-up">  
            <img src={S4} alt={S4}/>
          </div>
          <div className="col-md-4" data-aos="flip-up">  
            <img src={S5} alt={S5}/>
          </div>
          <div className="col-md-4 col-sm-12 mb-sm-3" data-aos="flip-up">  
            <img src={S6} alt={S6}/>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-4 col-sm-12 mb-sm-3" data-aos="flip-down">  
            <img src={S7} alt={S7}/>
          </div>
          <div className="col-md-4 col-sm-12 mb-sm-3" data-aos="flip-down">  
            <img src={S8} alt={S8}/>
          </div>
          <div className="col-md-4 col-sm-12 mb-sm-3" data-aos="flip-down">  
            <img src={S9} alt={S9}/>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-4 col-sm-12 mb-sm-3"  data-aos="zoom-in">  
            <img src={S10} alt={S10}/>
          </div>
          <div className="col-md-4 col-sm-12 mb-sm-3"  data-aos="zoom-in">  
            <img src={S11} alt={S11}/>
          </div>
          <div className="col-md-4 col-sm-12 mb-sm-3"  data-aos="zoom-in">  
            <img src={S12} alt={S12}/>
          </div>
        </div>

        </div>
      </div>
        </div>
            </div>
        </div>
    )
}
export default Welcome;