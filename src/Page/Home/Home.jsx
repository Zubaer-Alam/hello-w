import React from "react";
import { Nav } from "../../Component/Shared/NavBar/Nav";
import Slide from "../../Component/Slider/Slide";
import RnA from "../../Component/RegistrationAndApk/RnA";
import bg from "../../assets/pagebg.jpg";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center h-64"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 backdrop-blur-sm min-h-screen">
        <Nav></Nav>
        <Slide></Slide>
        <RnA></RnA>
      </div>
    </div>
  );
};

export default Home;
