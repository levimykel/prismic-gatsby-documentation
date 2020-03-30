import React from "react"
import { graphql } from "gatsby"
import { Date } from "prismic-reactjs"

const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node

  const dateString = Date(document.event_date)
// Outputs as "Fri Feb 17 2017 01:00:00 GMT+0100"

  return dateString
}

export const query = graphql`
query {
  prismic {
    allPages(uid: "test-page") {
      edges {
        node {
          publication_date
        }
      }
    }
  }
}
`

export default Page
