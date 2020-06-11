import React, { Component } from 'react';
import Product from '../Product/Product';
import { ProductConsumer } from '../../context/context';


class ProductList extends Component {
   
     render() {
      
    return (
         <section className="productList">
           <div className="popular text-center"><h2>Our product</h2></div>   
            <div className="container">
              <div className="row">
                  <ProductConsumer>
                      { value => {
                         return  value.products.map(product => {
                              return (<Product key={product.id} product={product}/>);
                          });
                      }}
                  </ProductConsumer>
              </div>
            </div>
         </section>
      );
    }
}
 
export default ProductList;