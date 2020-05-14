import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'


const Page = ({ data }) => {
  const prismicContent = data.prismic.allPages.edges[0]
  if (!prismicContent) return null

  const document = prismicContent.node
  return (
    <a href={Link.url(document.media_link)}>View Image</a>
  )
}

export const query = graphql`
query {
  prismic {
    allPages(uid: "test-page") {
      edges {
        node {
          media_link {
            ... on PRISMIC__ImageLink {
              url
              _linkType
            }
          }
        }
      }
    }
  }
}
`

export default Page
