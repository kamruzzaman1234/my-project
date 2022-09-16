import React from 'react';
import Email from './Email';

const Header = ()=>{
    return(
        <div className="header11 py-5 bg-info text-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                    <h3>Grow your business with a website designed for ecommerce.</h3>
                    </div>
                    <div className="col-md-3">
                    <a href="Email.js" className="btn btn-primary py-4 font-weight-bold text-light w-100">
                        START YOUR FREE TRIAL
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;