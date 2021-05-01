import React from 'react'

const ScoresPage = () => {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || {12:[],24:[],48:[]};
    return (
        <div>
            {
                Object.entries(highScores).map(([totalCards,registries]) =>{
                    return <div>
                        <h1>{totalCards} cartas</h1>
                        {registries.length ? registries.map(({name,seconds}) => {
                            return <h1>{`${name}   ${seconds}s`}</h1>
                        }) : <h1>N/A</h1>}
                        </div>;
                } )
            }
        </div>
    )
}

export default ScoresPage;