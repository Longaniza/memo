import React from 'react'
import "../styles/card.css";
import PropTypes from "prop-types";

const Card = ({ imageUrl, id,cardFound,clickCard,availableToPick }) => {
    return (
        <div className="card flipped">
            <div onClick={() => {clickCard(id)}} className={`overlay ${cardFound ? '' : 'cardhide'} ${availableToPick ? '' : 'notavailabletopick'}`}></div>
             <img src={imageUrl} alt="" />
        </div>
    )
}

Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}


export default Card
