import React from 'react';
import { Link } from 'gatsby'
import * as styles from '../css/index.module.scss'
import * as aboutStyles from "../css/about.module.scss"
export default function About() {
    return (
        <div className={styles.aboutContent}>
        <h2 id={styles.aboutTitle}>Hand Me a Lighter</h2>
        <p>Lately, I have observed something strange. The girl I thought I evolved out of revealed herself in my writings. Where has she been, when I was transforming into someone comfortable? It seems I have forgotten a copy I've backed up, as I've been editing this document, perhaps for way too long.</p> 
        <p>With some detective work, I might get to know her. It is also a good practice, because I actually want to know you, to have this warm fuzzy feeling of connection.  The unknowableness of that cave tunnelling to you makes it all the more tantalizing. The actual analogy, my favourite one, is made by Haruki Murakami -- knowing someone is like lighting a cigarette by a dark cave. No matter how close you stand, you see only the entrance under flickers of light. How poignant is it that the unknowable you and I have crossed path just to see each other through a smoky veil of dar'ry lights. Though just pass me an e-cig now, a cigar, a torch, for crying out loud. How is it so hard to know and be known?
        </p>   
        <button id={styles.enter}><Link to='/latest'>ENTER </Link></button>
        </div>
    )
}
