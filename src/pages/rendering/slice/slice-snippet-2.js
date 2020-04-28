import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'

const Page = ({ data }) => {
  const prismicContent = data.prismic.allPages.edges[0]
  if (!prismicContent) return null

  const pageContent = prismicContent.node.body.map((slice, index) => {
    // Render the right markup for the given slice type

    // FAQ Slice
    if (slice.type === 'faq') {
      const faqContent = slice.fields.map((faq, faqIndex) => (
        <div key={faqIndex}>
          {RichText.render(faq.question, linkResolver)}
          {RichText.render(faq.answer, linkResolver)}
        </div>
      ))
      return (
        <div className="faq" key={index}>
          {RichText.render(slice.primary.faq_title, linkResolver)}
          {faqContent}
        </div>
      )

      // Featured Items Slice
    } if (slice.type === 'featured_items') {
      const featuredContent = slice.fields.map((featuredItem, featuredIndex) => (
        <div key={featuredIndex}>
          <img src={featuredItem.image.url} alt={featuredItem.image.alt} />
          {RichText.render(featuredItem.title1, linkResolver)}
          {RichText.render(featuredItem.summary, linkResolver)}
        </div>
      ))
      return (
        <div className="featured-items" key={index}>
          {featuredContent}
        </div>
      )

      // Text Slice
    } if (slice.type === 'text') {
      return (
        <div className="text" key={index}>
          {RichText.render(slice.primary.text, linkResolver)}
        </div>
      )

      // Return null by default
    }
    return null
  })

  return (
    <div className="page-content">
      {pageContent}
    </div>
  )
}

export const query = graphql`
  query {
    prismic {
      allPages(uid: "test-page") {
        edges {
          node {
            _linkType
            body {
              ... on PRISMIC_PageBodyText {
                type
                label
                primary {
                  text
                }
              }
              ... on PRISMIC_PageBodyFaq {
                type
                label
                fields {
                  question
                  answer
                }
                primary {
                  faq_title
                }
              }
              ... on PRISMIC_PageBodyFeatured_items {
                type
                label
                fields {
                  image
                  title1
                  summary
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Page
