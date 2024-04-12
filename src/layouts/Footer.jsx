import { GitHub, LinkedIn } from '@mui/icons-material';
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import logoByteStyle from '../images/logoByteStyle.webp';

export default function Footer() {
    const [showAlert, setShowAlert] = useState(false);

    // Função para exibir o alerta
    const handleAlert = () => {
        setShowAlert(true);
    };

    // Função para fechar o alerta
    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <footer className="bg-dark text-light py-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', textAlign: 'center'}}>
            <img src={logoByteStyle} alt="Logotipo da marca ByteStyle" width="200" height="200" />
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
                        <a href="https://www.linkedin.com/in/matheusmartinsviana/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>
                            <LinkedIn /> owner
                        </a>
                        <br />
                        <a href="https://github.com/matheusmartinsviana/byte_de_estilo" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>
                            <GitHub /> ownersByteStyle
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
            <div className="text-center mt-3">
                <p>&copy; 2024 ByteStyle. Todos os direitos reservados.</p>
                <a href="##" style={{ color: '#007bff' }} onClick={handleAlert}>Política de Privacidade</a>
            </div>
            </Container>

            {/* Renderização condicional do alerta */}
            {showAlert && (
                <Alert variant="success" onClose={handleCloseAlert} dismissible>
                    Maybe you should read the privacy policy before continuing.
                </Alert>
            )}
        </footer>
    );
}
