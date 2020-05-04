import React from 'react'
import { graphql } from 'gatsby'
import { Date } from 'prismic-reactjs'

const Page = ({ data }) => {
	const document = data.prismic.allPages.edges[0].node

  const date = Date(document.publication_date)
	const formattedDate = Intl.DateTimeFormat('en-US',{
		year: 'numeric',
		month: 'short',
		day: '2-digit' }).format(date)
	// Outputs as "Mar 11, 2020"

	return (
		<h3 className="formatted-date">{ formattedDate }</h3>
	)
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
