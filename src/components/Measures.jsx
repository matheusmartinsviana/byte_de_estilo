import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

export default function Measures() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                style={{ marginTop: '15px', marginBottom: '1px'}}
            >
                Ver medidas
            </Button>
            <div style={{ maxHeight: '100px' }}>
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">
                        <Card body style={{ width: '150px', position: 'absolute', }}>
                            <p>P: 76-80 cm</p>
                            <p>M: 84-88 cm</p>
                            <p>G: 92-96 cm</p>
                            <p>GG: 100-104 cm</p>
                        </Card>
                    </div>
                </Collapse>
            </div>
        </>
    );
}

