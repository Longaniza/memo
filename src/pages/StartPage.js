import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function StartPage({ history }) {
    const [selected, setSelected] = useState(12);
    const difficulties = [
        {
            name: 'Pan comido',
            size: '12 cartas',
            cardsPerRowColumn: 12,
            message: 'Esta dificultad es lo mas facil que existe, es como quitarle un dulce a un bebe',
            imgUrl: 'https://media-exp1.licdn.com/dms/image/C560BAQGUAafs66wjYA/company-logo_200_200/0/1519899823694?e=2159024400&v=beta&t=d834c9lZTFOJL-x9fS3Ll-hqeUGJWEliXHN_IS3hTPw'
        },
        {
            name: 'Normalito',
            size: '24 cartas',
            cardsPerRowColumn: 24,
            message: 'Esta un poco mas dificil, pero aun es super pasable',
            imgUrl: 'https://media-exp1.licdn.com/dms/image/C560BAQGUAafs66wjYA/company-logo_200_200/0/1519899823694?e=2159024400&v=beta&t=d834c9lZTFOJL-x9fS3Ll-hqeUGJWEliXHN_IS3hTPw'
        },
        {
            name: 'Superhipermega dificil',
            size: '48 cartas',
            cardsPerRowColumn: 48,
            message: 'Esto ya es demasiado, quedaras traumado de tanta dificultad. God mode.',
            imgUrl: 'https://media-exp1.licdn.com/dms/image/C560BAQGUAafs66wjYA/company-logo_200_200/0/1519899823694?e=2159024400&v=beta&t=d834c9lZTFOJL-x9fS3Ll-hqeUGJWEliXHN_IS3hTPw'
        }
    ];
    return (<div className="difficulties">
        {
            difficulties.map((elem, index) => {
                return (<div key={index} className={`${selected === elem.cardsPerRowColumn ? 'selected' : ''} animate__animated animate__slideInLeft `} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} onClick={(e) => { setSelected(elem.cardsPerRowColumn) }}>

                    <div>
                        <img style={{ height: "20vh", width: "20vh" }} src={elem.imgUrl} alt="cardimg"></img>
                    </div>
                    <div>
                        <h1>{elem.name}</h1>
                        <h1>{elem.size}</h1>

                        <div className="text-align-left tooltip">
                            <i style={{ color: "#48466d" }} className="fas fa-question-circle"></i>
                            <span className="tooltiptext">{elem.message}</span>
                        </div>
                    </div>
                </div>);
            })
        }
        <div className="text-align-left">
                <i style={{ fontSize: "2rem" }} className="fas fa-angle-right" onClick={() => {
                    history.replace("/memo/memorama",{cardsPerRowColumn:selected});
                }}></i>
        </div>
        <div className="tooltip" style={{ textAlign: "center", marginTop: "50px" }}>
            <Link
                to="/memo/scores"
            >
                <i style={{ fontSize: "2rem" }} className="fas fa-stopwatch"></i>
            </Link>

            <div className="tooltiptext bottom">
                <span>Mejores tiempos</span>
            </div>

        </div>
    </div>);
}

StartPage.propTypes = {
    history: PropTypes.object.isRequired

}


export default StartPage;