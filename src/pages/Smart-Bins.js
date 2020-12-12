import React from 'react';
import Header from "../components/header";
import Layout from "../components/halfLayout";

import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const VideoContainer = styled.div`
  height: 600px;
`

const VidIFrame = styled.iframe`
width: 100%;
height: 100%;
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
        <Layout
        text={
          <div>
          <SEO title="Smart Bins" />
            <Header/>

          <h2>
            <i>Smart Bins</i>
            <br /><br />

            {'Smart Bins is an app prototype designed to promote recycling for young children in schools. app is aimed for use on tablets in schools and helps to teach children how to recycle using object recognition.'}
            <br /><br />
            {'Illustrations designed by Mulanne Phan (behance.net/mulanne), UX/UI designed by Jake Mu'}
          </h2>



          </div>
        }
        images={

          <div>
            <VideoContainer className="galleryImage" >
              <VidIFrame title="Smart-Bins-Playthrough" src="https://player.vimeo.com/video/438414689?autoplay=1&loop=1&title=0&byline=0&portrait=0" className="VidFrame" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></VidIFrame>
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

export default SmartBins;
