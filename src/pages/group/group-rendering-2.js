import React from 'react'
import { graphql } from 'gatsby'

const GroupTwoPage = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node
  return (
    <>
      <h1>Photo Gallery</h1>
      {document.photo_gallery.map((galleryItem, index) => (
        <figure key={`gallery-item-${index}`}>
          <img src={galleryItem.photo.url} alt={galleryItem.photo.alt} />
          <figcaption>{galleryItem.caption}</figcaption>
        </figure>
      ))}
    </>
  )
}

export const query = graphql`
{
  prismic {
    allPages(uid: "test-page") {
      edges {
        node {
          photo_gallery {
            photo
            caption
          }
        }
      }
    }
  }
}
`

export default GroupTwoPage
