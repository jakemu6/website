import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Header from "../components/header";
import SEO from "../components/seo";
import TwoColumnLayout from '../components/twoColumnLayout'
import styled from "styled-components";
import MEDIA from '../helpers/mediaTemplates';


const ImageGrid1x1 = styled(Img)`
 width: 100%;
 grid-column-start: 1;
 grid-column-end: 3;
 ${MEDIA.PHONE`
   grid-column-start: 1;
   grid-column-end: 1;
   `};
`

const ImageGrid2x2 = styled(Img)`
 width: 100%;
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

const RNAUTS = () => {

  const data = useStaticQuery(graphql`
    query RNAUTSImages{
      site {
        siteMetadata {
          title
          description
          author
        }
      }
      images: allFile( filter: {relativeDirectory: { eq: "RNAUTS" }}, sort: {fields: name} )
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
    <div>
    <TwoColumnLayout
      Column1Size="66"
      Column1Content={
        <GridContainer>
            <ImageGrid1x1 fluid={data.images.nodes[0].childImageSharp.fluid} />
            <ImageGrid1x1 fluid={data.images.nodes[1].childImageSharp.fluid} />
            <ImageGrid1x1 fluid={data.images.nodes[2].childImageSharp.fluid} />
            <ImageGrid1x1 fluid={data.images.nodes[3].childImageSharp.fluid} />
            <ImageGrid2x2 fluid={data.images.nodes[7].childImageSharp.fluid} />
            <ImageGrid2x2 fluid={data.images.nodes[8].childImageSharp.fluid} />
            <ImageGrid2x2 fluid={data.images.nodes[9].childImageSharp.fluid} />
            <ImageGrid2x2 fluid={data.images.nodes[10].childImageSharp.fluid} />
            <ImageGrid1x1 fluid={data.images.nodes[4].childImageSharp.fluid} />
            <ImageGrid1x1 fluid={data.images.nodes[6].childImageSharp.fluid} />
            <ImageGrid1x1 fluid={data.images.nodes[5].childImageSharp.fluid} />

        </GridContainer>
      }
      Column2Size="33"
      Column2Content={
        <TextContainer>
        <SEO title="RNA UTS" />
        <h2>
          <i>RNA x UTS || Sense of Belonging</i>
          <br /><br />
          Sense of Belonging is a campaign aimed at creating more awareness to the services available at the University of Technology Sydney. Through creative strategy and in-depth research, the team devised a strategy to create a wider sense of community, identifying key problems behind the university and its students. This greater community allows for more interaction between students to create a unified voice behind student’s feelings towards the university and its services.
          <br /><br />
          The outcome produced large banners used to share students thoughts and feelings alongside a book that details many different voices of students gratitude and ingratitude for the university. This book was printed and shared among many of the senior administrators of UTS.
          <br /><br />
          Created as part of a team including Ady Neshoda, Monica Steiner and Emma Sharp.
          <br /><br />
          Finalist for AGDA 2020 Student Print Awards
        </h2>
      </TextContainer>
      }
      />
      <Header/>
</div>
  )
}

export default RNAUTS;
