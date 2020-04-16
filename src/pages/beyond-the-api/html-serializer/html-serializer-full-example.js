import React from "react"
import { graphql } from "gatsby"
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'
import htmlSerializer from '../../../utils/htmlSerializer'

const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node
  return (
    <>
        { RichText.render(document.description, linkResolver, htmlSerializer) }
        { RichText.render(document.title, linkResolver, htmlSerializer) }
    </>
  )
}

export const query = graphql`
  query {
    prismic {
      allPages(uid: "test-page") {
        edges {
          node {
            title
            description
          }
        }
      }
    }
  }
`

export default Page
