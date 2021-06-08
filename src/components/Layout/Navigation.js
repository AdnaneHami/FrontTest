import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';
 
const Navigation = () => {
    return (
        <nav className="col-md-2">
            <div class="container">
                <div class="center">
                    <button ><Link to={'/'}>BLOG</Link></button>
                </div>
            </div>
            
        </nav>
     );
}
 
export default Navigation;