import React from "react"
import { graphql } from "gatsby"

const GroupOnePage = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node
  return (
    <>
      <h1>References</h1>
      <ul>
        {document.references.map((reference, index) => (
          <li key={`reference-${index}`}>
            <a href={reference.link.url}>{reference.label}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export const query = graphql`
{
  prismic {
    allPages(uid: "group-page") {
      edges {
        node {
          references {
            link {
              _linkType
              ... on PRISMIC__ExternalLink {
                url
              }
            }
            label
          }
        }
      }
    }
  }
}
`

export default GroupOnePage