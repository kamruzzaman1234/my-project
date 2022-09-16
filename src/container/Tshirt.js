import React,{ useState} from 'react';
import './Product.css';
import Male from './i-shirt/s12.jpg';
import s from './i-shirt/s.jpg';
import s1 from './i-shirt/s1.jpg';
import s2 from './i-shirt/s2.jpg';
import s3 from './i-shirt/s3.jpg';
import s4 from './i-shirt/s4.jpg';
import s5 from './i-shirt/s5.jpg';
import s6 from './i-shirt/s6.jpg';
import s7 from './i-shirt/s7.jpg';
import s8 from './i-shirt/s8.jpg';
import s9 from './i-shirt/s9.jpg';
import s10 from './i-shirt/s10.jpg';
import s11 from './i-shirt/s11.jpg';



const Tshirt = ()=>{
    const [male, setMale] = useState(0);
    const [toggle, setToggle] = useState(true);
   
    return(

        <>
      <div className="header py-5 text-light">
            <div className="container">
                <div className="row">
                   <div className="col-md-12 text-dark">
                       <div className="all-product">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 card p-4">
                                <img src={s} alt={s}/>
                                <button className="btn btn-primary mt-2">Price : $3</button>
                            </div>
                            <div className="col-lg-3 col-sm-6   card p-4">
                            <img src={s1} alt={s1}/>
                                <button className="btn btn-primary mt-2">Price : $3</button>
                            </div>
                            <div className="col-lg-3 col-sm-6  card p-4">
                            <img src={s2} alt={s2}/>
                                <button className="btn btn-primary mt-2">Price : $3</button>
                            </div>
                            <div className="col-lg-3 col-sm-6  card p-4">
                            <img src={s3} alt={s3}/>
                                <button className="btn btn-primary mt-2">Price : $3</button>
                            </div>

                            <div className="col-lg-3 col-sm-6  card p-4">
                            <img src={s4} alt={s4}/>
                                <button className="btn btn-primary mt-2">Price : $3</button>
                            </div>

                            <div className="col-lg-3 col-sm-6  card p-4">
                            <img src={s5} alt={s5}/>
                                <button className="btn btn-primary mt-2">Price : $3</button>
                            </div>
                            <div className="col-lg-3 col-sm-6  card p-4">
                            <img src={s6} alt={s6}/>
                                <button className="btn btn-primary mt-2">Price : $3</button>
                            </div>

                            <div className="col-lg-3 col-sm-6  card p-4">
                            <img src={s7} alt={s7}/>
                                <button className="btn btn-primary mt-2">Price : $3</button>
                            </div>
                            <div className="col-lg-3 col-sm-6  card p-4">
                            <img src={s8} alt={s8}/>
                                <button className="btn btn-primary mt-2">Price : $3</button>
                            </div>

                            <div className="col-lg-3 col-sm-6  card p-4">
                            <img src={s9} alt={s9}/>
                                <button className="btn btn-primary mt-2">Price : $3</button>
                            </div>
                            <div className="col-lg-3 col-sm-6  card p-4">
                            <img src={s10} alt={s10}/>
                                <button className="btn btn-primary mt-2">Price : $3</button>
                            </div>

                            <div className="col-lg-3 col-sm-6  card p-4">
                            <img src={s10} alt={s11}/>
                                <button className="btn btn-primary mt-2">Price : $3</button>
                            </div>

                         

                          
                          
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Tshirt;