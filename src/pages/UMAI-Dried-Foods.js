import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Header from "../components/header";
import SEO from "../components/seo";
import TwoColumnLayout from '../components/twoColumnLayout';
import styled from "styled-components";
import MEDIA from '../helpers/mediaTemplates';

const ImageGrid2x2 = styled(Img)`
 width: 100%;
`

const ImageGrid1x1 = styled(Img)`
 width: 100%;
 grid-column-start: 1;
 grid-column-end: 3;
 ${MEDIA.PHONE`
   grid-column-start: 1;
   grid-column-end: 1;
   `};
`

const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(50% - 2rem, 0fr));
grid-gap: 2rem;
margin: 2rem;
${MEDIA.PHONE`
  grid-template-columns: repeat(auto-fill, minmax(100%, 0fr));
  `};
`

const TextContainer = styled.div`
position: fixed;
top: 0;
bottom: 0;
z-index: 1000;
width: 33%;
overflow-y: auto;
-ms-overflow-style: none;
scrollbar-width: none;
padding-right: 2rem;
padding-top: 2rem;
&::-webkit-scrollbar {
    display: none;
}
${MEDIA.TABLET`
    width: 100%;
    position: static;
    align-items: left;
    padding: 2rem;
    padding-bottom: 0;
    z-index: 10;
  `};
${MEDIA.PHONE`
  width: 100%;
  position: static;
  align-items: left;
  padding: 2rem;
  padding-bottom: 0;
  z-index: 10;
  `};
`

const UMAI = () => {
  const data = useStaticQuery(graphql`
    query UmaiImages{
      images: allFile( filter: {relativeDirectory: { eq: "UmaiDriedFoods" }}, sort: {fields: name} )
      {
        nodes {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

console.log(data)

  return(
        <TwoColumnLayout
          Column1Size="66"
          Column1Content={
              <GridContainer>
                <ImageGrid2x2 fluid={data.images.nodes[1].childImageSharp.fluid} />
                <ImageGrid2x2 fluid={data.images.nodes[2].childImageSharp.fluid} />
                <ImageGrid2x2 fluid={data.images.nodes[3].childImageSharp.fluid} />
                <ImageGrid2x2 fluid={data.images.nodes[0].childImageSharp.fluid} />

                <ImageGrid1x1 fluid={data.images.nodes[5].childImageSharp.fluid} />
                <ImageGrid1x1 fluid={data.images.nodes[6].childImageSharp.fluid} />
                <ImageGrid1x1 fluid={data.images.nodes[7].childImageSharp.fluid} />
                <ImageGrid1x1 fluid={data.images.nodes[8].childImageSharp.fluid} />
                <ImageGrid1x1 fluid={data.images.nodes[4].childImageSharp.fluid} />

              </GridContainer>
          }
          Column2Size="33"
          Column2Content={
            <TextContainer>
            <SEO title="Umai Dried Foods" />
            <Header/>

            <h2>
            <i>UMAI Dried Foods</i>
            <br /><br />
            {'UMAI is a dried snack manufacturer with a variety of dried seafood snacks.'}
            <br /><br />
            {"The packaging is designed to align with the brand's values of liveliness and fun. Bold patterns and colours are used to represent these values and engage a wide audience. Each box is designed to have a unique shape and pattern that represents the ingredients of the product."}
            </h2>
          </TextContainer>
          }
          />
  )
}




export default UMAI
