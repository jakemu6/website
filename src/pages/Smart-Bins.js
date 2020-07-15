import React from 'react';
import PropTypes from 'prop-types';

import Header from "../components/header";
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import MEDIA from '../helpers/mediaTemplates';


const VideoContainer = styled.div`
position:relative;
width: 100%;
height: 800px;
margin: 1rem;
${MEDIA.TABLET`
  height: 500px;
  `};
${MEDIA.PHONE`
  height: 500px;
  `};

`



const smartBins = () => {
  return(
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata{
              title
            }
          }
        }
      `}

      render={data => (
        <div>
          <SEO title="Smart Bins" />
          <Header siteTitle={data.site.siteMetadata.title} />



          <h2 className="pageTitle">
            {'SMART BINS'}
          </h2>


          <VideoContainer>
          <iframe src="https://player.vimeo.com/video/438414689?autoplay=1&loop=1&title=0&byline=0&portrait=0" className="VidFrame" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen>
          </iframe>
          </VideoContainer>

          <script src="https://player.vimeo.com/api/player.js"></script>

          <h2 className="bodyCopy">
            {'Smart Bins is an app designed to promote recycling for small children in schools. The prototype is designed for use on tablets in schools and helps to teach children how to recycle using object recognition.'}
          </h2>

          <p className="bodyCopy">
            {'Illustrations designed by Mulanne Phan (behance.net/mulanne), UX/UI designed by Jake Mu'}
          </p>
        </div>
      )}
    />
  )
}

export default smartBins;
