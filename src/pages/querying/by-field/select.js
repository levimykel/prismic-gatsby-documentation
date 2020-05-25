import React from 'react'
import { graphql } from 'gatsby'

const Page = ({ data }) => {
  const allPages = data.prismic.allPages
	return (
		<pre>{JSON.stringify(allPages, null, 2)}</pre>
	)
}

export const query = graphql`
{
  prismic {
    allPages(where: { select: "Option 2" }) {
      edges {
        node {
          select
          _meta {
            uid
            type
          }
        }
      }
    }
  }
}
`

export default Page
