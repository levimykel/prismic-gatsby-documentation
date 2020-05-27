import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'

const Page = ({ data }) => {
  const prismicContent = data.prismic.allPages.edges[0]
  if (!prismicContent) return null

  const document = prismicContent.node

  if(document.generic_link._linkType === 'Link.document') {
    return (
      <a href={Link.url(document.generic_link, linkResolver)}>Go to page</a>
    )
  } if (document.generic_link._linkType === 'Link.web') {
    let target = {}
    if (document.generic_link.target) {
      target = {
        target: document.generic_link.target,
        rel: "noopener"
      }
    }
    return (
      <a href={Link.url(document.generic_link)} {...target}>Web Link</a>
    )
  } if (document.generic_link._linkType === 'Link.image') {
    return (
      <a href={Link.url(document.generic_link)}>View Image</a>
    )
  } if (document.generic_link._linkType === 'Link.file') {
    return (
      <>
        Click <a href={Link.url(document.generic_link)}>here</a> to download the file.
      </>
    )
  }
}

export const query = graphql`
  query {
    prismic {
      allPages(uid: "test-page") {
        edges {
          node {
            generic_link {
              ... on PRISMIC_Linked_page {
                _linkType
                _meta {
                  uid
                }
              }
              ... on PRISMIC__ExternalLink {
                _linkType
                url
              }
              ... on PRISMIC__ImageLink {
                _linkType
                url
              }
              ... on PRISMIC__FileLink {
                _linkType
                url
              }
              _linkType
            }
          }
        }
      }
    }
  }
`

export default Page
