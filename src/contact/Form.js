import React,{useState} from 'react';

const Form = ()=>{
    const [user, setUser] = useState({fname: '', lname: '', email: '', 
    password: '', number: '', store: '', selected:''});
    const {name, fname, lname,store, email, password, number, selected} = user;

    const handleChange = (e)=>{
        setUser({...user, [e.target.name]: e.target.value});
    }

    const submitChange = (e)=>{
        console.log("Form Submit");
        console.log(user);
        e.preventDefault();
    }
    return(
        <div className="form py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={submitChange}>
                            <div className="mt-3">
                                <label htmlFor="first name">First Name :</label>
                                 <input type="text" className="form-control mt-2"
                                 name="fname" id="fname" value={fname}
                                 onChange={handleChange}
                                  placeholder="Enter First Name" required/>
                            </div>
                     <div className="mt-3">
                         <label htmlFor="last name">Last Name :</label>
                             <input type="text" className="form-control mt-2"
                             name="lname" id="lname" value={lname}
                             onChange={handleChange}
                            placeholder="Enter Last Name" required/>
                    </div>
                            <div className="mt-3">
                                <label htmlFor="email">Email :</label>
                                 <input type="email" className="form-control mt-2"
                                 name="email" id="email" value={email}
                                 onChange={handleChange}
                                  placeholder="Email" required/>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="password">Password :</label>
                                <input type="password" placeholder="password" required
                                name="password" id="password" value={password}
                                onChange={handleChange}
                                 className="form-control mt-2"/>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="phone Number">
                                    Phone Number :
                                </label>
                                <input type="number" placeholder="+880" required 
                                name="number" id="number" value={number}
                                onChange={handleChange}
                                    className="form-control mt-2"/>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="store name">Store Name</label>
                                <input type="text" required className="form-control mt-2"
                                name="store" id="store" value={store}
                                onChange={handleChange}
                                placeholder="Store name (You can change this at any time)"/>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="">Online Bueiness :</label>
                                <select 
                            placeholder="What size is your online Buiesness" 
                            name="selected" id="selected" value={selected}
                            onChange={handleChange} required>
                            <option></option>
                            <option>I haven't started sheeling yet : no revenue</option>
                            <option>Just Starting Out $50k </option>
                            <option>Builiding Business $50k to $250k</option>
                            <option>Growing Busniess 250k to 1M</option>
                            <option>Last Entership</option>
                            <option>I am not sure</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-success mt-3 w-100">
                            Create Store</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Form;