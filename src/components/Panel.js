import React from 'react'
import * as styles from "../css/panel.module.scss"
import { Link } from 'gatsby'

export default function Panel(prop) {
    return (
        <div className={styles.rectangle}>
            <div className={styles.panel}>
                <div className={styles.topic}>
                    <Link to={prop.slug}><h1> {prop.title}</h1></Link>
                    <h2> {prop.tags} </h2>
                </div>
                <div className={styles.description}>{prop.description}</div>
            </div>
        </div>
    )
}

