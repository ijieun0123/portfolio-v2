import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
        });
    }, []);

    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    );
}

export default App;
