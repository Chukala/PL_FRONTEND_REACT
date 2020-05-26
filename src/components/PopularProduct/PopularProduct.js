import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './popularProduct.css';
import { productsData } from './productsData';
import Filter from '../Filter/Filter';
import Product from '../Product/Product';
//import Cart from '../Cart/Cart';


class PopularProduct extends Component {
    constructor() {
        super();
        this.state = {
          products: productsData,
          filteredProducts:[],
          cartItems:[]
         }
         this.handleChangeSort = this.handleChangeSort.bind(this);
         this.handleAddToCart = this.handleAddToCart.bind(this);
         this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
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

    render() {
      const productItems = this.state.products
        return (
    <section className="productList">
    <div className="popular text-center"><h2>Our product</h2></div>
         <Filter sort={this.state.sort} handleChangeSort={this.handleChangeSort} count={this.state.products.length} />
          
            <div className="container">
              <div className="row">
                  {productItems.map(item => (
                     <Product product={item}  handleAddToCart={this.handleAddToCart} handleAddToDetails={this.handleAddToDetails}/>
                     ))}
              </div>
            </div>
      </section>
      );
    }
   }

    export default PopularProduct;
