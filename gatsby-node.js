
const path = require('path')
const _= require('lodash')

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query BlogTitle{
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        slug
                        tags
                    }
                }
            }
    }
    `)

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path:'/blogs/' + node.frontmatter.slug,
            component: path.resolve('./src/template/blog-template.js'),
            context:{slug: node.frontmatter.slug}
        })
    });
     data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path:'/collection/' + _.kebabCase(node.frontmatter.tags),
            component: path.resolve('./src/template/collection-template.js'),
            context:{tags: node.frontmatter.tags}
        })
        
 
    });
}


// exports.createPages = async ({ graphql, actions }) => {
//     const { data } = await graphql(`
//         query BlogTag{
//             allMarkdownRemark {
//                 nodes {
//                     frontmatter {
//                         tags
//                     }
//                 }
//             }
//     }
//     `)

//     data.allMarkdownRemark.nodes.forEach(node => {
//         actions.createPage({
//             path:'/collection/' + _.kebabCase(node.frontmatter.tags),
//             component: path.resolve('./src/template/collection-template.js'),
//             context:{tags: node.frontmatter.tags}
//         })
        
 
//     });
// }