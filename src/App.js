import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import BlogList from "./Assets/components/BlogList";
import BlogPage from './Assets/pages/BlogPage'; 
import Home from './Assets/pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<BlogPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
