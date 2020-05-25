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
    allPages(where: {location_near: {dist: 2, lat: 48.8574863, lng: 2.3536034}}) {
      edges {
        node {
          location
          title
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
