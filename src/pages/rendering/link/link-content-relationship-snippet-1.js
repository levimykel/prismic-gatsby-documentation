import React from "react"
import { graphql } from "gatsby"
import {Link} from 'prismic-reactjs';
import { linkResolver } from 'gatsby-source-prismic-graphql'


const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node

  var target = {};
  if (document.web_link.target) {
    target = {
      target: document.web_link.target,
      rel: "noopener"
    };
  }

  return (
    <a href={Link.url(document.web_link, linkResolver)} {...target}>Web Link</a>
  );

}

export const query = graphql`
query {
  prismic {
    allPages(uid: "test-page") {
      edges {
        node {
          web_link {
            _linkType
            ... on PRISMIC__ExternalLink {
                _linkType
                url
            }
          }
        }
      }
    }
  }
}
`

export default Page
