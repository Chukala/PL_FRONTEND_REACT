import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './slider.css';
//import SliderArrow from '../components/Global/SliderArrow';
//import '../images/suits/suit01.jpg'

 class ImgSlider extends Component {
    render() {
      

     const slideImgs = [
          {
          id: 1,
          "img": "/ethioLeather/img/lather-img/jacket-female.png"
          },{
          id:2,
          "img": "/ethioLeather/img/leather-02.jpg"
        },{
          id:3,
          "img": "/ethioLeather/img/lather-img/jacket001.jfif"
        },{
          "id": 4,
          "img": "/ethioLeather/img/leather-01.jpg"
        }
      ]
     const sliderSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrow: true
        };

        return (
          <div className = "slider-div">
              <Slider {...sliderSettings}>
                {
                  slideImgs.map((slideImg) => {
                      return (
                        <div className="carousel-img-container" key={slideImg.id}>
                          <img key={slideImg.id}  src={slideImg.img} alt="slider-img"/>
                        </div>
                      )
                  })

                }
            </Slider>
           </div>
        )
    }
}

export default ImgSlider;
