import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import BlogList from "./Assets/components/BlogList";
import blogPage from './Assets/pages/blogPage'; 

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Loginpage />} /> */}
      <Route path="/blogs" element={<BlogList />} />
    </Routes>
  </BrowserRouter>
  // <div>
  //   <BlogList/>
  // </div>
  );
}

export default App;
