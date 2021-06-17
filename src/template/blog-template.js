import React from 'react'
import { graphql } from 'gatsby'
import Heading from '../components/Heading'
import Mailing from '../components/Mailing'
import Seo from '../components/SEO'
import * as articleStyles from '../css/article.module.scss'
import  '../css/global.scss'

export default function blogTemplate({ data }) {
    const { html } = data.markdownRemark
    const { title, tags, date, description } = data.markdownRemark.frontmatter
    const mailPosition = {
      position:'relative', 
      backgroundColor:'#dfdac8',
      color:'white'
    }
    const templateStyle = {
      backgroundColor:'white',
      marginTop:'-1.15rem', 

    }

    return (
        <div style={templateStyle}>
        <Seo  
          title={title}
          description={description}
          />
            <Heading  
              logoAppear={(<div>
                  <div className='murmurs'>MURMURS</div>
                  <div className='of'>OF</div>
                  <div className='monologues'>MONOLOGUES</div>
              </div>)}      
              logoHidden={true}
              isBeigeHead={true}
              ImgSrc="../Img/mums.png"
              noiseDisplay={{display:'none'}}
              navStyleHead={{marginTop:'.25rem'}}
              horizontalHead={{backgroundColor:'#dfdac8', opacity:0.2, zIndex:3}}
            >

            <div className={articleStyles.content}>
            <div className={articleStyles.articleTitle}>{title}</div>
            <div className={articleStyles.tags}>{tags}</div>
            <div className={articleStyles.date}>{date}</div>
            <div className={articleStyles.socials}>
                    <img src="../Img/facebook.png" alt="" />
                    <img src="../Img/twitter.png" alt="" />
            </div>
            <div className={articleStyles.article} dangerouslySetInnerHTML={{__html:html}}></div>
            </div>
            <Mailing position={mailPosition} fontColor={{color:'white'}}/>
            </Heading>
    </div>
    )
}

export const query = graphql`
  query MyQ($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      title
      tags
      date
      description
    }
    html
  }
}


`
