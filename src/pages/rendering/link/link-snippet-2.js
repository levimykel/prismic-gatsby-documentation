import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'


const Page = ({ data }) => {
  const prismicContent = data.prismic.allPages.edges[0]
  if (!prismicContent) return null

  const document = prismicContent.node
  return (
    <a href={Link.url(document.document_link, linkResolver)}>Go to page</a>
  )
}

export const query = graphql`
query {
  prismic {
    allPages(uid: "test-page") {
      edges {
        node {
          document_link {
            ... on PRISMIC_Homepage {
              _meta {
                uid
              }
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
