import React from "react";
import "./Home.css";
import Products from "./Products";
import ContactUs from "./Contact";
import AboutUs from "./About_us";

const Home = () => {
  return (
    <>
      <Products />
      <AboutUs />
      <ContactUs />
    </>
  );
};

export default Home;
