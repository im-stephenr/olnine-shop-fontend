import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MainPage from "./Home/pages/MainPage";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import ShoppingCart from "./Cart/pages/ShoppingCart";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </Router>
    </React.Fragment>
  );
}

export default App;
