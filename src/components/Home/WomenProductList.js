import React from 'react';
import Product from '../Product/Product';
import { ProductConsumer } from '../../context/context';


function WomenProductList () {
        
        return( 
              <div className="container">
                <div className="row">
                     <ProductConsumer>
                      { value => {
                         return  value.products.slice(0,4).map(product =>  {
                            return (<Product key={product.id} product={product}/>);                              
                          });
                      }}
                  </ProductConsumer>  
                  </div>
             </div>
        
        );
    

}

export default WomenProductList;