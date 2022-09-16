import React,{useState} from 'react';
import Male from './i-shirt/s12.jpg';
import Tshirt from './Tshirt';
import Code from './Code';

const Shooes = ()=>{
    const [toggle, setToggle] = useState(true);
    const [isTrue, setIsTrue] = useState(true);
   
    let output = toggle ? (<Tshirt/>) : (<Code />)
    return(
        <div className="py-5">
            <div className="container">
                <div className="row">
                <div className="col-lg-4">
                        
                        <div className="row">
                            <div className="col-md-12 mb-sm-4 left-side">
                                <button className="btn btn-primary mb-3 w-100" 
                                onClick={()=>{setToggle(!toggle)}}>
                                    {toggle ? "Male" : "All Product"}
                                </button>
                                <img src={Male} className="male h-100 w-100" alt={Male}/>
                            </div>
                            <div className="col-md-12 right-side">
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 ml-5">
                        {output}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Shooes;