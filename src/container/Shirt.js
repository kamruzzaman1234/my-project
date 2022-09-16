import React,{useState} from 'react';
import Help from './Help';

const Shirt = ()=>{
    const [toggle, setToggle] = useState(true);
    
    return(
        <div className="shirt">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Help/>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Shirt;