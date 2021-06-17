import React from 'react'

export default function Cursor(prop) {
  const cursorStyle={
    top:prop.yPosition,
    left:prop.xPosition
  }
    return (
            <h3 className={prop.cursorClass} style={cursorStyle} />
    )
     ;
};

