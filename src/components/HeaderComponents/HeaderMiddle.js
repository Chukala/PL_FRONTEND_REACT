import React from 'react';
import '../Navbar/Navbar.css';
import logo from '../../logo1.png';
import { Link } from 'react-router-dom';
import { Navigation } from 'react-mdl';
import {ProductConsumer} from '../../context/context';
//import Login from '../Account/LogIn';
//import Cart from '../Cart/Cart';

export default function HeaderMiddle(){ 
        return ( 
            <ProductConsumer>
            {value =>{
                const {cart} = value; 
            return ( 
                <div className="header-middle">
             <div className="container">
              <div className="row align-items-center">
                  <div className="col-sm-4">
                      <div className="middle-menu pull-left">
                          <ul className="nav navbar-nav">
                          <Navigation>
                            <li><Link to ="/ethioLeather/women">WOMEN</Link></li>  
                            <li><Link to ="/ethioLeather/men">MEN</Link></li> 
                          </Navigation>  
                          </ul>
                      </div>
                  </div>
                  <div className="col-sm-4">
                      <div className="logo pull-center text-center">
                          <Link to="/ethioLeather"><img src={logo} style={{width: 100}} alt="Logo"/></Link>
                      </div>
                  </div>
                
                  <div className="col-sm-4">
                      <div className="middle-menu pull-right">
                          <ul className="nav navbar-nav">
                          <Navigation>
                              <li><Link to="/ethioLeather/login"><i className="fa fa-lock"></i> Login</Link></li>
                              <li><Link to="/ethioLeather/cartone" className ="shopping_bag"><i className="fa fa-shopping-cart"></i><span className="badge badge-pill badge-danger">{(cart.length > 0) ? cart.length: 0}</span>Cart</Link></li>    
                          </Navigation>
                          </ul>
                      </div>
                  </div>
                
              </div>
          </div>
          </div>    
            );}} 
            </ProductConsumer>
        );
}
 
