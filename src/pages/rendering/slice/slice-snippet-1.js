import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { linkResolver } from '../../../utils/linkResolver'


const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node

  const blogContent = document.body.map(function(slice, index){

    // Render the right markup for the given slice type

    // Text Slice
    if (slice.type === 'text') {
      return RichText.render(slice.primary.text, linkResolver)

      // Image Gallery Slice
    } else if (slice.type === 'image_gallery') {
      const galleryContent = slice.fields.map(function(gallery, imageIndex){
        return (
          <span>
            <img src={gallery.gallery_image.url} alt={gallery.gallery_image.alt} key={imageIndex}/>
            <p className="image-captions">
              {RichText.asText(gallery.image_captions)}
            </p>
          </span>
        )
      })
      return (
        <div className="image-gallery" key={index}>
          <h2 className="gallery-title">
            {RichText.asText(slice.primary.name_of_the_gallery)}
          </h2>
          {galleryContent}
        </div>
      )

      // Return null by default
    } else {
      return null
    }
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
                image_captions
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
