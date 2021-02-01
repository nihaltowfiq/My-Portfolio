import React from "react";
import Footer from "../../Footer/Footer";
import ContactMe from "../ContactMe/ContactMe";
import Header from "../Header/Header";
import MySkills from "../MySkills/MySkills";
import NavigationBar from "../NavigationBar/NavigationBar";
import SomeWorks from "../SomeWorks/SomeWorks";

const Home = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <React.StrictMode>
        <Header></Header>
        <MySkills></MySkills>
        <SomeWorks></SomeWorks>
        <ContactMe></ContactMe>
        <Footer></Footer>
      </React.StrictMode>
    </div>
  );
};

export default Home;
