import React, { Fragment, useState } from 'react'
import { v4 as uuid } from "uuid";

import "../styles/form.css";

const Form = ({ setCards, setIsGameStarted, setTurn, players }) => {

    const [imagesURLs, setImagesURLs] = useState([]);

    function handleOnImageLoad(e) {
        console.log("Input has changed");
        const input = e.target;
        const images = input.files;

        let imagesURLs = [];
        //create an url for each image in the input element
        for (const image of images) {
            const url = URL.createObjectURL(image);
            imagesURLs.push(url);
        };

        setImagesURLs(imagesURLs)
    }

    function pickUserRandomly(players) {
        return players[Math.floor(Math.random() * players.length)];
    }

    function handleSubmit(e) {
        e.preventDefault();
        const input = document.querySelector("#memoryGameImgs");
        const images = input.files;

        if (images.length === 0) return alert("Ninguna imagen ha sido seleccionada");

        let imagesURLs = [];
        //create an url for each image in the input element
        for (const image of images) {
            const url = URL.createObjectURL(image);
            imagesURLs.push(url);
        };

        //Duplicate the images from array to have a pair of each image.
        const duplicates = [...imagesURLs, ...imagesURLs];

        //Turn every entry into an object with the properties needed 
        const normalizedData = duplicates.map(url => ({ url: url, founded: false, id: uuid(), flipped: false }));


        //Find the pair of each image
        const withPairID = normalizedData.map((card, index, array) => {
            const cardsLength = imagesURLs.length;
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
        //Still Missing
        //

        //set the cards
        setCards(withPairID);
        setIsGameStarted(true);
        setTurn(pickUserRandomly(players))

    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <label htmlFor="memoryGameImgs">Elige las imágenes desde tu ordenador</label>
                <input onChange={handleOnImageLoad} type="file" name="" id="memoryGameImgs" multiple />
                <div className="buttons">
                    <button type="submit">Aceptar</button>
                </div>
            </form>
            <h3>Para iniciar el juego carga tus imágenes y da click en aceptar</h3>
            <h4>Imágenes seleccionadas: {imagesURLs.length}</h4>
            <div className="images-display">
                {imagesURLs.map(imageURL => <img key={imageURL} src={imageURL} />)}
            </div>
        </Fragment>


    )
}

export default Form
