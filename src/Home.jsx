import React from 'react';
import web from '../src/images/login.svg';
import Common from './Common'

const Home = () => {
    return(
        <>
          <Common heading1="Grow your Business with" strongHead="Krishna" buttonTitle="Get Started" imgSrc={web} visitSrc="/service" />
        </>
    );
};

export default Home;