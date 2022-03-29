import { Container } from "react-bootstrap";
import "./App.css";
import BlogPage from "./Assets/pages/blogPage";
import SearchPage from "./Assets/pages/SearchPage";
import Home from "./Assets/pages/Home";
import Booking from "./Assets/pages/Booking";
import Room from "./Assets/pages/Room";
import ScrollToTop from "./utils/ScrollToTop";

import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import TravelHistory from "./Assets/pages/TravelHistory";
import WishList from "./Assets/pages/WishList";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route
            path="th"
            element={<TravelHistory email="vrajjadhav0073@gmail.com" />}
          />
          <Route path="wl" element={<WishList />} />
          <Route path="/rooms/:roomId" exact element={<Room />}></Route>
          <Route path="/book" element={<Booking />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
