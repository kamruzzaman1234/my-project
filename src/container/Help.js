import React,{useState} from 'react';
import C1 from './f-shoo/c1.jpg';
import C2 from './f-shoo/c2.jpg';
import C3 from './f-shoo/c3.jpg';
import C4 from './f-shoo/c4.jpg';
import C5 from './f-shoo/c5.jpg';
import C6 from './f-shoo/c6.jpg';
import C7 from './f-shoo/c7.jpg';
import './Product.css';
const Help = ()=>{
    return(
        <div className="header py-5 text-light">
            <div className="container">
                <div className="row">
                   <div className="col-md-12 text-dark">
                       <div className="all-product">
                        <div className="row">
                            <div className="col-md-3 col-sm-12 card p-4">
                                <img src={C3} alt={C3}/>
                                <button className="btn btn-primary mt-2">Price : $3</button>
                            </div>
                            <div className="col-md-3 col-sm-12 card p-4">
                            <img src={C2} alt={C2}/>
                                <button className="btn btn-primary mt-2">Price : $3</button>
                            </div>
                            <div className="col-md-3 col-sm-12 card p-4">
                            <img src={C3} alt={C3}/>
                                <button className="btn btn-primary mt-2">Price : $3</button>
                            </div>
                            <div className="col-md-3 col-sm-12 card p-4">
                            <img src={C4} alt={C4}/>
                                <button className="btn btn-primary mt-2">Price : $3</button>
                            </div>

                            <div className="col-md-3 col-sm-12 card p-4">
                            <img src={C5} alt={C5}/>
                                <button className="btn btn-primary mt-2">Price : $3</button>
                            </div>

                            <div className="col-md-3 col-sm-12 card p-4">
                            <img src={C6} alt={C6}/>
                                <button className="btn btn-primary mt-2">Price : $3</button>
                            </div>
                            <div className="col-md-3 col-sm-12 card p-4">
                            <img src={C7} alt={C7}/>
                                <button className="btn btn-primary mt-2">Price : $3</button>
                            </div>

                            <div className="col-md-3 col-sm-12 card p-4">
                            <img src={C3} alt={C3}/>
                                <button className="btn btn-primary mt-2">Price : $3</button>
                            </div>

                         

                          
                          
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Help;