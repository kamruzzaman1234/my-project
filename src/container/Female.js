import React,{useState} from 'react';
import F1 from './F-shoo/f-s.jpg';
import F2 from './F-shoo/f1.jpg';
import F3 from './F-shoo/f2.jpg';
import F4 from './F-shoo/f3.jpg';
import F5 from './F-shoo/f4.jpg';
import F6 from './F-shoo/f5.jpg';
import './Product.css';

const Female = ()=>{
    const [count, setCount] = useState(3);
    return(
        <div className="female py-5">
            <div className="container">
                <div className="row">
                <div className="col-md-4">
                <img src={F1} alt={F1}/>
                     <button className="btn btn-primary w-100 mb-2">$Price {count}</button>
                    <button className="btn btn-success w-100" onClick={()=>{setCount(count + 3)}}>
                    Double Price</button>
                </div>

                <div className="col-md-4">
                <img src={F2} alt={F2}/>
                     <button className="btn btn-primary w-100 mb-2">$Price {count}</button>
                    <button className="btn btn-success w-100" onClick={()=>{setCount(count + 3)}}>
                    Double Price</button>
                </div>

                <div className="col-md-4">
                <img src={F3} alt={F3}/>
                     <button className="btn btn-primary w-100 mb-2">$Price {count}</button>
                    <button className="btn btn-success w-100" onClick={()=>{setCount(count + 3)}}>
                    Double Price</button>
                </div>

                <div className="col-md-4">
                <img src={F4} alt={F4}/>
                     <button className="btn btn-primary w-100 mb-2">$Price {count}</button>
                    <button className="btn btn-success w-100" onClick={()=>{setCount(count + 3)}}>
                    Double Price</button>
                </div>

                <div className="col-md-4">
                <img src={F5} alt={F5}/>
                     <button className="btn btn-primary w-100 mb-2">$Price {count}</button>
                    <button className="btn btn-success w-100" onClick={()=>{setCount(count + 3)}}>
                    Double Price</button>
                </div>

                <div className="col-md-4">
                <img src={F6} alt={F6}/>
                     <button className="btn btn-primary w-100 mb-2">$Price {count}</button>
                    <button className="btn btn-success w-100" onClick={()=>{setCount(count + 3)}}>
                    Double Price</button>
                </div>

                </div>
            </div>
        </div>
    )
}
export default Female;