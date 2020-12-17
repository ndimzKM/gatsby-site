import React from 'react'
import {graphql, Link} from 'gatsby'
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import Layout from '../components/layout'

export default function Blog({data}){
    return(
        <Layout>
            <div>
                <h1
                css={css`
                    display:inline;
                    border-bottom:1px solid;
                `

                }
                >
                Latest Articles
                </h1>
                <h4 css={css`margin-top:20px;`}>{data.allMarkdownRemark.totalCount} Posts</h4>
                {data.allMarkdownRemark.edges.map(({node}) => (
                <div key={node.id}>
                    <h3
                    css={css`
                        margin-bottom: ${rhythm(1 / 4)};
                    `}
                    >
                      <Link to={`/blog/${node.fields.slug}`}>
                        {node.frontmatter.title}{" "}
                        
                      </Link>
                      <span
                          css={css`
                            color: #bbb;
                          `}
                        >
                          — {node.frontmatter.date}
                        </span>
                    
                    </h3>
                    <p>{node.excerpt}</p>
                </div>
                ))}

            </div>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`