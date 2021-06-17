import React from 'react'
import * as styles from "../css/index.module.scss"

export default function Ocean(prop) {
  const birdStyle ={
          transform:`translateX(${(500-prop.xPosition*14)/100}px) translateY(${(500-prop.yPosition*14)/100}px)`,
  }
  const birdStyle2 ={
          transform:`translateX(${(500+prop.xPosition*10)/100}px) translateY(${(500+prop.yPosition*10)/100}px)`,
  }
  return (
    <div className={styles.about}>
        <img className={styles.flyLeft} src="./Img/flyLeft.png" alt="bird1" style={birdStyle}/>
        <img className={styles.flyRight} src="./Img/flyRight.png" alt="bird2" style={birdStyle2} />
    </div>  
  )
}
