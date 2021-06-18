import React from 'react'
import { graphql } from 'gatsby'
import { Heading,Mailing,Panel, Seo } from "../components"
import logoImg from "../../public/Img/MoMtitle.png"
import * as styles from "../css/panel.module.scss"
import '../css/global.scss'

export default function Recent({ data }) {

    return (
        <div>
        <Seo 
            title="Latest"
            description={`A blog on whatever I fancy, occasionally culture, technology, books, algorithms, Shanghai etc. This is the ${data.allMarkdownRemark.nodes[0].frontmatter.tags} series`}
            />
            <Heading 
                logoAppear={(<div>
                    <div className='murmurs'>MURMURS</div>
                    <div className='of'>OF</div>
                    <div className='monologues'>MONOLOGUES</div>
                </div>)}
                isBeigeHead={true} 
                ImgSrc={logoImg} 
                onPageEssayHead={{color:'#B4B0B0'}}
                logoHidden={true}>

            <div className={styles.bottom}>
                <div className={styles.bottomWrap}>
                {/* <h1 className={styles.panel} id={styles.seriesName} style={{fontSize:'1.8rem'}}></h1> */}
                    {data.allMarkdownRemark.nodes.map((node,index)=> <Panel 
                            key={index} 
                            id={index} 
                            title={node.frontmatter.title} 
                            tags={node.frontmatter.gamsat? node.frontmatter.tags+' | '+node.frontmatter.gamsat:node.frontmatter.tags} 
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
  query MyQ2($tags: String) {
  allMarkdownRemark(filter: {frontmatter: {tags: {eq: $tags}}})  {
    nodes{
        frontmatter {
        title
        tags
        description
        slug
        gamsat
        }
    }
  }
}


`