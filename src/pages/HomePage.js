import React from "react";
import Header from "../components/header/Header";
import Carousel from "../components/Slider/Carousel";
import Cooker from "../components/HotSale/components/Cooker";
import FamilyDevice from "../components/HotSale/components/FamilyDevice";
import Fan from "../components/HotSale/components/Fan";
import Blender from "../components/HotSale/components/Blender";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

function HomePage() {
  return (
    <div style={{ position: "relative" }}>
      <Header></Header>
      <Carousel></Carousel>
      <Cooker></Cooker>
      <FamilyDevice></FamilyDevice>
      <Blender></Blender>
      <Fan></Fan>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
    </div>
  );
}

export default HomePage;
