import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import SomeWorks from '../SomeWorks/SomeWorks';

const Home = () => {
    return (
        <div style={{backgroundColor:'#343A40'}}>
            <NavigationBar></NavigationBar>
            <Header></Header>
            <SomeWorks></SomeWorks>
            <Footer></Footer>
        </div>
    );
};

export default Home;