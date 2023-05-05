import "./App.css";
import Counter from "./components/Counter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import IncreaseCounter from "./components/IncreaseCounter";

function App() {
  return (
    <div className="container">
      <div className="count">
        <Counter />
      </div>
      <IncreaseCounter />
      <DecreaseCounter />
      <IncreaseByTwoCounter />
    </div>
  );
}

export default App;
