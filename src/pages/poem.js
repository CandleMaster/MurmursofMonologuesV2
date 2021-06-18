import React, { useState, useEffect } from 'react'
import { Heading,Mailing,PoemBlock } from '../components'
import * as poemStyles from '../css/poem.module.scss'
import { graphql } from 'gatsby'
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Poem({data}) {
    const node = data.allMarkdownRemark.nodes
    const [offsetY, setOffsetY ] = useState(0)

    useEffect(() => {
        const handleScroll = () =>  setOffsetY(window.pageYOffset)
        window.addEventListener("scroll", handleScroll) ;
        return () => window.removeEventListener("scroll",handleScroll)
    },[]);

    const sm = useMediaQuery('(max-width:500px)')
    return (
        <div className={poemStyles.body}>
            <div className={poemStyles.vertical} />
            <Heading 
                onPagePoemHead={{color:'#B4B0B0'}}
                navStyleHead={{marginTop:'5.5rem'}}
                noiseDisplay={{display:'none'}}
                isBeigeHead={true} 
                className={poemStyles.heading2} 
                ImgSrc="Img/Momtitlev3.png" 
            >
                <div className={poemStyles.container}>
                    <div className={poemStyles.bottom}>         
                        <PoemBlock 
                            poemId={poemStyles.poem1} 
                            title={node[0].frontmatter.title} 
                            poem={node[0].html}
                        />
                            <div className={poemStyles.poemWrap} >
                                <div id={poemStyles.rat} >
                                    {sm? <img style={{transform:`translateX(${offsetY*-.2}px)`}} src="Img/rats2.png" alt="" />:<img style={{transform:`translateX(${offsetY*-.8}px)`}} src="Img/rats2.png" alt="" />}
                                
                                </div>
                                <PoemBlock 
                                    poemId={poemStyles.poem2} 
                                    title={node[1].frontmatter.title} 
                                    poem={node[1].html}
                                    />
                            </div>
                    </div>
                </div>
                <Mailing position={{position:'relative'}}/>
            </Heading>
        </div>
    )
}

export const query = graphql`
    query nfo{
        allMarkdownRemark(filter: {frontmatter: {genre: {eq: "poem"}}}) {
            nodes {
                frontmatter {
                    title
                    genre
                }
                html
            }
        }
    }
`