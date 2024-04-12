import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { products } from '../data/ProductsData';

export default function HighlightProducts() {
    const filteredProducts = products.filter(product => ['5', '2', '3', '8'].includes(product.id)); // Filtrar os produtos pelos IDs desejados

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
                    Produtos em Destaque
                </span></h2>
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {filteredProducts.map((product) => (
                        <Col key={product.id}>
                            <ProductCard {...product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
