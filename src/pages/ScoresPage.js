import React from 'react';

//Componente que representa la pagina de puntajes ordenados de menor a mayor segun el tiempo 
const ScoresPage = () => {
    //Obtencion de los tiempos y ordenamiento de estos por categoria
    const highScores = JSON.parse(localStorage.getItem("highScores")) || { 12: [], 24: [], 48: [] };
    for (const cards in highScores) {
        highScores[cards].sort(function (a, b) { return a.seconds - b.seconds });
    }
    return (
        <div>
            {
                Object.entries(highScores).map(([totalCards, registries], index) => {
                    return <div key={index}>
                        <h1>{totalCards} cartas</h1>
                        {registries.length ? registries.map(({ name, seconds }, index) => {
                            return <h1 key={index}>{`${name}   ${seconds}s`}</h1>
                        }) : <h1>N/A</h1>}
                    </div>;
                })
            }
        </div>
    )
}

export default ScoresPage;