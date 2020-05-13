import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'


const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node
  return (
    <a href={Link.url(document.media_link, linkResolver)}>View Image</a>
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
