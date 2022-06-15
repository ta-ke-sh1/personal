import React from 'react';
import '../styles/navbar.scss';
import $ from 'jquery';

export default class Navbar extends React.Component {
    render() {
        return (
            <>
                <div className='navBar'>
                    <a href="/">
                        <div className='logo'></div>
                    </a>
                    <a href="/projects/add" className='nav-btn'>Contact</a>
                    <a href="/projects" className='nav-btn'>About</a>
                    <a href="/user/add" className='nav-btn'>Drawings</a>
                    <a href="/user/add" className='nav-btn'>Playful Stuffs</a>
                    <div id='circle'></div>
                </div>
            </>

        )
    }
}

$(function () {
    $(".nav-btn").hover(
        function () {
            $(this).addClass("hover");
        },
        function () {
            $(this).removeClass("hover");
        }
    );

    $('hover').on('mouseover', (event) => {
        $(this).css({
            color: 'crimson'
        });
    })
})