import React from 'react'
import "../css/global.scss"
import  { Link } from 'gatsby'

export default function NavLi(prop) {


    return (

            <li className={prop.mouseOver? "liActive":undefined} style={prop.setStyle}>        
                <Link style ={{fontSize:'1rem'}} to={`/collection/${prop.tags}`}>{prop.item}</Link>
            </li>

    )
}
