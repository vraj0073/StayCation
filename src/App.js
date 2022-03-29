import "./App.css";
import BlogPage from "./Assets/pages/blogPage";
import SearchPage from "./Assets/pages/SearchPage";
import Home from "./Assets/pages/Home";

import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import TravelHistory from "./Assets/pages/TravelHistory";
import WishList from "./Assets/pages/WishList";
import Host from "./components/Host";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route
            path="th"
            element={<TravelHistory email="vrajjadhav0073@gmail.com" />}
          />
          <Route path="wl" element={<WishList />} />
        </Routes>
        <Host/>
      </BrowserRouter>
    </div>
  );
}
export default App;
