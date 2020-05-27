import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'

const Page = ({ data }) => {
  const prismicContent = data.prismic.allPages.edges[0]
  if (!prismicContent) return null

  const document = prismicContent.node

  let target = {}
  if (document.web_link.target) {
    target = {
      target: document.web_link.target,
      rel: 'noopener',
    }
  }

  return (
    <>
      <a href={Link.url(document.document_link, linkResolver)}>Go to page</a>
      <a href={Link.url(document.media_link)}>View Image</a>
      <a href={Link.url(document.web_link)} {...target}>Web Link</a>
    </>
  )
}

export const query = graphql`
  query {
    prismic {
      allPages(uid: "test-page") {
        edges {
          node {
            document_link {
              _linkType
              ... on PRISMIC_Page {
                _meta {
                  uid
                }
              }
            }
            web_link {
              _linkType
              ... on PRISMIC__ExternalLink {
                _linkType
                url
              }
            }
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
