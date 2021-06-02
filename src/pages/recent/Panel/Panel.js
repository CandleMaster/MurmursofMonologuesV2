import React from 'react'
import * as styles from "./panel.module.scss"


export default function Panel() {
    return (
        <div className={styles.bottom}>
            <div className={styles.bottomWrap}>
                <div className={styles.rectangle} id="rectangle2">
                    <div className={styles.panel}>
                        <div className={styles.topic}>
                            <h1> My master’s research project specifically </h1>
                            <h2> ESSAY SERIES | SHANGHAI SHENANEGANS </h2>
                        </div>
                        <div className={styles.description}>Everything You Need To Know</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
