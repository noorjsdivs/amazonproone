import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "./components/Banner";
import ProductFeed from "./components/ProductFeed";
import FooterTop from "./components/FooterTop";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const state = useLocation();
  useEffect(() => {
    state ? toast.success(state.state) : (state.state = "");
  }, [state]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fakeProduct() {
      const data = await axios.get("https://fakestoreapi.com/products");
      setProducts(data.data);
    }
    fakeProduct();
  }, []);
  return (
    <div>
      <Banner />
      <ProductFeed products={products} />
      <FooterTop />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Home;
