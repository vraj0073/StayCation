import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import TravelHistory from "./Components/TravelHistory";
import WishList from "./Components/WishList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="th"
            element={<TravelHistory email="vrajjadhav0073@gmail.com" />}
          />
          <Route path="wl" element={<WishList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
