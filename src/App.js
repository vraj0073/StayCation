import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import TravelHistory from "./Components/TravelHistory";

function App() {
  return (
    <div className="App">
      <h3>Header</h3>
      <Routes>
        <Route path="th" element={<TravelHistory />} />
      </Routes>
    </div>
  );
}

export default App;
