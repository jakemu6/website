import React, { useEffect, useRef } from 'react';
import { animated, useSpring } from 'react-spring';

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import TBAUCustomLayout from "../components/TBAUCustomLayout";
import Video from "../components/video";
import MEDIA from '../helpers/mediaTemplates';

import Parallax from "../components/Parallax";
import ParallaxSize from "../components/ParallaxSize";



const TheBloomAroundUs = () => {




  return(

    <StaticQuery
      query={graphql`
        query {
          F101: file(relativePath: { eq: "TBAU/101.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          F201: file(relativePath: { eq: "TBAU/201.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          F301: file(relativePath: { eq: "TBAU/301.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          F401: file(relativePath: { eq: "TBAU/401.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          site {
            siteMetadata{
              title
            }
          }
        }
      `}

      render={data => (




        <div style={{
            height: '1000vh',
            backgroundColor: 'rgb(0, 0, 0)',
         }}>
         <SEO title="The Bloom Around Us" />




              <Parallax obj={<h3 className="TBAUTitle">The Bloom Around Us</h3>} speed={4} offset={1500}/>

              <Parallax obj={<p className='TBAUBody'>The Bloom Around Us is an interactive live visualisation developed as part of a research design project around the human connection to technology.</p>} speed={3.8} offset={1650}/>

              <Parallax
                obj={
                  <ParallaxSize obj={<Img className="imageStyle" fluid={data.F101.childImageSharp.fluid}/>} speed={-30} offset={-500} xPos={60}/>
                } speed={3.8} offset={400}
              />

              <Parallax
                obj={
                  <ParallaxSize obj={<Img className="imageStyle" fluid={data.F201.childImageSharp.fluid}/>} speed={-30} offset={-500} xPos={80}/>
                } speed={3.5} offset={2000}
              />

              <Parallax
                obj={
                  <ParallaxSize obj={<Img className="imageStyle" fluid={data.F301.childImageSharp.fluid}/>} speed={-30} offset={-500} xPos={20}/>
                } speed={5} offset={2400}
              />

              <Parallax
                obj={
                  <ParallaxSize obj={<Img className="imageStyle" fluid={data.F401.childImageSharp.fluid}/>} speed={-30} offset={-500} xPos={20}/>
                } speed={2} offset={300}
              />

                  <Parallax
                    obj={
                      <div className="TBAUFrame">
                          <Video
                            videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            videoTitle="Official Music Video on YouTube"
                            videoClassName="TBAUVideo"
                          />
                      </div>
                    }
                    speed={10}
                    offset={10000}
                    />

                  <Parallax
                    obj={
                      <p className='TBAUBody'>
                        The visualisation uses projection to present a unique bouquet of flowers. By interacting with your devices, your Tweets contribute to the digital bouquet representing your local area. Alongside the visuals is a procedurally generated soundtrack to create a melodic atmosphere aimed to calm, imitating the feeling of being in nature.
                      </p>
                    }
                    speed={3.8}
                    offset={4000}
                    />

                    <Parallax
                      obj={
                        <p className='TBAUBody'>
                          Inspired by the human connection to nature, The Bloom Around Us subverts the principles of designing for digital systems to rethink the way humans interact with technology. The live visualisation resembles recent tweets from the local area to create a bouquet of unique flowers which are constantly changing over time. Flowers are procedurally generated in real-time to visualise a reflection of the online world around us.
                        </p>
                      }
                      speed={3.8}
                      offset={7000}
                      />



        </div>
      )}
    />
  )
}




export default TheBloomAroundUs
