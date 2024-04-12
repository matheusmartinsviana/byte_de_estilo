import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import orangeTechClothes from '../images/clothes.webp';
import blueTechClothes from '../images/orangeTechClothes.webp';
import HighlightProducts from '../components/HighlightProducts';

function Initial() {
    const [hovered, setHovered] = useState(false); // Estado para controlar se o mouse está sobre a imagem

    // Função para lidar com o evento de passagem do mouse sobre a imagem
    const handleMouseOver = () => {
        setHovered(true);
    };

    // Função para lidar com o evento de saída do mouse da imagem
    const handleMouseOut = () => {
        setHovered(false);
    };

    return (
        <Container fluid style={{
            background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)',
            padding: '50px'
        }}>
            <Row className="align-items-center">
                <Col md={6}>
                    <div className="text-center text-md-start" style={{ color: 'white' }}>
                        <h1 className="display-4">Inovação a cada confecção</h1>
                        <p className="lead">A <strong>ByteStyle</strong> atua no desenvolvimento de roupas tecnológicas.</p>
                        <Button variant="primary" size="lg">Veja Mais</Button>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="text-center">
                        <img
                            src={hovered ? blueTechClothes : orangeTechClothes} // Se o mouse estiver sobre a imagem, exibe a segunda imagem, caso contrário, exibe a primeira imagem
                            alt="A tecnologia está presente em cada fio confeccionado."
                            className="img-fluid"
                            onMouseOver={handleMouseOver} // Evento de passagem do mouse sobre a imagem
                            onMouseOut={handleMouseOut} // Evento de saída do mouse da imagem
                        />
                    </div>
                </Col>
            </Row>
            <HighlightProducts />
            </Container >
    );
}

export default Initial;
