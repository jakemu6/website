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
max-width: 533px;
z-index: 1000;
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

const KWC = () => {

  const data = useStaticQuery(graphql`
    query KWCImages{
      images: allFile( filter: {relativeDirectory: { eq: "KWC" }}, sort: {fields: name} )
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
            <ImageGrid1x1 fluid={data.images.nodes[0].childImageSharp.fluid} />
            <ImageGrid1x1 fluid={data.images.nodes[2].childImageSharp.fluid} />
            <ImageGrid1x1 fluid={data.images.nodes[5].childImageSharp.fluid} />
            <ImageGrid2x2 fluid={data.images.nodes[6].childImageSharp.fluid} />
            <ImageGrid2x2 fluid={data.images.nodes[1].childImageSharp.fluid} />
            <ImageGrid1x1 fluid={data.images.nodes[3].childImageSharp.fluid} />
            <ImageGrid2x2 fluid={data.images.nodes[10].childImageSharp.fluid} />
            <ImageGrid2x2 fluid={data.images.nodes[11].childImageSharp.fluid} />
              <ImageGrid1x1 fluid={data.images.nodes[4].childImageSharp.fluid} />
              <ImageGrid2x2 fluid={data.images.nodes[12].childImageSharp.fluid} />
              <ImageGrid2x2 fluid={data.images.nodes[13].childImageSharp.fluid} />
                <ImageGrid1x1 fluid={data.images.nodes[8].childImageSharp.fluid} />
                <ImageGrid2x2 fluid={data.images.nodes[7].childImageSharp.fluid} />
                <ImageGrid2x2 fluid={data.images.nodes[9].childImageSharp.fluid} />




          </GridContainer>

        }
        Column2Size="33"
        Column2Content={
          <TextContainer>
          <SEO title="Kowloon Walled City" />
          <Header siteTitle="Jake Mu" />
          <h2>
            <i>Kowloon Walled City</i>
            <br /><br />
            {'Kowloon Walled City is a publication which visually explores the life of the most densely populated area in the world. Created in response to the ISTD lost brief, the book explores the lost city that many people called their home. It uses printed acrylic sheets alongside a bookmark to illuminate the dark, mysterious city and discover details within the walls.'}
            <br /><br />
            {'Inspired by the works of Greg Girard and his interviews within the city, the book is an interactive exploration of the voices from the city.'}
          </h2>
        </TextContainer>

        }
        />
  )
}

export default KWC;
