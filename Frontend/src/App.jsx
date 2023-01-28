import { Fragment } from "react";
import Footer from "./components/UI/Footer/Footer";
import Header from "./components/UI/Header/Header";
import LandingPage from "./Pages/Landingpage/LandingPage";

function App() {
    return (
        <Fragment>
            <Header />
            <main style={{ minHeight: "90vh" }}>
                <LandingPage />
            </main>
            <Footer />
        </Fragment>
    );
}

export default App;
