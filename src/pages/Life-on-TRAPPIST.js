import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


import Header from "../components/header";
import SEO from "../components/seo";

import styled from "styled-components";
import Layout from "../components/halfLayout";

const VideoContainer = styled.div`
  height: 600px;
`

const VidIFrame = styled.iframe`
width: 100%;
height: 100%;
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

        <Layout
        text={
          <div>
            <SEO title="Life on TRAPPIST?" />
            <Header/>
            <h2>
              <i>Life on TRAPPIST?</i>
              <br /><br />

            {'Life on TRAPPIST? is an interactive data visualisation, purposed for museum display. It is displayed on a tablet and allows for touch interaction to visualise the similarities between our solar system and the Trappist Solar System.'}
            <br />        <br />
            {'The project uses the Java based coding environment, linked with data obtained from the NASA exoplanet archive.'}
            </h2>
          </div>
        }
        images={

          <div>
            <VideoContainer className="galleryImage" >
              <VidIFrame title="Trappist-Playthrough" src="https://player.vimeo.com/video/439467667?autoplay=1&loop=1&title=0&byline=0&portrait=0" className="VidFrame" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></VidIFrame>
            </VideoContainer>

            {data.images.nodes.map(image => (
              <Img className="galleryImage" key={image.id} fluid={image.childImageSharp.fluid} />
              ))
            }

          </div>

        }
        />
  )
}

export default LOT;
