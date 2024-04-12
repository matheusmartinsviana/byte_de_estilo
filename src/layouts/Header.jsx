import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logoByteStyle from '../images/logoByteStyle.webp'

function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{ height: '90px' }}>
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={logoByteStyle}
                        alt="Logotipo da marca ByteStyle"
                        width="90"
                        height="90"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link href="/inicio">Inicio</Nav.Link>
                        <Nav.Link href="/produtos">Produtos</Nav.Link>
                        <Nav.Link href="/contato">Contato</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Procurar</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;