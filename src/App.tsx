
import "./App.scss";
import './reset.scss'

import Header from "./components/Header.tsx/Header";
import Main from "./components/Main/Main";
import HowToBuy from "./components/HowToBuy/HowToBuy";
import Mem from "./components/Mem/Mem";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <> 
    <Header />
    <Main />
    <HowToBuy/>
    <Mem/>
    <Footer/>
    </>

  );
}

export default App;
