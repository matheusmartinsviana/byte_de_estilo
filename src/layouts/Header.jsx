import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoByteStyle from '../images/logoByteStyle.webp';

function NavScrollExample() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const handleNavbarToggle = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" style={{ height: '90px' }} expanded={isNavbarOpen}>
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src={logoByteStyle}
                            alt="Logotipo da marca ByteStyle"
                            width="90"
                            height="90"
                            
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" onClick={handleNavbarToggle} />
                    <Navbar.Collapse id="navbarScroll" 
                    style={{                        
                        flexBassis: '0',
                        flexGrow: '0',
                    }}>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '150px'}}
                            navbarScroll
                        >
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/produtos">Produtos</Nav.Link>
                            <Nav.Link href="/contato">Contato</Nav.Link>
                            <Nav.Link href="/login"><Button>Login</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Adicione margem ou preenchimento à seção abaixo da navbar quando a navbar estiver aberta */}
            <div style={{ marginTop: isNavbarOpen ? '90px' : '0' }}>
                {/* Conteúdo da seção abaixo da navbar */}
            </div>
        </>
    );
}

export default NavScrollExample;
