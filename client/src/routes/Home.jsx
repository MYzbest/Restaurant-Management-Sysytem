import React from "react";
import Header from "../components/Header";
import AddResturant from "../components/AddResturant";
import ResturantList from "../components/ResturantList";

const Home = () => {
  return (
    <div>
      <Header />
      <AddResturant />
      <ResturantList />
    </div>
  );
};

export default Home;
