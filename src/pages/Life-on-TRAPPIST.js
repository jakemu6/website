import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


import Header from "../components/header";
import SEO from "../components/seo";

import styled from "styled-components";
import TwoColumnLayout from '../components/twoColumnLayout';
import MEDIA from '../helpers/mediaTemplates';


const VideoContainer = styled.div`
position: relative;
height: 0;
overflow: hidden;
padding-top: 66.66%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
margin: 2rem;
`

const P5IFrame = styled.iframe`
position: absolute;
top:0;
left: 0;
width: 100%;
height: 100%;

`

const TextContainer = styled.div`
overflow-y: auto;
-ms-overflow-style: none;
scrollbar-width: none;
&::-webkit-scrollbar {
    display: none;
}

    width: 100%;
    position: static;
    align-items: left;
    padding: 2rem;
    padding-bottom: 0;
    z-index: 10;

`

const LOT = () => {

  const data = useStaticQuery(graphql`
    query TrappistImages{
      images: allFile( filter: {relativeDirectory: { eq: "Trappist" }}, sort: {fields: name} )
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
        Column1Size="100"
        Column1Content={
          <div>

            <VideoContainer>
              <P5IFrame src="https://editor.p5js.org/jakemu6/embed/PVJYEsmgj" scrolling="no" allowfullscreen="" height="800" width="1200"></P5IFrame>
            </VideoContainer>


          </div>

        }
        Column2Size="33"
        Column2Content={
          <TextContainer>
            <SEO title="Life on TRAPPIST?" />
            <Header/>
            <h2>
              <i>Life on TRAPPIST?</i>
              <br /><br />

            {'Life on TRAPPIST? is an interactive data visualisation, purposed for museum display. It is displayed on a tablet and allows for touch interaction to visualise the similarities between our solar system and the Trappist Solar System.'}
            <br />        <br />
            {'The project uses the Java based coding environment, linked with data obtained from the NASA exoplanet archive.'}
            </h2>
          </TextContainer>

        }



        />
  )
}

export default LOT;
