import './App.css';
import Review from "./Assets/pages/Review";
import ReviewEdit from "./Assets/pages/ReviewEdit";
import ReviewWrite from "./Assets/pages/ReviewWrite";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/user-reviews" element={<Review/>}></Route>
          <Route path="/edit-review" element={<ReviewEdit/>}></Route>
          <Route path="/write-review" element={<ReviewWrite/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
