import React from "react";
import GlobalStyle from "./globalStyles";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {
  return <BrowserRouter>
    <GlobalStyle />
    <Navbar />
    <Routes>
      <Route path="/" index element={<HomePage/>} />
      <Route path="/pricing" element={<PricingPage/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
    <Footer />
  </BrowserRouter>
}

export default App;
