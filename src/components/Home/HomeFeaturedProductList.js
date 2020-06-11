import React from 'react';
import Product from '../Product/Product';
import { ProductConsumer } from '../../context/context';


function HomeFeaturedProductList () {
        
        return( 
              <div className="container">
                <div className="row">
                     <ProductConsumer>
                      { value => {
                         return  value.products.slice(10,14).map(product =>  {
                            return (<Product key={product.id} product={product}/>);                              
                          });
                      }}
                  </ProductConsumer>  
                  </div>
             </div>
        
        );
    

}

export default HomeFeaturedProductList;