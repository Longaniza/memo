import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import MemoPage from "../pages/MemoPage";
import StartRoutes from "./StartRoutes";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/memo/memorama" component={({ history }) => history.action !== 'REPLACE' ?
                        <Redirect to='/memo' /> : <MemoPage {...{ history }} />} />
                    <Route path="/" component={StartRoutes} />
                </Switch>
            </div>
        </BrowserRouter >

    )
}
