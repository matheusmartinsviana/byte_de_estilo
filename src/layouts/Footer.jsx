import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GitHub, LinkedIn } from '@mui/icons-material';

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col md={4}>
                        <h4>ByteStyle Contato</h4>
                        <p>Telefone: <a href="https://api.whatsapp.com/send/?phone=5547996570396&text&type=phone_number&app_absent=0" style={{ color: '#007bff' }}> (47) 9657-0396</a></p>
                        <p>Email: <a href="mailto:matheusmviana@outlook.com.br" style={{ color: '#007bff' }}>contato@bytestyle.com</a></p>
                        <p>Endereço: www.bytestyle.com, 3000 - localhost</p>
                    </Col>
                    <Col md={4}>
                        <h4>Redes sociais</h4>
                        <a href="https://github.com/matheusmartinsviana/byte_de_estilo" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>
                            <GitHub /> ownersByteStyle
                        </a>
                        <br />
                        <a href="https://www.linkedin.com/in/matheusmartinsviana/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>
                            <LinkedIn /> owner
                        </a>
                    </Col>
                    <Col md={4}>
                        <h4>Mapa do site</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li><a href="/inicio" style={{ color: '#007bff' }}>Inicio</a></li>
                            <li><a href="##" style={{ color: '#007bff' }}>Produtos</a></li>
                            <li><a href="##" style={{ color: '#007bff' }}>Contato</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="text-center mt-3">
                <p>&copy; 2024 ByteStyle. Todos os direitos reservados.</p>
                <a href="##" style={{ color: '#007bff' }}>Política de Privacidade</a>


            </div>
        </footer>
    );
}
