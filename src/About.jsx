import React from 'react';
import web from '../src/images/login.svg';
import Common from './Common'

const About = () => {
    return (
        <>
            <Common heading1="Welcome to" strongHead="About Page" buttonTitle="About" imgSrc={web} visitSrc="/wabble"/>
        </>
    );
};

export default About;