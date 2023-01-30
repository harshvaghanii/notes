import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/UI/Footer/Footer";
import Header from "./components/UI/Header/Header";
import LandingPage from "./Pages/Landingpage/LandingPage";
import MyNotes from "./Pages/Notes/MyNotes";

function App() {
    return (
        <Fragment>
            <Header />
            <main>
                <Switch>
                    <Route path={"/"} exact={true}>
                        <LandingPage />
                    </Route>
                    <Route path={"/notes"} exact={true}>
                        <MyNotes />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </Fragment>
    );
}

export default App;
