import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import '../PopularProduct/popularProduct.css';
import { productsData } from '../PopularProduct/productsData';
import Product from './Product';
import Filter from '../Filter/Filter';
import Cart from '../Cart/Cart';
//import Checkout from '../Checkout/Checkout';

class Bags extends Component{
    constructor(props){
       super(props)
       this.state = {
          products: productsData,
          filteredProducts:[],
          cartItems:[]
         }
         this.handleChangeSort = this.handleChangeSort.bind(this);
         this.handleAddToCart = this.handleAddToCart.bind(this);
         this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
         //this.getProducts = this.getProducts.bind(this);
    }
    componentDidMount() {
       /*fetch('http://localhost:3000/productlist').then(res => res.json())
          .then(data => this.setState({
             products: productsData,
             filteredProducts: data,
             cartItems:[]
          }));*/
          if(localStorage.getItem('cartItems')){
             this.setState({cartItems: JSON.parse(localStorage.getItem('cartItems'))});
          }
    }
    /*getProducts(e){
        this.setState({display: e.target.value});
        this.displayProducts();
    }
    displayProducts() {
       this.setState(state =>{
         const products = this.state.products;
         var catlist = products.filter(product => product.catagorie.indexOf("bags-Backpacks"));
         return {filteredProducts: catlist};
         });
    }*/

    handleAddToCart(e, product){
       this.setState(state =>{
         const cartItems = state.cartItems;
         let productAlreadyInCart = false;
         cartItems.forEach(item => {
            if(item.id === product.id){
               productAlreadyInCart = true;
               item.count++;
            }
         });
         if(!productAlreadyInCart){
            cartItems.push({...product, count:1});
         }
         localStorage.setItem("cartItems", JSON.stringify(cartItems));
         return cartItems;
       })
    }
    handleRemoveFromCart(e, item) {
      this.setState(state=>{
       const cartItems = state.cartItems.filter(element => element.id !== item.id)
       localStorage.setItem('cartItems', cartItems);
       return {cartItems};
      });
    }
    handleChangeSort(e){
       this.setState({sort: e.target.value});
       this.listProducts();
    }
    listProducts(){
      this.setState(state =>{
         if(state.sort !== ''){
            state.products.sort((a,b)=>(state.sort === 'lowest')?
            (a.price > b.price ? 1:-1)
            :(a.price < b.price ? 1:-1))
         } else{
            state.products.sort((a,b)=>(a.id < b.id ? 1:-1));
         }
         return {filteredProducts: state.products};
      })
    }
    render(){
   const productItems  = this.state.products;

    return (
     <section className="productList">
         <Filter sort={this.state.sort} handleChangeSort={this.handleChangeSort} count={this.state.products.length} />
          <Cart cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />
            <div className="container">
              <div className="row">
                { productItems.map(item => (
                  <Product product={item}  handleAddToCart={this.handleAddToCart} />
                  ))
                }
              </div>
            </div>
      </section>
    )
    }

}

export default Bags;
