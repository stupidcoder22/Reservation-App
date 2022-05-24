import React from "react";
import Featured from "../../Components/featured/Featured";
import Header from "../../Components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        {/* <PropertyList/> */}
        {/* <h1 className="homeTitle">Homes guests love</h1> */}
        {/* <FeaturedProperties/> */}
        {/* <MailList/> */}
        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default Home;
