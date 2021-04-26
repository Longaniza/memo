import React from 'react'
import { Redirect } from 'react-router'


const MemoPage = ({history}) => {
    
    if(history.action !== 'REPLACE'){
        return <Redirect to='/'/>;
    }
    console.log(history.location);
    return (
        <div className="board">
            Memorame
        </div>
    )
}

export default MemoPage;
