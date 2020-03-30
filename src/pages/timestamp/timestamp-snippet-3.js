import React from "react"
import { graphql } from "gatsby"
import Moment from "moment"
import { Date } from "prismic-reactjs"


const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node

  const timestamp = Date(document.event_date);
  const formattedDate = Moment(timestamp).format("lll")
// Outputs as "Feb 17, 2017 1:30 PM"

  console.log(formattedDate)

  return formattedDate
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
