import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Board from "../components/Board";
import Card from "../components/Card";
import Form from "./Form";
import { v4 as uuid } from "uuid";


//Array with the url of every image for the memory game
// const imgs = ["https://images.unsplash.com/photo-1531846802986-4942a5c3dd08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", "https://images.unsplash.com/photo-1561488111-5d800fd56b8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80", "https://images.unsplash.com/photo-1516844113229-18646a422956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80", "https://images.unsplash.com/photo-1550604602-7fae1adbe912?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80", "https://images.unsplash.com/photo-1598797246294-7620e33a632f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80", "https://images.unsplash.com/photo-1562595410-2cb999af24b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80"];

const users = [
  {
    name: "Pepito",
    id: uuid(),
    foundedCards: []
  },
  {
    name: "Juanito",
    id: uuid(),
    foundedCards: []
  },
]


function App2() {

  const [turn, setTurn] = useState();
  const [players, setPlayers] = useState(users);
  const [cards, setCards] = useState([]);
  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    console.log("Game state changed to ", isGameStarted)
  }, [isGameStarted])

  useEffect(() => {
    if (isGameStarted) {

      const flippedCards = getFlippedCards();
      //Check if there are two cards selected 
      if (flippedCards.length === 2) {
        let founded = false;
        //Show result
        if (flippedCards[0].pairID === flippedCards[1].id)
          //   // alert("Encontraste el par!");
          founded = true;

        //Turn all the cards down after 5s
        const timer = setTimeout(() => {
          console.log("Turning cards down and changing turn")
          handleTurnCardsDown({ founded, flippedCards: flippedCards });
          handleChangeTurn();
        }, 5000);

        //clean up function
        return () => {
          clearTimeout(timer);
        }
      }
    }
  }, [cards])


  function handleChangeTurn() {
    //Get the index of the current user;
    const userID = turn.id;
    // console.log(`Current user: `, turn);
    //Get the other user 
    //Needs to be improved because it works only if we have two players
    const nextUser = players.find(user => user.id !== userID);
    // console.log("Next user: ", nextUser);
    setTurn(nextUser);
  }

  function handleTurnCardsDown({ founded = false, flippedCards = [] }) {

    const cardsFoundedIds = flippedCards.map(card => card.id);

    //Turn down all the cards except the pairs that were founded
    setCards(prevCards => {
      return prevCards.map(card => {
        if (founded && cardsFoundedIds.includes(card.id)) {
          card.founded = true;
        } else {
          card.flipped = false;
        }
        return card;
      });
    });

    //if the pair was founded insert the info of the cards in the player object
    if (founded) {
      const updatedPlayers = [...players];
      updatedPlayers.map(player => {
        if (player.id === turn.id) {
          player.foundedCards = [...player.foundedCards, ...flippedCards];
        }
        return player;
      })
      setPlayers(updatedPlayers);
    }

  };

  function handleSelectCard(id) {
    const flippedCards = getFlippedCards();
    if (flippedCards.length >= 2) {
      alert("No puedes voltear más de dos tarjetas en tu turno");
      return;
    }

    const updatedCards = [...cards];
    updatedCards.map(card => {
      if (card.id === id) {
        card.flipped = true;
      }
      return card
    })
    setCards(updatedCards);
  }

  function getFlippedCards() {
    //return the cards that are turned up excluding the ones that are already founded
    return cards.filter(card => card.flipped === true && card.founded === false);
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>

      {isGameStarted
        ? (
          <Fragment>
            {turn && <h3>Turno de {turn.name}</h3>}

            <Board>
              {
                cards.map(({ id, url, flipped, pairID, founded }) => {
                  const cardProps = {
                    id,
                    imageUrl: url,
                    flipped,
                    handleSelectCard,
                    pairID,
                    founded
                  }
                  return <Card key={id} {...cardProps} />
                })
              }
            </Board>
          </Fragment>
        )
        : (<Form setCards={setCards} players={players} setTurn={setTurn} setIsGameStarted={setIsGameStarted} />)
      }

    </div>
  );
}

export default App2;
