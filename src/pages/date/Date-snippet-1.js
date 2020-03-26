//import React from "react"
//import { graphql } from "gatsby"
//
//const Page = ({ data }) => {
//  const document = data.prismic.allPages.edges[0].node
//
//	const date = Date(document.data.date);
//	const formattedDate = Intl.DateTimeFormat('en-US',{
//	  year: 'numeric',
//	  month: 'short',
//	  day: '2-digit' }).format(date);
//	// Output in M d, Y format
//
//  return (
//    <h3 className="date">${document.date}</h3>
//  )
//}
//
//export const query = graphql`
//query{
// prismic {
//  allPages(uid: "test-page") {
//		edges{
//      node{
//        title
//        release_date
//      }
//    }
//  }
//}
//`
//
//export default Page