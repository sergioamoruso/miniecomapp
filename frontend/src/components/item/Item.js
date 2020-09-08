import React from 'react';
import PropTypes from 'prop-types';

function Item({ item }) {
    
    const getStyle = () => {
        return {
            display: 'flex',
            background: '#f4f4f4',
            padding: '10px',
            border: '1px #ccc solid',
        }
    };

    return (
        <div style={getStyle()}>
            <div style={{flexGrow: '1'}}>
                <input type="checkbox" />
            </div>

            <div style={{flexGrow: '25', textAlign: 'left'}}>
                {' '}{item.title}
            </div>

        </div>
    )
}

// Styles
const btnStyle = {
    color: '#fff',
    borderRadius: '50%',
    background: '#ff0000',
    fontWeight: 'bold',
    fontSize: '12px',
    padding: '3px 5px',
    cursor: 'pointer',
    flexGrow: '1'
}

export default Item;