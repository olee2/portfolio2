import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div
      className="app"
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <Portfolio />
    </div>
  );
}

export default App;
