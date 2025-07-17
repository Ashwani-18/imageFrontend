import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login"
import Home from "./Pages/Home";
import Signup from "./Pages/Signup"
import ContactUs from "./Pages/ContactUs";
import ResultPage from "./Pages/ResultPage";
import BuyCredits from "./Pages/BuyCredits";
function App() {
  return (
     <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/signup" element = {<Signup/>}/>
          <Route path = "/contact" element = {<ContactUs/>}/>
          <Route path = "/buy-credits" element = {<BuyCredits/>}/>
          <Route path = "/result" element = {<ResultPage/>}/>
        </Routes>
      </BrowserRouter>
     </>
  );
}

export default App;
