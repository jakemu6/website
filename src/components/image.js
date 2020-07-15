import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"


const Caption = styled.h2`
margin-top: 1rem;
text-align: right;
`


 const Image = () =>  {
   return(
     <StaticQuery
        query={graphql`
          query {
            Image1: file(relativePath: { eq: "HomeImages/sqImage001.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            Image2: file(relativePath: { eq: "HomeImages/sqImage002.png" }) {
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            Image3: file(relativePath: { eq: "HomeImages/sqImage003.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

            Image4: file(relativePath: { eq: "HomeImages/sqImage004.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <div style={{width: "100%"}}>

          <Link to="/UMAI-Dried-Foods">
          <Img
            fluid={data.Image1.childImageSharp.fluid}
          />
          <Caption>UMAI Dried Foods</Caption>
          </Link>

          <Link to="/Smart-Bins">
          <Img
            fluid={data.Image2.childImageSharp.fluid}
          />
          <Caption>Smart Bins</Caption>
          </Link>

          <Link to="/Obsessed">
          <Img
            fluid={data.Image3.childImageSharp.fluid}
          />
          <Caption>Obsessed: Compelled to make</Caption>
          </Link>

          <Link to="/Life-on-TRAPPIST">
          <Img
            fluid={data.Image4.childImageSharp.fluid}
          />
          <Caption>Life on Trappist?</Caption>
          </Link>

          </div>
        )}
      />
   )
 }


export default Image
