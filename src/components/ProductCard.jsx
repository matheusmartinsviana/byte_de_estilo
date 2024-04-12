import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/ProductCard.css';

export default function ProductCard({ id, imageSrc, title, description }) {
    return (
        <Card className="product-card">
            <div className="card-zoom">
                <Card.Img variant="top" src={imageSrc} />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Link to={`/product/${id}`}>
                    <Button variant="primary">Ver detalhes</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}
