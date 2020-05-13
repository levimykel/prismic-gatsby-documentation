import React from 'react'
import { graphql } from 'gatsby'
import Moment from 'moment'
import { Date } from 'prismic-reactjs'


const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node

  const date = Date(document.publication_date)
  const formattedDate = Moment(date).format('LL')
  // Outputs as "March 11, 2020"

  console.log(formattedDate)

  return formattedDate
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
