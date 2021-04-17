import { useEffect, useState } from 'react';
import './App.css';
import Board from "./components/Board";
import Card from "./components/Card";
import { v4 as uuid } from "uuid";


//Array with the url of every image for the memory game
const imgs = ["https://images.unsplash.com/photo-1531846802986-4942a5c3dd08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", "https://images.unsplash.com/photo-1561488111-5d800fd56b8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80", "https://images.unsplash.com/photo-1516844113229-18646a422956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80", "https://images.unsplash.com/photo-1550604602-7fae1adbe912?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80", "https://images.unsplash.com/photo-1598797246294-7620e33a632f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80", "https://images.unsplash.com/photo-1562595410-2cb999af24b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80"];

//Duplicate the images from array to have a pair of each image.
const duplicates = [...imgs, ...imgs];

//Turn every entry into an object with the properties needed 
const normalizedData = duplicates.map(url => ({ url: url, id: uuid(), flipped: false }));


//Find the pair of each image
const withPairID = normalizedData.map((card, index, array) => {
  const cardsLength = imgs.length;
  if (index > cardsLength - 1) {
    const pair = array[index - cardsLength];
    card.pairID = pair.id;
  } else {
    const pair = array[index + cardsLength];
    card.pairID = pair.id;
  }
  return card;
})

//Shuffle the order of every object in the array 
// to randomize the position of each image on the board 
//
//




function App() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(withPairID);
  }, [])

  useEffect(() => {
    const flippedCards = getFlippedCards();
    //Check if there are two cards selected 
    if (flippedCards.length === 2) {

      if (flippedCards[0].pairID === flippedCards[1].id) {
        alert("Encontraste el par!");
      } else {
        alert("Suerte en la próxima ronda!");
      }

    }
  }, [cards])


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
    return cards.filter(card => !!card.flipped);
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Board>
        {
          cards.map(({ id, url, flipped, pairID }) => {
            const cardProps = {
              id,
              imageUrl: url,
              flipped,
              handleSelectCard,
              pairID
            }
            return <Card key={id} {...cardProps} />
          })
        }
      </Board>
    </div>
  );
}

export default App;
