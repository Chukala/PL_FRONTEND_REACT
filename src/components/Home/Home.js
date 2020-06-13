import React from 'react';
import HomeFeaturedProductList from './HomeFeaturedProductList';
import styled from 'styled-components';
import ImgSlider from '../ImgSlider/ImgSlider';
import '../Navbar/Navbar.css';


const TitleDiv = styled.div`
      width: 100%;
      display: flex;
      justify-content: center;
      align-item: center;
      margin: 0px auto;
`;
const Title = styled.h2`
     padding: 5px;
     @media only screen and (max-width: 600px) {
       font-size: 30px;
      
  }
`;



function Home(){
        return(
          <div id="home-container"> 
              <ImgSlider />  
              <TitleDiv><Title>Our Featured Products</Title></TitleDiv> 
              <HomeFeaturedProductList />
          </div>
        );
    }
export default Home;
