import React, { useState }  from 'react';
import NavLi from "./NavLi"
import { Link } from 'gatsby';
import lodash from 'lodash'


export default function NavBar(prop) {

    const essaySeries = ["SHITS AND GIGGLES","GAMSAT","BOOK REVIEW"]
    
    const [isMouseOver,setMouseOver] = useState(false)
    function handleMouseOver(){
        setMouseOver(true)
        }
    function handleMouseOut(){
        setMouseOver(false)
        }

    return (
        <nav className={prop.isBeige ? "navBeige" : "navWhite"} style={prop.navStyle}>   
            <ul><Link to="/latest" style={prop.onPageLatest}>LATEST</Link></ul>
            <ul><Link to="/" style={prop.onPageAbout} >ABOUT</Link></ul>
            <ul><Link to="/poem" style={prop.onPagePoem}>POEMS</Link></ul>
            <ul onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> <Link to="/latest" style={prop.onPageEssay}>ESSAY
            SERIES
                {essaySeries.map((sery,index) => <NavLi 
                    mouseOver={isMouseOver} 
                    item={sery} 
                    tags={lodash.kebabCase(sery.replace('&','AND'))}
                    setStyle={{transitionDelay:String(index*0.1)+'s'}}
                    />)}
            </Link></ul>
        </nav>
    )
}

