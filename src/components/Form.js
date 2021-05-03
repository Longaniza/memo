import React, { useState } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
const Form = ({ totalSeconds, cardsPerRowColumn }) => {
    const history = useHistory();
    const [text, setText] = useState('');
    const saveTime = ({ name, seconds }) => {
        const highScores = JSON.parse(localStorage.getItem("highScores")) || { 12: [], 24: [], 48: [] };
        highScores[cardsPerRowColumn].push({ name, seconds });
        localStorage.setItem("highScores", JSON.stringify(highScores));
        history.replace("/");
    }
    const comebackStart = (e) => {
        e.preventDefault();
        history.replace("/");
    }
    const handleTextChange = (e) => {
        setText(e.target.value);
    }
    return (
        <div className={`${totalSeconds ? 'wingame animate__animated animate__backInDown' : 'normalgame'} modal modal-content`}>
            <h1>Has encontrado todas las cartas!!!</h1>
            <h1>Terminaste en {totalSeconds}s</h1>
            <h1>Quieres guardar tu tiempo en los mejores tiempos?</h1>
            <input onChange={handleTextChange} value={text}></input>
            <button onClick={() => { saveTime({ name: text, seconds: totalSeconds }) }}>Guadar tiempo y regresar al menu principal</button>
            <button onClick={comebackStart}>Regresar al menu principal</button>

        </div>
    )
}

Form.propTypes = {
    totalSeconds: PropTypes.number.isRequired,
    cardsPerRowColumn: PropTypes.number.isRequired
}
export default Form;