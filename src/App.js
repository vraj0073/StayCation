import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import BlogPage from './Assets/pages/BlogPage'; 
import SearchPage from './Assets/pages/SearchPage';
import Home from './Assets/pages/Home';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/search" element={<SearchPage />} />

    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
