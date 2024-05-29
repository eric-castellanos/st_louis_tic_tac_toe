import React, { useState } from 'react'

function Square({ value, onClick }) {
    const squareStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background
        border: '1px solid rgba(255, 255, 255, 0.6)', // Semi-transparent border
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '250px', // Set height of each square
        width: '250px', // Set width of each square
        fontSize: '24px',
        fontWeight: 'bold',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        backdropFilter: 'blur(5px)', // Optional: blur background for more blend effect
    };

    return(
        <button style={squareStyle} onClick={onClick}>
            {value}
        </button>
    )
}

export default Square