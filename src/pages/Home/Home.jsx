import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Product from "./Product";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <div className="home__content">
        <Slider />
        <Product />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
