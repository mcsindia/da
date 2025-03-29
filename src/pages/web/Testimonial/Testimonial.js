import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: "Aarav Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    comment:
      "Absolutely love the quality and craftsmanship! Every item feels like it has a story. I bought a set of hand-painted trays and they became the centerpiece of my living room. Feels truly Indian and unique.",
  },
  {
    name: "Sneha Patel",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    comment:
      "Amazing products with a desi touch! I ordered a couple of festive items and they exceeded my expectations. The delivery was super quick and the packaging was eco-friendly and beautiful.",
  },
  {
    name: "Rohit Verma",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    comment:
      "Authentic and elegant—perfect for gifting or home decor! I got a handcrafted wooden set for my parents and they absolutely loved it. Thank you for keeping our traditions alive!",
  },
];

export const Testimonial = () => {
  return (
    <section className="testimonial-section py-5">
      <Container>
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <Row className="g-4 justify-content-center">
          {reviews.map((review, index) => (
            <Col md={4} sm={6} xs={12} key={index}>
              <Card className="testimonial-card shadow-sm h-100 p-3">
                <div className="d-flex align-items-center mb-3">
                  <Image
                    src={review.image}
                    roundedCircle
                    width={60}
                    height={60}
                    className="me-3"
                    alt={review.name}
                  />
                  <div>
                    <h5 className="mb-0">{review.name}</h5>
                    <div className="text-warning">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <Card.Text className="fst-italic text-muted">
                  “{review.comment}”
                </Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
