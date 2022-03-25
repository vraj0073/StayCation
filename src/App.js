import './App.css';
import BlogList from "./Assets/components/BlogList";
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/userlist" element={<Userlist />} />
          <Route path="/user/:id" element={<UserProfile />} />
        </Routes>
    </BrowserRouter>
     <BlogList/>
    </div>
  );

}

export default App;
