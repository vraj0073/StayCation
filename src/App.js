import "./App.css";
import BlogPage from "./Assets/pages/blogPage";
import SearchPage from "./Assets/pages/SearchPage";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import TravelHistory from "./Assets/pages/TravelHistory";
import WishList from "./Assets/pages/WishList";

import Host from "./components/Host";
import React from "react";
import RegistrationPage from "./components/RegistrationPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from "./components/Login";
import Forget_Password_Email from "./components/Forget_Password_Email";
import New_Password from "./components/New_Password";
import Customer from "./components/Customer";
import { EditProfile } from "./components/EditProfile";
import Home from "./components/Home";
import Review from "./Assets/pages/Review";
import ReviewEdit from "./Assets/pages/ReviewEdit";
import ReviewWrite from "./Assets/pages/ReviewWrite";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path='/home' element={<Home/>}></Route>
          <Route exact path='/Register' element={<RegistrationPage/>}></Route>
          <Route exact path='/Login' element={<Login/>}></Route>
          <Route path='/Profile' element={<Customer/>} ></Route>
          <Route path='/Editprofile' element={<EditProfile/>} ></Route>
          <Route path='/Resetpassword' element={<New_Password/>} ></Route>
          <Route path='/Forgetpassword' element={<Forget_Password_Email/>} ></Route>
          <Route path='/Logout' element={<Login/>} ></Route>
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/search" element={<SearchPage />} />
         <Route
            path="th"
            element={<TravelHistory email="vrajjadhav0073@gmail.com" />}
          />
          <Route path="wl" element={<WishList />} />
            <Route path="/user-reviews" element={<Review/>}></Route>
            <Route path="/edit-review" element={<ReviewEdit/>}></Route>
            <Route path="/write-review" element={<ReviewWrite/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
