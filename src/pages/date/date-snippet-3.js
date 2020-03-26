import React from "react"
import { graphql } from "gatsby"
import Moment from "moment"


const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node

	const date = new Date(document.date);
  const formattedDate = Moment(date).format("LL");
  // Outputs as "February 17, 2017"
  console.log(formattedDate)

  return formattedDate
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