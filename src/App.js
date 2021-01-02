import './App.css';
import Header from "./components/Header/Header";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import Footer from "./components/Footer/Footer";

export default function App() {
    return (
        <div className="app">
            <Header />
            <FirstSection />
            <SecondSection />
            <Footer />
        </div>
    );
}

