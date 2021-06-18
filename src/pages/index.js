import React, { useState, useEffect } from "react";
import { Heading, Ocean, Cursor } from "../components"
import * as styles from "../css/index.module.scss"
import * as cursorStyles from '../css/cursor.module.scss'
import "../css/global.scss"
import { Link } from 'gatsby';

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);
  }, []);

const [mouseEffects, setMouseEffects] = useState(false)
function handleMouseEffect(){
  setMouseEffects(true)
}
function handleMouseEffectOut(){
  setMouseEffects(false)
}
  return (    
    <div className={styles.indexBody}>   
        {/* <Seo 
            title="Home"
            description="A blog on whatever I fancy, occasionally culture, technology, books, algorithms, Shanghai etc. "
            /> */}
      <Cursor 
        cursorClass={mouseEffects? cursorStyles.cursor2 : cursorStyles.cursor1} 
        xPosition={position.x} 
        yPosition={position.y} 
      />
      <Heading 
        isBeigeHead={true} 
        ImgSrc="Img/Momtitle.png" 
        onPageAboutHead={{color:'#B4B0B0'}}
      >
        <div className={styles.overlay1} style={{zIndex:-3}}/>
        <div className={styles.overlay2} style={{zIndex:-3}}/>
        <Link to="/about" className={styles.aboutButton} onMouseOver={handleMouseEffect} onMouseOut={handleMouseEffectOut}>About</Link>
        <div className={styles.bottomWrap}>
          <Ocean xPosition={position.x} yPosition={position.y}/>
          <div className={styles.createdBy}>Created By Danni Jiang</div>   
          <div className={styles.look}>A Blog. Take a <span className={styles.dive}>dive.</span></div> 
        </div>
      </Heading>
    </div> 
)}

