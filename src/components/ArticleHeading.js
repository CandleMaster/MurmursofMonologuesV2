import React from 'react'
import NavBar from './NavBar'
import * as articleStyles from '../css/article.module.scss'

export default function ArticleHeading() {
    const customBurger = {
        marginTop:'-1.25rem',
        borderColor:'white'
    }
    return (
        <div>
            <div className={articleStyles.horizontal} id={articleStyles.topHorizontal} />
            <div className="hamburger" style={customBurger} />
            <div className={articleStyles.articleHeading}>
                <div className="logo">
                    <span id={articleStyles.murmurs}>MURMURS</span>
                    <span id={articleStyles.of}>OF</span>                
                    <span id={articleStyles.monologue}>MONOLOGUES</span>
                </div>
                <NavBar isBeige={false}/>
            </div>
        </div>
    )
}
