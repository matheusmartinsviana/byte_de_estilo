import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { products } from '../data/ProductsData';

export default function HighlightProducts() {
    // Gerar índices aleatórios
    const randomIndexes = [];
    while (randomIndexes.length < 4) {
        const randomIndex = Math.floor(Math.random() * products.length);
        if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
        }
    }

    // Pegar os produtos correspondentes aos índices aleatórios
    const randomProducts = randomIndexes.map(index => products[index]);

    return (
        <div className="py-5" style={{ background: 'transparent' }}>
            <Container>
                <h2 className="text-center mb-5 display-4"><span style={{
                    position: 'relative',
                    zIndex: 1,
                    background: 'linear-gradient(to top, #2c3e50, #bdc3c7)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block',
                    paddingTop: '20px',
                }}>
                    Aproveite nossas ofertas
                </span></h2>
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {/* Renderizar os produtos aleatórios */}
                    {randomProducts.map((product) => (
                        <Col key={product.id}>
                            <ProductCard {...product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
