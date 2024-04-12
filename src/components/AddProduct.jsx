import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AddProduct(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddToCart = () => {
        props.addToCart();
        handleClose();
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Adicione ao carrinho
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>ByteStyle</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.productName} foi adicionado ao carrinho</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleAddToCart}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
