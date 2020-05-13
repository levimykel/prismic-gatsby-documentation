import React from 'react'
import { graphql } from 'gatsby'
import { Date } from 'prismic-reactjs'

const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node

  const timestamp = Date(document.event_date)

  const formattedTimestamp = Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  }).format(timestamp)
  // Outputs as "Mar 24, 2020, 12:00:00 AM"


  return (
    <h3 className="formatted-timestamp">{ formattedTimestamp }</h3>
  )
}

export const query = graphql`
query {
  prismic {
    allPages(uid: "test-page") {
      edges {
        node {
          event_date
        }
      }
    }
  }
}
`

export default Page
