import React from 'react';
import Anime from 'animejs/lib/anime.es'

const Apple = () =>{
    Anime({
        targets: '.intro',
        translateX: 250,
        rotate: '1turn',
        backgroundColor: '#FFF',
        duration: 800
    });

    return(
        <>
        <div id="particles-js" className="intro">
            <h1>The Newer Version</h1>
            <video> 
                <source src="demo.mp4" type="video/mp4" />
            </video>
        </div>
        </>
    );
}

export default Apple