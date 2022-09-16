import React,{useState} from 'react';
import S3 from './i-shirt/s3.jpg';
import S4 from './i-shirt/s4.jpg';
import S5 from './i-shirt/s5.jpg';
import S6 from './i-shirt/s6.jpg';
import S7 from './i-shirt/s7.jpg';
import S8 from './i-shirt/s8.jpg';
import S9 from './i-shirt/s9.jpg';
import S10 from './i-shirt/s10.jpg';
import S11 from './i-shirt/s11.jpg';
import './Product.css';

const Code = ()=>{
    const [count, setCount] = useState(3)
    return(
        <div className="code py-5"> 
            <div className="container">
                <div className="row">
                   <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4 price">
                                <img src={S3} alt={S3}/>
                                <button className="btn btn-primary w-100 mb-2">$Price {count}</button>
                                <button className="btn btn-success w-100" onClick={()=>{setCount(count + 3)}}>
                                Double Price</button>
                            </div>
                            <div className="col-md-4 price">
                            <img src={S7} alt={S7}/>
                                <button className="btn btn-primary w-100 mb-2">$Price {count}</button>
                                <button className="btn btn-success w-100" onClick={()=>{setCount(count + 3)}}>
                                Double Price</button>
                            </div>
                                <div className="col-md-4 price">
                                <img src={S5} alt={S5}/>
                                <button className="btn btn-primary w-100 mb-2">
                                $Price {count}</button>
                                <button className="btn btn-success w-100" onClick={()=>{setCount(count + 3)}}>
                                Double Price</button>
                                </div>

                                <div className="col-md-4 price">
                                <img src={S6} alt={S6}/>
                                <button className="btn btn-primary w-100 mb-2">
                                $Price {count}</button>
                                <button className="btn btn-success w-100" onClick={()=>{setCount(count + 3)}}>
                                Double Price</button>
                                </div>

                                <div className="col-md-4 price">
                                <img src={S8} alt={S8}/>
                                <button className="btn btn-primary w-100 mb-2">
                                $Price {count}</button>
                                <button className="btn btn-success w-100" onClick={()=>{setCount(count + 3)}}>
                                Double Price</button>
                                </div>

                                <div className="col-md-4 price">
                                <img src={S9} alt={S9}/>
                                <button className="btn btn-primary w-100 mb-2">
                                $Price {count}</button>
                                <button className="btn btn-success w-100" onClick={()=>{setCount(count + 3)}}>
                                Double Price</button>
                                </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
export default Code;