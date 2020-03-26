import React from "react"
import { graphql } from "gatsby"

const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node

	const date = new Date(document.data.date);

  const formattedDate = Intl.DateTimeFormat('en-US',{
    year: 'numeric',
    month: 'short',
    day: '2-digit' }).format(date);
  // Output in M d, Y format
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