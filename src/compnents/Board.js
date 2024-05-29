import React from 'react'

import Square from './Square.js'
import Logo from './Logo.js';

import bluesLogo from '../images/St._Louis_Blues_logo.png';
import cardinalsLogo from '../images/St._Louis_Cardinals_logo.png';

const renderSquare = (value, onClick) => {
    let content;
    if (value === 'X') {
        content = <Logo link={bluesLogo} />;
    } else if (value === 'O') {
        content = <Logo link={cardinalsLogo} />;
    }

    return content
};

function Board({ squares, onClick }) {
    const boardStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // Ensure each column is 100px wide
        gridTemplateRows: 'repeat(3, 1fr)', // Ensure each row is 100px tall
        gap: '0px', // Add gap between squares
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
        backdropFilter: 'blur(10px)', // Optional: blur background for more blend effect,
        justifyContent: 'center',
        alignContent: 'center'
    };

    return(
        <div style={boardStyle}>
            {squares.map((value, i) => <Square key={i} value={renderSquare(value)} onClick={() => onClick(i)}/>)}
        </div>
    )
}

export default Board