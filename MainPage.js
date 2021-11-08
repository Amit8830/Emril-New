import React from "react";
import Home from "./pages/Home";
import CarouselContainer from "./components/CarouselContainer";
import Repair from "./repair/Repair";
import Card from "./components/slidee3";
import Saloon from "./components/Saloon/saloon";

const MainPage = () => {
  return (
    <>
      <CarouselContainer />
      <Home />
      <Repair />
      <Card />
      <Saloon />
    </>
  );
};

export default MainPage;
