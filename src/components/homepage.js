import React from 'react';
// import axios from 'axios';
import '../styles/homepage.scss';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='intro-paragraph'>
                HI, I'M <span className='highlight'>HARRY</span>, A VIETNAMESE JUNIOR DEVELOPER WHO
                LOVES TO PLAY AND EXPERIMENT WITH VISUALS.
                <br />
                WELCOME TO MY PLAYGROUND.
            </div>
        </div>
    )
}

export default function Homepage() {
    return (
        <div>
            <Banner />
        </div>
    )
}
