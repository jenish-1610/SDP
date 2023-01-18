import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign_up from "./Pages/Sign_up";
import Login from "./Pages/Login";
import Navbar from "./Components/navbar";
import Navbar1 from "./Components/navbar1";
import TopBanner from "./Components/topbanner";
import Error from "./Pages/Error";

function App() {
  return (
    <div>
      <TopBanner />
      <Navbar1 />
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<>hello</>} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<></>} />
          <Route path='/signup' element={<Sign_up />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
