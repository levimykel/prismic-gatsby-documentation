import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from "prismic-reactjs"

const Page = ({ data }) => {
  const prismicContent = data.prismic.allPages.edges[0]
  if (!prismicContent) return null

  const document = prismicContent.node

  return (
    <>
      <h1 className="page-title">
        {RichText.asText(document.related_content.page_title)}
      </h1>
      <RichText
        render={document.related_content.description}
      />
    </>
  )
}

export const query = graphql`
  query {
    prismic {
      allPages(uid: "test-page") {
        edges {
          node {
            related_content {
              ... on PRISMIC_Linked_page {
                page_title
                description
              }
            }
          }
        }
      }
    }
  }
`

export default Page
