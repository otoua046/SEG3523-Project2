import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

function Facet_value({name, updateCategory, facet}) {

    //State of the checkbox
    const [selected, setSelected] = useState(false)

    // Changes the state of selected on click
    const handleChange = () => {
        setSelected(!selected)
    }

    // Update the state in App.js when the variable selected changes.
    useEffect(() => {
        updateCategory(facet, name, selected)
    }, [selected])
    return (
        <Form.Check type='checkbox'
            label={name}
            value={selected}
            onChange={handleChange}
            aria-labelledby={name}
        />    
    );
}

export default Facet_value;