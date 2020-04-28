import React from "react"
import { graphql, Link } from "gatsby"
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'

const GatsbyLink = (type, element, content, children, index) => {
  if (element.data.link_type === "Document") {
    return (
      <Link to={linkResolver(element.data)} key={element.data.id}>
        {content}
      </Link>
    )
  }
  return null
}

const Page = ({ data }) => {
  const prismicContent = data.prismic.allPages.edges[0]
  if (!prismicContent) return null

  const document = prismicContent.node

  return (
    <>
      <h1 className="page-title">
        {RichText.asText(document.title)}
      </h1>
      <RichText
        render={document.description}
        serializeHyperlink={GatsbyLink}
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
          title
          description
        }
      }
    }
  }
}
`

export default Page
