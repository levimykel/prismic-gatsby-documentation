import React from "react"
import { graphql } from "gatsby"

const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node

	const date = new Date(document.date);
	const formattedDate = Intl.DateTimeFormat('en-US',{
	  year: 'numeric',
	  month: 'short',
	  day: '2-digit' }).format(date);
	// Output in M d, Y format

  return (
    <h3 className="date">{document.date}</h3>
  )
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