import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { linkResolver } from '../../../utils/linkResolver'


const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node

  const pageContent = document.body.map(function(slice, index){

    // Render the right markup for the given slice type
    // FAQ Slice
    if (slice.type === 'faq') {
      const faqContent = slice.fields.map(function(faq, faqIndex){
        return(
          <div key={faqIndex}>
            {RichText.render(faq.question, linkResolver)}
            {RichText.render(faq.answer, linkResolver)}
          </div>
        )
      })
      return(
        <div className="faq" key={index}>
          {RichText.render(slice.primary.faq_title, linkResolver)}
          {faqContent}
        </div>
      )

      // Featured Items Slice
    } else if (slice.type === 'featured_items') {
      const featuredContent = slice.fields.map(function(featuredItem, featuredIndex){
        return (
          <div key={featuredIndex}>
            <img src={featuredItem.image.url} alt={featuredItem.image.alt}/>
            {RichText.render(featuredItem.title, linkResolver)}
            {RichText.render(featuredItem.summary, linkResolver)}
          </div>
        )
      })
      return (
        <div className="featured-items" key={index}>
          {featuredContent}
        </div>
      )

      // Text Slice
    } else if (slice.type === 'text') {
      return (
        <div className="text" key={index}>
          {RichText.render(slice.primary.rich_text, linkResolver)}
        </div>
      )

      // Return null by default
    } else {
      return null
    }
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
                answer
                question
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
