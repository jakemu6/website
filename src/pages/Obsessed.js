import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Header from "../components/header";
import SEO from "../components/seo";
import TwoColumnLayout from "../components/twoColumnLayout";
import styled from "styled-components";
import MEDIA from '../helpers/mediaTemplates';

import YellowGif from '../images/Obsessed/GIFS/YGIF.gif'


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

const GIF = styled.img`
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

const Obsessed = () => {
  const data = useStaticQuery(graphql`
    query ObsessedImages{
      images: allFile( filter: {relativeDirectory: { eq: "Obsessed" }}, sort: {fields: name} )
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

  return(
        <TwoColumnLayout
        Column1Size="66"
        Column1Content={
          <GridContainer>
            <GIF src={YellowGif}/>
            <ImageGrid2x2 fluid={data.images.nodes[0].childImageSharp.fluid} />
            <ImageGrid2x2 fluid={data.images.nodes[1].childImageSharp.fluid} />
            <ImageGrid2x2 fluid={data.images.nodes[2].childImageSharp.fluid} />
            <ImageGrid2x2 fluid={data.images.nodes[3].childImageSharp.fluid} />
          </GridContainer>
        }
        Column2Size="33"
        Column2Content={
          <TextContainer>
          <SEO title="Obsessed: Compelled to make" />
          <Header/>

          <h2>
            <i>Obsessed: Compelled to make</i>
            <br /><br />

          {'Obsessed: Compelled to make is an event/exhibition hosted by the Australian Design Centre. The event presents the work of 14 artists and looks into the mind of makers and the day to day. The flyer is folded out into a 3D room which displays various spaces of artists.'}
          </h2>
        </TextContainer>

        }
        />
  )
}









export default Obsessed;
