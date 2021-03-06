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
    <a href={Link.url(document.page_link, linkResolver)} {...target}>Web Link</a>
  )
}

export const query = graphql`
query {
  prismic {
    allPages(uid: "test-page") {
      edges {
        node {
          page_link {
            _linkType
          }
        }
      }
    }
  }
}
`

export default Page
