import React from "react"
import { graphql } from "gatsby"
import { Date } from "prismic-reactjs"

const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node

  const timestamp = Date(document.event_date).toString()
// Outputs as "Fri Feb 17 2017 13:30:00 GMT+0100 (CET)"
  return timestamp
}

export const query = graphql`
query {
  prismic {
    allPages(uid: "test-page") {
      edges {
        node {
          event_date
        }
      }
    }
  }
}
`

export default Page
