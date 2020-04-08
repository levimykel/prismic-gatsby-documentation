import React from "react"
import { graphql } from "gatsby"

const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node

  return (
    <>
      <h3 className="price">${document.price}</h3>
    </>
  )
}

export const query = graphql`
query {
  prismic {
    allPages(uid: "test-page") {
      edges {
        node {
          price
        }
      }
    }
  }
}
`

export default Page