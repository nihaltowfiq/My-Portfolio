import React from 'react';
import Footer from '../../Footer/Footer';
import ContactMe from '../ContactMe/ContactMe';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import SomeWorks from '../SomeWorks/SomeWorks';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Header></Header>
            <SomeWorks></SomeWorks>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;