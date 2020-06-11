import React from 'react';
import Product from '../Product/Product';
import { ProductConsumer } from '../../context/context';


function MenFeaturedProductList () {
        
        return( 
              <div className="container">
                <div className="row">
                     <ProductConsumer>
                      { value => {
                         return  value.products.slice(24,28).map(product =>  {
                            return (<Product key={product.id} product={product}/>);                              
                          });
                      }}
                  </ProductConsumer>  
                  </div>
             </div>
        
        );
    

}

export default MenFeaturedProductList;