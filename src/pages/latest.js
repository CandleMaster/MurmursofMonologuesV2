import React from 'react'
import { Heading, Mailing, Seo, Panel } from "../components"
import * as styles from "../css/panel.module.scss"
import '../css/global.scss'

import {graphql} from "gatsby"

export default function Latest({ data }) {

    return (
        <div>
            <Seo 
            title="Latest"
            description="The latest essays whatever I fancy, occasionally culture, technology, books, algorithms, Shanghai etc. "
            />
            <Heading 
                logoAppear={(<div>
                    <div className='murmurs'>MURMURS</div>
                    <div className='of'>OF</div>
                    <div className='monologues'>MONOLOGUES</div>
                </div>)}
                isBeigeHead={true} 
                ImgSrc="Img/MoMtitle.png"
                onPageLatestHead={{color:'#B4B0B0'}}
                logoHidden={true}>
                    {/* <div className="overlay1" style={{zIndex:-3}}/>
        <div className="overlay2" style={{zIndex:-3}}/> */}
            <div className={styles.bottom}>
                <div className={styles.bottomWrap}>
                    {data.allMarkdownRemark.nodes.map((node,index)=> <Panel 
                            key={index} 
                            id={index} 
                            title={node.frontmatter.title} 
                            tags={node.frontmatter.tags} 
                            description={node.frontmatter.description}
                            slug={`/blogs/${node.frontmatter.slug}`}
                        />)}
                </div>
                    <Mailing />
                </div>
            </Heading>
        </div>
    )
}

export const query = graphql`
    query BlogInfo{
        allMarkdownRemark(filter: {frontmatter: {myid: {eq: 1}, genre: {eq: "essay"}}}) {
            nodes {
                frontmatter {
                    title
                    tags
                    description
                    slug
                    genre
                }
            }
        }
    }
`