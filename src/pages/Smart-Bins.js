import React from 'react';
import Header from "../components/header";

import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import ThreeColumnLayout from '../components/threeColumnLayout'
import MEDIA from '../helpers/mediaTemplates';


const VideoContainer = styled.div`
  height: 500px;
  ${MEDIA.TABLET`
    height: 800px;
    `};
  ${MEDIA.PHONE`
    height: 600px;

    `};

`

const VidIFrame = styled.iframe`
position: fixed;
left: 33%;
top: 2rem;
width: 33%;
height: inherit;
${MEDIA.TABLET`
  position: relative;
  width: 100%;
  left: 0;
  padding: 2rem;
  z-index: 10;
  `};
${MEDIA.PHONE`
  position: relative;
  width: 100%;
  left: 0;
  padding: 2rem;
  z-index: 10;
  `};
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
padding-left: 2rem;

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

const SmartBins = () => {

  const data = useStaticQuery(graphql`
    query smartBinsImages{
      images: allFile( filter: {relativeDirectory: { eq: "SmartBins" }}, sort: {fields: name} )
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
        <ThreeColumnLayout
        Column1Size="33"
        Column1Content={
          <GridContainer>

            {data.images.nodes.map(image => (
              <ImageGrid1x1 key={image.id} fluid={image.childImageSharp.fluid} />
              ))
            }
          </GridContainer>
        }
        Column2Size="33"
        Column2Content={

          <div>
            <VideoContainer>
              <VidIFrame title="Smart-Bins-Playthrough" src="https://player.vimeo.com/video/438414689?autoplay=1&loop=1&title=0&byline=0&portrait=0" className="VidFrame" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></VidIFrame>
            </VideoContainer>
          </div>
        }

        Column3Size="33"
        Column3Content={
          <TextContainer>
          <SEO title="Smart Bins" />
            <Header/>
          <h2>
            <i>Smart Bins</i>
            <br /><br />
            {'Smart Bins is an app prototype designed to promote recycling for young children in schools. app is aimed for use on tablets in schools and helps to teach children how to recycle using object recognition.'}
            <br /><br />
            {'Illustrations designed by Mulanne Phan (behance.net/mulanne), UX/UI designed by Jake Mu'}
          </h2>
        </TextContainer>

        }
      />
  )
}

export default SmartBins;
