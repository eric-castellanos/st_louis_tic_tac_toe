import React, { useState } from 'react'
import Modal from 'react-modal'

import Board from './Board.js'
import Logo from './Logo.js'
import Gif from './Gif.js'


import calculateWinner from '../../helpers/calculateWinner.js'

import bluesLogo from '../images/St._Louis_Blues_logo.png'
import cardinalsLogo from '../images/St._Louis_Cardinals_logo.png'
import backgroundImage from '../images/St_Louis_Arch.jpg';
import bluesGif from '../images/Blues_Louie.gif'
import cardinalsGif from '../images/Cardinals.gif'


Modal.setAppElement('#root'); // Set the root element for accessibility

function Game() {
    const gameStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: 'cover', // Cover the entire area
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center', // Center the image
    };

    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [winner, setWinner] = useState(null);
    
    function handleClick(i) {
        const newBoard = [...board]

        if (calculateWinner(board) || newBoard[i]) {
            return;
        }

        newBoard[i] = xIsNext ? 'X' : 'O'

        setXIsNext(!xIsNext)
        setBoard(newBoard)

        const winningPlayer = calculateWinner(newBoard);
        if (winningPlayer) {
            setWinner(winningPlayer);
            setModalIsOpen(true);
        }
    }

    function startButton() {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
        setModalIsOpen(false);
        setWinner(null);
    } 

    return(
        <div style={gameStyle}>
            <Board squares={board} onClick={handleClick}/>
            <br></br>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <p style={{ margin: '10px 0', fontSize: '24px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: 'white' }}>
                    Current Player: {xIsNext ? <Logo link={bluesLogo} /> : <Logo link={cardinalsLogo} />}
                </p>
                <br></br>
                <button style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                    color: 'white',
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'background-color 0.3s ease'
                }} onClick={startButton}
                >
                    Start New Game
                </button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                content: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                },
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 style={{ color: xIsNext ? 'red' : 'blue' }}>
                        {xIsNext ? 'Go Cardinals!' : 'Go Blues!'}
                    </h2>
                    <h2>{xIsNext ? <Gif link={cardinalsGif} /> : <Gif link={bluesGif} />}</h2>
                    <button onClick={() => { setModalIsOpen(false); startButton(); }}>New Game</button>
                </div>
            </Modal>
        </div>
    )
}

export default Game