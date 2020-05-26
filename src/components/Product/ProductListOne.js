import React, { Component } from 'react';
import ProductOne from '../Product/ProductOne';
import { ProductConsumer } from '../../context/context';


class ProductListOne extends Component {
   
     render() {
      
    return (
         <section className="productList">
           <div className="popular text-center"><h2>Our product</h2></div>   
            <div className="container">
              <div className="row">
                  <ProductConsumer>
                      { value => {
                         return  value.products.map(product => {
                              return (<ProductOne key={product.id} product={product}/>);
                          });
                      }}
                  </ProductConsumer>
              </div>
            </div>
         </section>
      );
    }
}
 
export default ProductListOne;