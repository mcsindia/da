import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import prod1 from '../../../assets/images/antique-clock.jpg';
import prod2 from '../../../assets/images/antique-necklace.jpg';
import prod3 from '../../../assets/images/antique-piece.avif';
import prod4 from '../../../assets/images/decorate-mirror.jpg';
import prod5 from '../../../assets/images/handmade-pot.jpg';
import prod6 from '../../../assets/images/wooden-tray.jpg';

export const TrendingProducts = () => {
  return (
    <div className="trending-section py-5">
      <Container>
        <h2 className="section-heading">Trending Products</h2>
        <Carousel indicators={false}>
          <Carousel.Item>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <ProductCard image={prod1} title="Antique Clock" price="₹1,200" />
              <ProductCard image={prod2} title="Antique Necklace" price="₹850" />
              <ProductCard image={prod3} title="Antique Piece" price="₹2,300" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <ProductCard image={prod4} title="Decorative Mirror" price="₹655" />
              <ProductCard image={prod5} title="Handmade Pot" price="₹2,300" />
              <ProductCard image={prod6} title="Wooden Tray" price="₹999" />
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="trending-product-card ">
      <img src={image} alt={title} className="trending-product-img" />
      <h5>{title}</h5>
      <p className="price ">{price}</p>
    </div>
  );
};
