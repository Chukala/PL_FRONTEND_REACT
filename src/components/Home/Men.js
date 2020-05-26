import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Button from '../Home/elements/Button';
import Wrapper from '../Home/elements/Wrapper';
import ProductImgWrapper from '../Home/elements/ProductImgWrapper';
import HeroSection from '../Home/elements/HeroSection';
import HeroImgDiv from '../Home/elements/HeroImgDiv';
import HeroTextDiv from '../Home/elements/HeroTextDiv';
import { menFeaturedProduct } from '../PopularProduct/menFeaturedProduct';
//import ProductDetails from '../Product/ProductDetails';


const Title = styled.h1 `
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const P = styled.p `
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
    color: #696763;
`;
const Img = styled.img `
   width: 100%;
   z-index: -1;
 `;

const I = styled.i `
   margin-right: 5px;
`;

const SingleProduct = styled.div `
   position: relative;
   text-align: center;
`;

class Men extends Component {
    constructor(props){
      super(props)
      this.state = {
          products: menFeaturedProduct
      }
    }
    render(){
        const productItems  = this.state.products;
        return (           

            <Wrapper>
                <HeroSection> 
                    <HeroImgDiv></HeroImgDiv>
                    <HeroTextDiv>
                    <Title>This is Men Hero</Title>
                    <Link to="/womenproduct">Buy Now</Link>
                    </HeroTextDiv>
                </HeroSection>
              <div className="container">
                <div className="row">
                {productItems.map(item => (
                  <div className="col-sm-3">
                            <ProductImgWrapper>
                                <SingleProduct>
                                   <Link to={`/productdetails/${item.brand}`}>
                                     <SingleProduct key={item.id}>
                                        <Img src={item.img} alt="images"/>
                                        <h4>{item.price}</h4>
                                        <P>{item.brand}</P>
                                        <Link to="/cart"><Button><I className="fa fa-shopping-cart"></I>Add to cart</Button></Link>
                                    </SingleProduct>
                                 </Link>
                                </SingleProduct>
                            </ProductImgWrapper>
                        </div>     
                 ))}   
                  </div>
             </div>
        </Wrapper>
        
        );
    }

}

export default Men;




