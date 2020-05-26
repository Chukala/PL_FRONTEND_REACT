import React, { Component } from 'react';
import './ProductDetails.css';
import { productsData } from '../PopularProduct/productsData';
//import Men from '../Home/Men';
//import Product from '../Product/Product';

class ProductDetails extends Component {
     constructor() {
         super();
         this.state = {
             products: productsData,
             filteredProducts: [],
             cartItems: [],
             detailItems:[]
         }
        // this.handleChangeSort = this.handleChangeSort.bind(this);
         this.handleAddToCart = this.handleAddToCart.bind(this);
         this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
         this.handleAddToDetails = this.handleAddToDetails.bind(this);
     }

     /* componentDidMount(){
         fetch('http://localhost:8000/productsData').then(res => res.json())
            .then(data => this.setState({
               products: productsData,
               filteredProducts: data,
               cartItems:[]
            }));
            if(localStorage.getItem('cartItems')){
               this.setState({cartItems: JSON.parse(localStorage.getItem('cartItems'))});
            }
      }*/
      handleAddToDetails(e, product){
          this.setState(state => {
              const detailItems = state.detailItems;
              let productAlreadyInDetail = false;
              detailItems.forEach(item => {
                  if (item.id === product.id) {
                      productAlreadyInDetail = true;
                  }
              });
              if (!productAlreadyInDetail){
                  detailItems.push({
                      ...product,
                      count: 1
                  });
              }
          });
      }

     handleAddToCart(e, product) {
         this.setState(state => {
             const cartItems = state.cartItems;
             let productAlreadyInCart = false;
             cartItems.forEach(item => {
                 if (item.id === product.id) {
                     productAlreadyInCart = true;
                     item.count++;
                 }
             });
             if (!productAlreadyInCart) {
                 cartItems.push({
                     ...product,
                     count: 1
                 });
             }
             localStorage.setItem("cartItems", JSON.stringify(cartItems));
             return cartItems;
         })
     }
     handleRemoveFromCart(e, item) {
         this.setState(state => {
             const cartItems = state.cartItems.filter(element => element.id !== item.id)
             localStorage.setItem('cartItems', cartItems);
             return {
                 cartItems
             };
         });
     }
    render() { 
        const products = this.state.products;
        //const { id, name,img,price,brand } = this.props.productItems;
        //const {products}  = this.props;
        return ( 
            <section>
            {products.map(product => (
            <div className="container">
                    <div className="row" key={product.id}>
                        <div className="col-sm-4">
                            <div className="view-product">
                                <img src={`${product.img}`} alt="prd-details-img" key={product.id} />
                            
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="product-information">
                                <h2>{product.name}</h2>
                                <p>{product.brand}</p>
                                <span>
                                    <span>{product.price}</span>
                                    <label>Quantity:</label>
                                    <input type="text" value="3" />
                                    <button type="button" className="btn btn-fefault cart">
                                    <i className="fa fa-shopping-cart"></i> Add to cart
                                    </button>
                                </span>
                                <p><b>Availability:</b> In Stock</p>
                                <p><b>Condition:</b> New</p>
                                <p><b>Brand:</b> E-SHOPPER</p>
                           </div>
                        </div>      
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="nav nav-tabs">
                                <li><a href="#details">Details</a></li>
                                <li><a href="#companyprofile">Description</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
            </section>  
         );
    }
}
 
export default ProductDetails;