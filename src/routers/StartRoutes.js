import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ScoresPage from '../pages/ScoresPage';
import StartPage from '../pages/StartPage';


const StartRoutes = () => {
    return (
        <>
            <div>
                <Switch>
                    <Route exact path="/" component={StartPage} />
                    <Route exact path="/scores" component={ScoresPage} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </>
    )
}
export default StartRoutes;