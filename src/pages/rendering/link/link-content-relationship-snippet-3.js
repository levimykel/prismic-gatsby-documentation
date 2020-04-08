import React from "react"
import { graphql } from "gatsby"
import {Link, RichText, Date} from 'prismic-reactjs';
import { linkResolver } from '../../../utils/linkResolver'


const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node

  return (
    <a href={Link.url(document.media_link, linkResolver)}>View Image</a>
  )
}

export const query = graphql`
query {
  prismic {
    allPages {
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
