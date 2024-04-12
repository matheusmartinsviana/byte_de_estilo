import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { products } from '../data/ProductsData';

export default function Products() {

    return (
        <div className="py-5" style={{
            background: 'linear-gradient(to top, #2c3e50, #bdc3c7)'
        }}>
            <Container>
                <h2 className="text-center mb-5 display-4">Nossos Produtos</h2>
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {products.map((product) => (
                        <Col key={product.id}>
                            <ProductCard {...product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}