import React from "react";
import ContactMe from "../ContactMe/ContactMe";
import Header from "../Header/Header";
import MySkills from "../MySkills/MySkills";
import SomeWorks from "../SomeWorks/SomeWorks";

const Home = () => {
  return (
    <>
      <Header></Header>
      <MySkills></MySkills>
      <SomeWorks></SomeWorks>
      <ContactMe></ContactMe>
    </>
  );
};

export default Home;
