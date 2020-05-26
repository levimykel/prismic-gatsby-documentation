import React from 'react'
import { graphql } from 'gatsby'
import { Date } from 'prismic-reactjs'

const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node

  const date = Date(document.publication_date)

  return date.toString()
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
