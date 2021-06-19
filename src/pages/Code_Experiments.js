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
${MEDIA.PHONE`
  width: 0%;
  height: 0%;
  `};
`

const P5IFrame = styled.iframe`
position: absolute;
top: 0;
left: 50%;
transform:
min-height: 500px;
transform: translate(-50%, 0);
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

const CreativeCodeExperiments = () => {




  return(

        <TwoColumnLayout
        Column1Size="66"
        Column1Content={
          <div>
              <br /><br /><br />
            <VideoContainer>
              <P5IFrame src="https://editor.p5js.org/jakemu6/embed/14ITyU_Ni" scrolling="no" allowfullscreen="" height="500" width="500"></P5IFrame>
            </VideoContainer>
            <VideoContainer>
              <P5IFrame src="https://editor.p5js.org/jakemu6/present/xGXtb0Gxk6" scrolling="no" allowfullscreen="" height="500" width="500"></P5IFrame>
            </VideoContainer>


          </div>

        }
        Column2Size="33"
        Column2Content={

          <TextContainer>
            <SEO title="CREATIVE CODE EXPERIMENTS" />
            <Header/>
            <h2>
              CREATIVE CODE EXPERIMENTS
              <br /><br />
              <i>Balance</i>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

              <i>Rose Patterns</i>

            </h2>
          </TextContainer>


        }
        />
  )
}

export default CreativeCodeExperiments;
