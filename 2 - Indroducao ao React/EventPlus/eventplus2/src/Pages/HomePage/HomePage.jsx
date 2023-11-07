import React from "react";
import "./HomePage.css";
import Title from "../../Components/Title/Title";
import Banner from "../../Components/Banner/Banner";
import MainContent from "../../Components/MainContent/MainContent";
import VisionSection from "../../Components/VisionSection/VisionSection";


const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <MainContent>
        <VisionSection></VisionSection>
      </MainContent>
      
      <Title titleText="HomePage" color="" batataClass="margin-above"/>
      
    </div>
  );
};

export default HomePage;
