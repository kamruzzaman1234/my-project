import React,{useState} from 'react';
//import Todos from './Todos';
import  { Image } from './Image';
import './Shop.css';
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs';
import {GrLinkBottom} from 'react-icons/gr';

const Shop = ()=>{
    const [selected, setSelected] = useState(0);
    const tlength = Image.length;
    return(
        <div className="shop py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6" data-aos="zoom-in-up">
                        <img src={Image[selected].image}/>
                        <button className="d-inline btn w-100
                        btn-success font-bold mt-2">
                            Product Code :{Image[selected].code}</button>
                         <button className="btn btn-success w-100 mt-2">Order Now</button>   
                    </div>
                    <div className="col-md-6 mt-sm-3">
                        <div className="show bg-primary py-2">
                            <h4>All the products  </h4>
                        </div>
                        <div className="py-3">
                            <h3 className="mb-5 mt-5 py-3 font-weight-bold text-danger">
                            Click and Show <GrLinkBottom/> </h3>
                            <button className="btn btn-primary w-40" onClick={()=>{
                        selected === 0 ? setSelected (tlength - 1)
                        : setSelected((prev)=> prev-1)
                    }}>
                            Next
                            </button>
                    <button className="btn btn-primary m-3 w-40" onClick={()=>{
                    selected===(tlength - 1) ? setSelected(0) : setSelected((prev)=>prev+1)
                    }}> 
                     Previous</button>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}
export default Shop;
