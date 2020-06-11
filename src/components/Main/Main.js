import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Women from '../Home/Women';
import Men from '../Home/Men';
import Register from '../Account/Register';
import LogIn from '../Account/LogIn';
import Cart from '../Cart/Cart';
import CartOne from '../Cart/CartOne';
import Checkout from '../Checkout/Checkout';
import Bags from '../Product/Bags';
import NotFound from '../NotFound/NotFound';
import Product from '../Product/Product';
import ProductList from '../Product/ProductList'
import Details from '../Product/Details';

const Main = () => (
  <Switch>
    <Route exact path="/ethioLeather" component={Home}/>
    <Route path="/ethioLeather/women" component={Women}/>
    <Route path="/ethioLeather/men" component={Men}/>
    <Route path="/ethioLeather/login" component={LogIn}/>
    <Route path="/ethioLeather/register" component={Register}/>
    <Route path="/ethioLeather/cart" component={Cart}/>
    <Route path="/ethioLeather/cartone" component={CartOne}/>
    
    <Route path="/ethioLeather/product" component={Product}/>
    <Route path="/ethioLeather/productlist" component={ProductList}/>
    <Route path="/ethioLeather/details/:id" component={Details}/>
    <Route path="/ethioLeather/checkout" component={Checkout}/>
    
   
   
    
    <Route path="/bags" component={Bags}/>

    <Route   component={NotFound}/>
  </Switch>
)

export default Main;
