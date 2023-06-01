import "./App.css";
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
