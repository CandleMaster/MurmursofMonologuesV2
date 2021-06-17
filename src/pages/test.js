import React, { useState } from 'react'
import { CSSTransitionGroup } from 'react-transition-group';
import '../css/global.scss'

export default function Test() {
    const items= ['MURMURS',"OF","MONOLOGUES"]

    const [test, setTest] = useState(false)

    return (
        <div>
            <button onClick={() => setTest(true)}>Hullo</button>
             <CSSTransitionGroup 
                unmountOnExit
                className='myNode'
                classNames='my-node' 
                in={test} 
                timeout={500}
            >
                    <div>hullo</div>
            </CSSTransitionGroup>
        </div>
    )
}

//{items.map(item =>