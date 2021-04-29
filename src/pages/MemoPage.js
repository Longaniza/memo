import React from 'react'
import Board from '../components/Board';

const MemoPage = ({ history }) => {
    const { cardsPerRowColumn } = history.location.state;
    return (
        <>
            <Board cardsPerRowColumn={cardsPerRowColumn} >
            </Board>

        </>
    )
}

export default MemoPage;
