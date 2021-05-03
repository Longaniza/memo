import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Grid from '@material-ui/core/Grid';
import { urls, responsiveRows } from '../data/data';
import Form from './Form';
import PropTypes from 'prop-types';

//Componente que representa el tablero
const Board = ({ cardsPerRowColumn, context, totalSeconds }) => {
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState({});
    useEffect(() => {
        const cardsPrev = Array.from({ length: cardsPerRowColumn });
        const selectedurls = [];
        for (let i = 0; i < (cardsPerRowColumn / 2); i++) {
            selectedurls.push(urls[i]);
        }
        selectedurls.forEach((url, index) => {
            let pair = 0;
            while (pair < 2) {
                const randomNumber = Math.floor(Math.random() * cardsPerRowColumn);
                if (!cardsPrev[randomNumber]) {
                    cardsPrev[randomNumber] = { id: randomNumber, imageUrl: url, cardFound: true, availableToPick: false, pairNumber: index };
                    pair++;
                }
            }
        });
        setCards([...cardsPrev]);
        const timeout = setTimeout(() => {
            setCards(state => state.map(element => ({ ...element, cardFound: false, availableToPick: true })));
        }, 7000);
        return () => {
            clearTimeout(timeout);
        }
    }, [cardsPerRowColumn]);

    const clickCard = (id) => {
        if (!Object.keys(selectedCard).length) {
            setSelectedCard(cards[id]);
            setCards(cards.map(element => element.id === id ? { ...element, cardFound: true, availableToPick: false } : element));
        }
        else {
            setCards(cards.map(element => element.id === id ? { ...element, cardFound: true, availableToPick: false } : { ...element, availableToPick: false }));
            setTimeout(() => {
                let pairAdded = false;
                setCards(state => state.map(element => {
                    if (element.cardFound && (element.id !== id && element.id !== selectedCard.id)) {
                        return element;
                    }
                    else if (element.id === id || element.id === selectedCard.id) {
                        if (selectedCard.pairNumber === cards[id].pairNumber) {
                            if (!pairAdded) {
                                context.addPair();
                                pairAdded = true;
                            }
                            return { ...element, cardFound: true, availableToPick: false }
                        }
                        return { ...element, cardFound: false, availableToPick: true };
                    }
                    else {
                        return { ...element, availableToPick: true };
                    }
                }));
                setSelectedCard({});
            }, 800);
        }
    }
    return (
        <div style={{ marginTop: "65px" }} >
            <Grid container>
                {
                    cards.length ? (cards.map(({ id, imageUrl, cardFound, availableToPick }) => {
                        const cardProps = {
                            id,
                            imageUrl,
                            cardFound,
                            availableToPick,
                            cardsPerRowColumn,
                            clickCard
                        }
                        return <Grid key={id} item {...responsiveRows[cardsPerRowColumn]}> <Card key={id} {...cardProps} /></Grid>
                    })) : []
                }
            </Grid>
            <Form totalSeconds={totalSeconds} cardsPerRowColumn={cardsPerRowColumn} />
        </div>
    )
}

Board.propTypes = {
    context: PropTypes.object.isRequired,
    totalSeconds: PropTypes.number.isRequired,
    cardsPerRowColumn: PropTypes.number.isRequired,
}
export default Board;
