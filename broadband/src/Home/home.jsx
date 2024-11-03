import React from 'react';
import Navbar from '../components/navbar';

const Home = () => {
    return (
        <>
        <Navbar />
        <div>
            <h1 className='text-xl font-bold'>Welcome to the Home Page</h1>
            <p>This is the home page of the broadband application.</p>
        </div>
        </>
    );
};

export default Home;