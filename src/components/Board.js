import React, { useEffect, useReducer, useState } from 'react'
import Card from '../components/Card';
import Grid from '@material-ui/core/Grid';
import { urls, responsiveRows } from '../data/data';
import { element } from 'prop-types';

const Board = ({ cardsPerRowColumn }) => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        console.log('Entro al useeffect incial');
        const cardsPrev = Array.from({ length: cardsPerRowColumn });
        const selectedurls = [];
        for (let i = 0; i < (cardsPerRowColumn / 2); i++) {
            selectedurls.push(urls[i]);
        }
        selectedurls.forEach(url => {
            let pair = 0;
            while (pair < 2) {
                const randomNumber = Math.floor(Math.random() * cardsPerRowColumn);
                if (!cardsPrev[randomNumber]) {
                    cardsPrev[randomNumber] = { id: randomNumber, imageUrl: url, cardFound: true,availableToPick:false };
                    pair++;
                }
            }
        });
        setCards([...cardsPrev]);
        const timeout = setTimeout(() => {
            console.log('Entro');
            setCards(state => state.map(element => ({...element,cardFound:false,availableToPick:true})));
        },10000);
        return () => {
            clearTimeout(timeout);
        }
    },[cardsPerRowColumn]);
    

    const clickCard = (id) => {
        setCards(cards.map(element => element.id === id ? { ...element,cardFound: !element.cardFound } : element ));
    }
    return (
        <div style={{ marginTop: "65px" }} >
            <Grid container>
                {
                   cards.length ? (cards.map(({ id, imageUrl,cardFound,availableToPick }) => {
                        const cardProps = {
                            id,
                            imageUrl,
                            cardFound,
                            availableToPick,
                            clickCard
                        }
                        return <Grid key={id} item {...responsiveRows[cardsPerRowColumn]}> <Card key={id} {...cardProps} /></Grid>
                    })): []
                }
            </Grid>
        </div>
    )
}

export default Board;
