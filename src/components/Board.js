import React from 'react'
import "../styles/board.css";

const Board = ({ children }) => {
    return (
        <div className="board">
            {children}
        </div>
    )
}

export default Board
