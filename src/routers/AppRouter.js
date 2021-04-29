import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import MemoPage from "../pages/MemoPage";
import StartRoutes from "./StartRoutes";

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/memorama" component={({history}) => history.action !== 'REPLACE' ? 
                                                            <Redirect to='/'/> : <MemoPage {...{history}} /> }  />
                    <Route path="/" component={StartRoutes} />
                </Switch>
            </div>
        </Router>

    )
}
