import React from 'react';
import './popularProduct.css';

//import Filter from '../Filter/Filter';

//import Checkout from '../Checkout/Checkout';
import Product from '../Product/Product';
import { ProductConsumer } from '../../context/context';

function Bags () { 
        return( 
              <div className="container">
                <div className="row">
                     <ProductConsumer>
                      { value => {
                         return  value.products.map(product =>  {
                            return (<Product key={product.id} product={product}/>);                              
                          });
                      }}
                  </ProductConsumer>  
                  </div>
             </div>
        
        );
}

export default Bags;





