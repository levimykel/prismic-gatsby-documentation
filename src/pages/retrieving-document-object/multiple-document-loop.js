import React from "react"
import { graphql } from "gatsby"

const MultiPage = ({ data }) => {
  const edges = data.prismic.allPages.edges
  return (
    <div>
      {edges.map(edge => {
        const document = edge.node
        return (
          <>
            <h1>{document.title[0].text}</h1>
            <span>{document.date}</span>
          </>
        )
      })}
    </div>
  )
}

export const query = graphql`
query {
  prismic {
    allPages {
      edges {
        node {
          title
          date
        }
      }
    }
  }
}
`

export default MultiPage