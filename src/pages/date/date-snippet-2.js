import React from "react"
import { graphql } from "gatsby"

const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node

  const dateString = new Date(document.date).toString();
  // Outputs as "Fri Feb 17 2017 01:00:00 GMT+0100"
  console.log(dateString)
  return dateString
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