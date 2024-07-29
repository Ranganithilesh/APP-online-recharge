// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import './Carousel.css'; // Custom styles for carousel

const carouselItems = [
  { id: 1, image: 'https://stylecaster.com/wp-content/uploads/2023/07/ishowspeed.png'},
  { id: 2, image: 'https://www.familyeducation.com/sites/default/files/2020-11/should-kids-have-cellphones-at-school.jpg' },
  { id: 3, image: 'https://cf.ltkcdn.net/parenting/kids/images/orig/340658-2121x1414-students-using-smartphones-1371288493.jpg' },
  // Add more items as needed
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {carouselItems.map(item => (
          <div key={item.id} className="carousel-item">
            <img src={item.image} alt={item.title} />
            <div className="carousel-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
