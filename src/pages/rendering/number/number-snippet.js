import React from 'react'
import { graphql } from 'gatsby'

const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node
  const price = document.price // A number
  return <p>{price}</p>
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
