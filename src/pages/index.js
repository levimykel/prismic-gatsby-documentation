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
      <h1>{RichText.render(data.homepagetitle)}</h1>
      <img src={data.pageintro.url}  />
      <h3>{RichText.render(data.pagecontent)}</h3>
    </Layout>
  )
}

export const query = graphql`
  {
    prismic {
      allHomepages(uid: null) {
        edges {
          node {
            homepagetitle
            pagecontent
            pageintro
          }
        }
      }
    }
  }
`;


export default IndexPage

