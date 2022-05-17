import "./App.css";
import Cards from "./components/Cards";
import Graphic from "./components/Graphic";
import Header from "./components/Header";
import Selector from "./components/Selector";

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <Selector />
      <Graphic />
    </div>
  );
}

export default App;
