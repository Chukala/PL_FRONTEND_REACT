import React, { Component } from 'react';
import Product from '../Product/Product';
import { ProductConsumer } from '../../context/context';
import Filter from '../Filter/Filter';


class ProductList extends Component {
   
     render() {
      
    return (
         <section className="productList">
           <div className="popular text-center"><h2>Our product</h2></div> 
           <ProductConsumer>
              { value => {   
                return (<Filter sort={value.sort} handleChangeSort={value.handleChangeSort} count={value.count} />);    
                      }}
            </ProductConsumer> 
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