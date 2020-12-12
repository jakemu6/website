import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header";
import SEO from "../components/seo"
import Layout from "../components/halfLayout";

import styled from "styled-components";
import MEDIA from '../helpers/mediaTemplates';


const ImageGrid = styled(Img)`
  margin-bottom: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 2rem;
  ${MEDIA.TABLET`
  `};
  ${MEDIA.PHONE`
  `};
`

const UMAI = () => {
  const data = useStaticQuery(graphql`
    query {
      Bonito_Logo: file(relativePath: { eq: "UmaiDriedFoods/Logo_Bonito.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      Anchovy_Logo: file(relativePath: { eq: "UmaiDriedFoods/Logo_Anchovy.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      Squid_Logo: file(relativePath: { eq: "UmaiDriedFoods/Logo_Squid.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      Bonito_Main: file(relativePath: { eq: "UmaiDriedFoods/Bonito_Main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      Anchovy_Main: file(relativePath: { eq: "UmaiDriedFoods/Anchovy_Main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      Squid_Main: file(relativePath: { eq: "UmaiDriedFoods/Squid_Main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)


  return(
        <Layout
        text={
          <div>
          <SEO title="Umai Dried Foods" />
          <Header/>

          <h2>
          <i>UMAI Dried Foods</i>
          <br /><br />
          {'UMAI is a dried snack manufacturer with a variety of dried seafood snacks.'}
          <br /><br />
          {"The packaging is designed to align with the brand's values of liveliness and fun. Bold patterns and colours are used to represent these values and engage a wide audience. Each box is designed to have a unique shape and pattern that represents the ingredients of the product."}
          </h2>
        </div>
        }
        images={
          <div>
          <ImageGrid fluid={data.Bonito_Logo.childImageSharp.fluid}/>
          <ImageGrid fluid={data.Bonito_Main.childImageSharp.fluid}/>
          <ImageGrid fluid={data.Anchovy_Logo.childImageSharp.fluid}/>
          <ImageGrid fluid={data.Anchovy_Main.childImageSharp.fluid}/>
          <ImageGrid fluid={data.Squid_Logo.childImageSharp.fluid}/>
          <ImageGrid fluid={data.Squid_Main.childImageSharp.fluid}/>

          </div>
        }
        />
  )
}




export default UMAI
