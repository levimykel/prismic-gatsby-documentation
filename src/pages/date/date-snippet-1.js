import React from "react"
import { graphql } from "gatsby"

const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node

	const date = new Date(document.date);

  return date
}

export const query = graphql`
query {
  prismic {
    allPages(uid: "date-page") {
      edges {
        node {
          date
        }
      }
    }
  }
}
`

export default Page