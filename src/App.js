import "./App.css";
import Discover from "./Components/Discover/Discover";
import Footer from "./Components/Footer/Footer";
import FutureCollection from "./Components/FutureCollection/FutureCollection";
import Main from "./Components/Main/Main";
import Mint from "./Components/Mint/Mint";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Discover />
      <Mint />
      <Main />
      <FutureCollection />
      <Footer />
    </>
  );
}

export default App;
