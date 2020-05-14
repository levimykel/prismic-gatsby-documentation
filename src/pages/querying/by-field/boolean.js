import React from 'react'
import { graphql } from 'gatsby'

const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node
	return (
		<pre>{JSON.stringify(document, null, 2)}</pre>
	)
}

export const query = graphql`
{
  prismic {
    allPages(where: { featured: false }) {
      edges {
        node {
          featured
          _meta {
            uid
            type
          }
          title
        }
      }
    }
  }
}
`

export default Page
