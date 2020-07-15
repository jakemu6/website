import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Header from "../components/header";
import SEO from "../components/seo"




const UMAI = () => {
  return(
    <StaticQuery
      query={graphql`
        query {
          UDF1: file(relativePath: { eq: "UmaiDriedFoods/UDF_1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          UDF2: file(relativePath: { eq: "UmaiDriedFoods/UDF_2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          UDF3: file(relativePath: { eq: "UmaiDriedFoods/UDF_3.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          site {
            siteMetadata{
              title
            }
          }
        }
      `}

      render={data => (

        <div>
        <SEO title="Umai Dried Foods" />

        <Header siteTitle={data.site.siteMetadata.title} />
          <h2 className="pageTitle">
          {'UMAI Dried Foods'}
          </h2>

          <h2 className="bodyCopy">
          {'UMAI is a Japanese dried snack manufacturer with a variety of different dried seafood snacks. The design of the packaging attracts customers through playfulness and bright contrasting colours.'}

          </h2>
          <Img
            fluid={data.UDF1.childImageSharp.fluid}
          />
          <Img
            fluid={data.UDF2.childImageSharp.fluid}
          />
          <Img
            fluid={data.UDF3.childImageSharp.fluid}
          />
        </div>
      )}
    />
  )
}




export default UMAI
