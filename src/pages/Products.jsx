import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard'; // Importe o componente ProductCard
import Hat from '../images/Hat.webp';
import Jacket2 from '../images/Jacket2.webp';
import Casual from '../images/Casual.webp';
import Pack from '../images/Pack.webp';
import Watch from '../images/Watch.webp';
import Jacket from '../images/Jacket.webp';
import Pants from '../images/Pants.webp';
import Shirt from '../images/Shirt.webp';

export default function Products() {
    const products = [
        { id: '1', imageSrc: Hat, title: 'Boné Inteligente TechWear', description: 'Estilo e tecnologia se unem no Boné TechFlex. Com design moderno e confortável.' },
        { id: '2', imageSrc: Jacket2, title: 'Jaqueta TechStyle Pro', description: 'A Jaqueta TechStyle Pro une moda e tecnologia. Equipada com recursos inteligentes.' },
        { id: '3', imageSrc: Casual, title: 'Camisa Casual TechFit', description: 'Feita com tecidos respiráveis e tecnológicos, garante conforto durante todo o dia.' },
        { id: '4', imageSrc: Pack, title: 'Conjunto TechComfort', description: 'Conjunto ideal para conforto e estilo. Com tecidos tecnológicos de qualidade.' },
        { id: '5', imageSrc: Watch, title: 'Relógio SmartTechY', description: 'Com tecnologia avançada integrada, permite monitorar sua saúde, notificações e controlar músicas.' },
        { id: '6', imageSrc: Jacket, title: 'Jaqueta ByteShield', description: 'Feita com materiais de alta tecnologia, esta jaqueta deixa você confortável em todas as condições climáticas.' },
        { id: '7', imageSrc: Pants, title: 'Calça Flex', description: 'Com tecido elástico de alta tecnologia, esta calça proporciona muito conforto.' },
        { id: '8', imageSrc: Shirt, title: 'Camisa Breathe', description: 'A Camisa BreatheTech é uma escolha inteligente para quem valoriza o conforto e a praticidade.' },
    ];

    return (
        <div className="py-5" style={{
            background: 'linear-gradient(to top, #2c3e50, #bdc3c7)'
        }}>
            <Container>
                <h2 className="text-center mb-5 display-4">Nossos Produtos</h2>
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {products.map((product, index) => (
                        <Col key={index}>
                            <ProductCard {...product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}