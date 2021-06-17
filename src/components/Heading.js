import React, { useState } from 'react';
import NavBar from './NavBar'
import { Link } from 'gatsby'
import useMediaQuery from '@material-ui/core/useMediaQuery';



export default function Heading({ children, horizontalHead, logoHidden, logoAppear, ImgSrc, isBeigeHead, noiseDisplay, navStyleHead, onPageLatestHead, onPageEssayHead, onPagePoemHead, onPageAboutHead }) {
    const [clicked, setClicked ] = useState(false)
    const burgerStyle ={
        display:'none',
        cursor:'default'
    }
  const matches = useMediaQuery('(max-width:1140px)');

const logoStyle ={
    display:'none !important'
}

    return (
    <div>    
        <div className="overlay1" />
        <div 
            className={clicked? "horizontal-After":"topHorizontal"} 
            style={horizontalHead}
        />
        <div 
            className={clicked? "hamburger-After":"hamburger"} 
            onClick={()=>{setClicked(prev => !prev)}} 
            style={navStyleHead}
        />
        <div 
            className="noise" 
            style={noiseDisplay} 
        />
        <div className={clicked? "heading-After":"heading"}>
            <Link to='/latest'>
                <img 
                    className="logo" 
                    src={ImgSrc} 
                    alt="logo" 
                    style={{display: (clicked || (matches && logoHidden))? "none":'block'}}
                    // style={{display: (matches && logoHidden)? "none":'block'}}
                />
                   {!clicked && logoAppear}
                </Link>
            <NavBar 
                isBeige={isBeigeHead} 
                navStyle={navStyleHead} 
                onPageLatest={onPageLatestHead}
                onPagePoem={onPagePoemHead}
                onPageEssay={onPageEssayHead}
                onPageAbout={onPageAboutHead}
            />
        </div>
        <div style={ clicked? burgerStyle:undefined }>{children}</div>
    </div>
    )
}


