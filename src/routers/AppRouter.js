import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MemoPage from "../pages/MemoPage";
import StartRoutes from "./StartRoutes";

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/memorama" component={MemoPage} />
                    <Route path="/" component={StartRoutes} />
                </Switch>
            </div>
        </Router>

    )
}
