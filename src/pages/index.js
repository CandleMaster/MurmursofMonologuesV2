import React from "react";
import Heading from "../components/Heading"
import * as styles from "../css/index.module.scss"
import Momtitle from "../../public/Img/Momtitle.png"

export default function Home() {
  return (    
    <div>   
    <Heading ImgSrc={Momtitle} />
    <div className={styles.cursor}></div>  
    <div className={styles.bottomWrap}>
      <div className={styles.about}>
          <img className={styles.bird} id={styles.flyLeft} data-speed='10' src="./Img/flyLeft.png" alt="bird1" />
          <img className={styles.bird} id={styles.flyRight} data-speed='-14' src="./Img/flyRight.png" alt="bird2" />
      </div>
      <div className={styles.look}>A Blog. Take a <span className={styles.dive}>dive.</span></div>         
      <div className={styles.createdBy}>Created By Danni Jiang</div>   
    </div>
    </div> 
)}
