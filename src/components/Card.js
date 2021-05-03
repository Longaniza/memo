import React from 'react'
import "../styles/card.css";
import PropTypes from "prop-types";

const Card = ({ imageUrl, id, cardFound, clickCard, availableToPick }) => {
    return (
        <div className="scene">
            <div onClick={() => { clickCard(id) }} className={`card ${cardFound ? '' : 'is-flipped'} ${availableToPick ? '' : 'notavailabletopick'} `}>
                <div className="card__face card__face--front">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="card__face card__face--back"></div>
            </div>
        </div>
    );
}

Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    cardFound: PropTypes.bool.isRequired,
    clickCard: PropTypes.func.isRequired,
    availableToPick: PropTypes.bool.isRequired
}

export default Card;
