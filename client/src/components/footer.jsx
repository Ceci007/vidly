import React from 'react';
import { withRouter } from 'react-router-dom';  
import '../index.css';

const Footer = (props) => {
    const { location } = props;

    if (location.pathname.match("/register") || location.pathname.match("/login")){
        return null;
    }

    return ( 
       <footer>
            <p>
                &copy; 2019, made by <i className="fa fa-heart"></i> Cecilia Benítez Casaccia, for a better web.
            </p>
       </footer>
     );
}
 
export default withRouter(Footer);