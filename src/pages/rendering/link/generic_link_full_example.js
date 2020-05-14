import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'prismic-reactjs'

const Page = ({ data }) => {
  const prismicContent = data.prismic.allPages.edges[0]
  if (!prismicContent) return null

  const document = prismicContent.node

  if(document.page_link._linkType === 'Link.image') {
    return (
      <a href={Link.url(document.media_link)}>View Image</a>
    )
  }
}

export const query = graphql`
  query {
    prismic {
      allPages(uid: "test-page") {
        edges {
          node {
            page_link {
              _linkType
              ... on PRISMIC_Page {
                title
                description
                _meta {
                  uid
                }
              }
              ... on PRISMIC__ExternalLink {
                url
              }
              ... on PRISMIC__ImageLink {
                _linkType
                url
                height
                name
                width
                size
              }
              ... on PRISMIC__FileLink {
                url
                size
                name
              }
            }
          }
        }
      }
    }
  }
`

export default Page
