import React,{ useState } from 'react';
import Img from './p.jpg';
import './Email.css';
import {TbAddressBook, } from 'react-icons/tb';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {AiOutlineMail} from  'react-icons/ai';
import {GiClick} from 'react-icons/gi';
import Form  from './Form';

const Email = ()=>{
    const [isTrue, setIsTrue] = useState(true);

    let output = isTrue ? (<div className="row">
        <div className="col-md-6 mt-4">
            <div className="address">
                <div> 
                   <h3> <TbAddressBook className="icon"/> <span className="p-2 text-primary">
                    Address</span></h3>
                    <p>Ashulia, Dhaka, rode 11,Hou #33</p>
                   </div>
                <div>
                    <h3><BsFillTelephoneFill className="icon"/> <span className="p-2 text-primary">
                    Phone Number </span> </h3>
                    <p>O1935024654 <br/>
                      01720503145</p>
                    
                </div>
                <div>
                    <h3><AiOutlineMail className="icon"/><span className="p-2 text-primary">
                    Address</span></h3>
                    <p>dmkkaarr.labib@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="col-md-6 mt-sm-3">
            <div className="card p-4 bg-secondary">
            <h3>Send Message</h3>
            <form>
                <input className="form-control mt-3" 
                type="text" placeholder="Enter Your Name"/>
                <input type="email" placeholder="Enter Your Email"
                 className="form-control mt-3"/>
                 <textarea type="text" placeholder="Type..." className="mt-3 form-control"/>
                 <button className="btn btn-success w-100 mt-3">Send Message</button>

            </form>
            </div>
        </div>  
       
    </div>) : (<Form/>)
    return(
        <div className="email py-5">
            <div className="container">
                <h4 className="mb-5 text-center"
                style={{fontWeight:'bold', }}>Create Your Store</h4>
                <div className="row">
                    <div className="col-md-6 text-sm-center">
                        <div className="email-left">
                            <h3>Create your beautiful store today</h3>
                            <p>Start your free 15-day trial, no credit card required.</p>
                            <img src={Img} alt={Img}/>
                        </div>
                    </div>
                    <div className="col-md-6 mt-sm-4">
                        <div className="contact">
                            <button className="btn btn-info w-100 py-3" onClick={()=>{
                                setIsTrue(!isTrue)
                            }}>
                            <GiClick style={{fontSize: '40px', color:"yellow"}}/>  {isTrue ? "Create Store" : "Contact"}
                            </button>
                        </div>
                        <p>{output}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Email;