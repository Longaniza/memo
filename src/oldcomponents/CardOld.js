import React from 'react'
import PropTypes from "prop-types";

const CardOld = ({ imageUrl, id, flipped, handleSelectCard, pairID, founded }) => {
    return (
        <div onClick={() => handleSelectCard(id)} className={`card ${flipped || founded ? "flipped" : ""}`}>
            <div className="overlay"></div>
            <img src={imageUrl} alt="" />
        </div>
    )
}

CardOld.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    flipped: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    handleSelectCard: PropTypes.func.isRequired,
    pairID: PropTypes.string.isRequired,
    founded: PropTypes.bool.isRequired
}

/* {
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
  } */
export default CardOld;