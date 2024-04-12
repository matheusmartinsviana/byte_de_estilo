import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulário enviado:', formData);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section id='contact' className='py-5 bg-light' style={{ 
            background: '#304352 linear-gradient(to bottom, #d7d2cc, #304352)',
            color: '#304352'
        }}>
            <Container>
                <h2 className='text-center display-4 '>Entre em Contato Conosco</h2>
                <Row className='justify-content-center' style={{ padding: '20px' }}>
                    <Col md={6}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId='formName' className='mb-3'>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='Digite seu nome'
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId='formEmail' className='mb-3'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Digite seu email (Ex.: exemplo@gmail.com)'
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId='formSubject' className='mb-3'>
                                <Form.Label>Assunto</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='subject'
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder='Digite o assunto da mensagem'
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId='formMessage' className='mb-3'>
                                <Form.Label>Mensagem</Form.Label>
                                <Form.Control
                                    as='textarea'
                                    rows={4}
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Digite sua mensagem'
                                    required
                                />
                            </Form.Group>
                            <Button variant='primary' type='submit'>
                                Enviar Mensagem
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ContactSection;
