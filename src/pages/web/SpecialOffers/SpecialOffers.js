import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import new_prod4 from '../../../assets/images/offers-bg.jpg'

export const SpecialOffers = () => {
  return (
    <div className="special-offers-section py-5">
      <Container>
        <h2 className="section-heading ">🎁 Special Offers & Festive Deals</h2>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 offer-banner" src={new_prod4} alt="Festive Deal 1" />
            <Carousel.Caption>
              <h3>Diwali Combo Pack - Up to 50% Off!</h3>
              <p>Perfect gifts handcrafted with love 🇮🇳</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 offer-banner" src={new_prod4} alt="Festive Deal 2" />
            <Carousel.Caption>
              <h3>Handloom Week Sale - Flat 30% Off</h3>
              <p>Support Indian weavers & artisans</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 offer-banner" src={new_prod4} alt="Festive Deal 3" />
            <Carousel.Caption>
              <h3>Combo Packs for Home Decor</h3>
              <p>Traditional, vibrant & desi</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};
