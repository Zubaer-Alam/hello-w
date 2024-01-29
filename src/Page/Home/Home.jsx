import React from "react";
import { Nav } from "../../Component/Shared/NavBar/Nav";
import Slide from "../../Component/Slider/Slide";

import bg from "../../assets/pagebg.jpg";
import RnA from "../../Component/ActionButtons/RnA";
import Menual from "../../Component/DMenual/Menual";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center max-h-fit"
     
    >
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
         style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="absolute inset-0 min-h-screen">
        <Nav></Nav>
        <div className="mt-20">
          <Slide></Slide>
          <RnA></RnA>
          <Menual></Menual>
        </div>
      </div>
    </div>
  );
};

export default Home;
