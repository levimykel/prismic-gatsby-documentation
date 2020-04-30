import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'


const Page = ({ data }) => {
  const prismicContent = data.prismic.allPages.edges[0]
  if (!prismicContent) return null

  const blogContent = prismicContent.node.body.map((slice, index) => {
    // Render the right markup for the given slice type

    // Text Slice
    if (slice.type === 'text') {
      return (
        <Fragment key={index}>
          {RichText.render(slice.primary.text, linkResolver)}
        </Fragment>
      )

      // Image Gallery Slice
    } if (slice.type === 'image_gallery') {
      const galleryContent = slice.fields.map((gallery, galleryIndex) => (
        <span key={galleryIndex}>
          <img
            src={gallery.gallery_image.url}
            alt={gallery.gallery_image.alt}
          />
          <p className="image-caption">
            {RichText.asText(gallery.image_caption)}
          </p>
        </span>
      ))
      return (
        <div className="image-gallery" key={`slice-${index}`}>
          <h2 className="gallery-title">
            {RichText.asText(slice.primary.name_of_the_gallery)}
          </h2>
          {galleryContent}
        </div>
      )

      // Return null by default
    }
    return null
  })

  return (
    <div className="blog-content">
      {blogContent}
    </div>
  )
}

export const query = graphql`
  query {
    prismic {
      allPages(uid: "test-page") {
        edges {
          node {
            body {
              ... on PRISMIC_PageBodyImage_gallery {
                type
                label
                primary {
                  name_of_the_gallery
                }
                fields {
                  gallery_image
                  image_caption
                }
              }
              ... on PRISMIC_PageBodyText {
                type
                label
                primary {
                  text
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
