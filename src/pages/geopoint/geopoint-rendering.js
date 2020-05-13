import React from 'react'
import { graphql } from 'gatsby'

const GeoPointPage = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node
  return (
    <>
      <h1>Coordinates</h1>
      <p>Latitude: {document.location.latitude}</p>
      <p>Longitude: {document.location.longitude}</p>
    </>
  )
}

export const query = graphql`
query {
  prismic {
    allPages(uid: "test-page") {
      edges {
        node {
          location
        }
      }
    }
  }
}
`

export default GeoPointPage
