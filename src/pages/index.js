import React from "react"
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs'

import Layout from "../components/layout"

const IndexPage = (props) => {
  const data = props.data.prismic.allHomepages.edges[0].node;
  console.log(data)
  if (!data) {
    return <div>no data</div>;
  }

  return(
    <Layout>
      <h1>{RichText.render(data.title)}</h1>
      <img src={data.intro.url} alt="Intro" />
      <h3>{RichText.render(data.content)}</h3>
    </Layout>
  )
}

export const query = graphql`
  {
    prismic {
      allHomepages(uid: null) {
        edges {
          node {
            title
            content
            intro
          }
        }
      }
    }
  }
`;


export default IndexPage

