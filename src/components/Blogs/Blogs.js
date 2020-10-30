import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import NavigationBar from '../Home/NavigationBar/NavigationBar';

const Blogs = () => {
    return (
        <div>
            <NavigationBar />
            <Container className="text-white text-center my-5 py-5">
                <h1>Blogs are <span className="text-success">Coming Soon!!</span></h1>
            </Container>
            <Footer />
        </div>
    );
};

export default Blogs;