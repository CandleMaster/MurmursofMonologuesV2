import React from 'react';
import NavBar from './NavBar'
import "../css/global.scss"

export default function Heading(prop) {
    return (
    <div>    
        <div className="overlay1"></div>
        <div className="horizontal" id="topHorizontal"></div>
        <div className="hamburger"></div>
        <button className="aboutButton"></button>
        <div className="noise"></div>
        <div className="heading">
            <img className="logo" src={prop.ImgSrc} alt="logo"/>
            <NavBar />
        </div>
    </div>
    )
}
