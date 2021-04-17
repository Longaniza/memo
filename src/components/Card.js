import React from 'react'
import "../styles/card.css";
import PropTypes from "prop-types";

const Card = ({ imageUrl, id, flipped, handleSelectCard, pairID }) => {
    return (
        <div onClick={() => handleSelectCard(id)} className={`card ${flipped ? "flipped" : ""}`}>
            <div className="overlay"></div>
            <img src={imageUrl} alt="" />
        </div>
    )
}

Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    flipped: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    handleSelectCard: PropTypes.func.isRequired,
    pairID: PropTypes.string.isRequired
}


export default Card
