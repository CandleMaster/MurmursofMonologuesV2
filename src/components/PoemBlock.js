import React from 'react'


export default function PoemBlock(prop) {
    return (
        <div id={prop.poemId}>
            <h2>{prop.title}</h2>
            <div dangerouslySetInnerHTML={{__html:prop.poem}} />
        </div>
    )
}
