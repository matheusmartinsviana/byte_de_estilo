import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Measures from './Measures';

export default function SizeButton() {
    const [alignment, setAlignment] = useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <div>
            <div>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                >
                    <ToggleButton value="p">P</ToggleButton>
                    <ToggleButton value="m">M</ToggleButton>
                    <ToggleButton value="g">G</ToggleButton>
                    <ToggleButton value="gg">GG</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div>
                <Measures />
            </div>
        </div>
    );
}
