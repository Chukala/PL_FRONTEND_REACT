import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../PopularProduct/popularProduct.css';

class Product extends Component {
    render() {
 // img src ={`/products/${product.sku}_2.jpg`}
  const { id,name,img,price,title } = this.props.product;
  //const productItems = this.props.product;
  //{`#${id}`}
    return (
        <div className="col-sm-3">
                <div className="product-image-wrapper">
                    <div className="single-products" key={id}>
                     <Link to={`/cart/${this.props.product.id}`} onClick={(e)=>this.props.handleAddToCart(e, this.props.product)}>
                        <div className="productinfo text-center">
                            <img src={img} alt={title} />
                            <h4>{price}</h4>
                            <p>{name}</p>
                            <button to={`/cart/${this.props.product.id}`} className="btn btn-default add-to-cart" onClick={(e) => this.handleAddToCart(e, this.props.product)}><i className="fa fa-shopping-cart"></i>Add to cart</button>
                            <Link to={`/productdetails/${this.props.product.id}`} className="btn btn-default btn-primary">View Details</Link>
                        </div>
                     </Link>
                    </div>
                </div>
            </div> 
     );
         
        
    }
}

export default Product;




  
  
    
    
    
