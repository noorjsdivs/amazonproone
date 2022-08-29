import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Home from "./Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import Signin from "./Signin";

function App() {
  let [recommendProduct, setRecommendProduct] = useState([]);
  useEffect(() => {
    async function fakeProduct() {
      const data = await axios.get("https://fakestoreapi.com/products");
      setRecommendProduct(data.data);
    }
    fakeProduct();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/cart"
          element={<Cart recommendProduct={recommendProduct} />}
        ></Route>
        <Route path="/signin" element={<Signin />}></Route>
      </Routes>

      <Footer />
      <FooterBottom />
    </BrowserRouter>
  );
}

export default App;
