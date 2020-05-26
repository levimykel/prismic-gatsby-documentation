import React from "react"
import { graphql } from "gatsby"
import {Link, RichText, Date} from 'prismic-reactjs';
import { linkResolver } from '../../../utils/linkResolver'


const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node
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
