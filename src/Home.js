import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "./components/Banner";
import ProductFeed from "./components/ProductFeed";

const Home = () => {
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
    </div>
  );
};

export default Home;
