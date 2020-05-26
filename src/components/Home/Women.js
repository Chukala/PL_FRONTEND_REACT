import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Button from '../Home/elements/Button';
import Wrapper from '../Home/elements/Wrapper';
import ProductImgWrapper from '../Home/elements/ProductImgWrapper';
import { womenFeaturedProducts } from '../PopularProduct/womenFeaturedProducts';

const HeroSection = styled.section `
  padding: 0em 4em;
  background: #f3f3f3;
  width: 100%;
  height: 600px;
  position: relative;
  margin: 0px auto 4em auto;
`;
const HeroImgDiv = styled.div `
    width: 100%;
    height: 100%;
    background: url("/img/lather-img/women_hero04.jpg");
    background-repeat: no-repeat;
    background-size: cover cover;
    background-position: center center;
    opacity: 1;
    z-index: 1;
    position: absolute;
    margin: 0px auto;
    overflow: hidden;
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

class Women extends Component {
    constructor(props){
      super(props)
      this.state = {
          products: womenFeaturedProducts
      }
    }
    render(){
        const productItems = this.state.products;
        return(
            <Wrapper>
                <HeroSection> 
                    <HeroImgDiv></HeroImgDiv>
                </HeroSection>
              <div className="container">
                <div className="row">
                {productItems.map(item => (
                  <div className="col-sm-3">
                            <ProductImgWrapper>
                                <SingleProduct>
                                   <Link to="/productdetails">
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

export default Women;
