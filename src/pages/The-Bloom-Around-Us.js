import React from 'react';


import { animated, useSpring } from 'react-spring';

import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import Video from "../components/video";

import SEO from "../components/seo"

import MEDIA from '../helpers/mediaTemplates';
import styled , { keyframes , ThemeProvider } from "styled-components";
import "../components/layout.css"

import Parallax from "../components/Parallax";
import ParallaxSize from "../components/ParallaxSize";
import Header from "../components/header";


const PhotoBox = styled.div`
position: absolute;
margin: auto;
left: ${props => props.theme.xVal};
width: 60%;
padding: 1rem;
text-align: center;
transform: translate(-50%, 0%);


font-family: albertan-pro, sans-serif;
font-weight: 500;
font-style: normal;

font-size: 20px;
letter-spacing: 1.2px;
line-height: 1.5;

color: white;
z-index: 10;
${MEDIA.TABLET`
  left: 50%;
  width: 80%;
`};
${MEDIA.PHONE`
  left: 50%;
  width: 100%;
`};

`

const theme = {
  xVal: "50%"
}


const Container = styled.div`
    position: absolute;
    top: 480%;
    background-color: black;
    height: 900px;
    width: calc(100vw - (100vw - 100%));
    padding-left: 10rem;
    padding-right: 10rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
  ${MEDIA.TABLET`
    height: 800px;
    padding-left: 5rem;
    padding-right: 5rem;
  `};
  ${MEDIA.PHONE`
    top: 500%;

    height: 500px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  `};
`

const DiagramImage = styled(Img)`
  max-width: 100%;
  max-height: 100%;
`

const Title = styled.h3`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  font-size: 9vh;
  line-height: normal;
  letter-spacing: 1.2px;
  z-index: 10;
  ${MEDIA.TABLET`
    font-size: 4vh;
  `};
  ${MEDIA.PHONE`
    font-size: 3vh;
  `};
`

const BloomBody = styled.p`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  margin: auto;
  width: 40rem;
  padding: 1rem;
  text-align: center;

  font-family: albertan-pro, sans-serif;
  font-weight: 500;
  font-style: normal;

  font-size: 20px;
  letter-spacing: 1.2px;
  line-height: 1.5;

  color: white;
  z-index: 10;
  ${MEDIA.TABLET`
    width: 80%;

  `};
  ${MEDIA.PHONE`
    width: 100%;

  `};

`

const Notes = styled.p`

  margin: auto;
  max-width: 3em;
  padding: 1rem;
  position: absolute;
  text-align: center;

  font-family: albertan-pro, sans-serif;
  font-weight: 600;
  font-style: normal;

  font-size: 30px;
  letter-spacing: 1.2px;
  line-height: 1.5;

  color: white;
`

const antiRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(${-1 * 360}deg);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(${1 * 360}deg);
  }
`;

const FlowerImg = styled(Img)`
  animation: ${rotate} 100s linear infinite;
  opacity: 0.7;
`;
const FlowerImgAnti = styled(Img)`
  animation: ${antiRotate} 100s linear infinite;
  opacity: 0.7;
`;


const Page = styled.div`
 height: 1300vh;
 background-color: rgb(0, 0, 0);
 overflow-x: hidden;
  ${MEDIA.TABLET`
    height: 1300vh;
  `};
  ${MEDIA.PHONE`
    height: 1500vh;
  `};
`
const VidFrame = styled.div`
  display: flex;
  height: 400vh;
  align-items: flex-center;
  padding: 2rem;
  ${MEDIA.TABLET`
    padding: 0rem;
  `};
  ${MEDIA.PHONE`
    padding: 0rem;
  `};
`


const TheBloomAroundUs = () => {



  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 30000 },
    reset: true,
  })


  const data = useStaticQuery(graphql`
      query {
        Img1: file(relativePath: { eq: "TBAU/TBAU_Photos/TBAU_0.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        Img2: file(relativePath: { eq: "TBAU/TBAU_Photos/TBAU_1.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        Img3: file(relativePath: { eq: "TBAU/TBAU_Photos/TBAU_8.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        Img4: file(relativePath: { eq: "TBAU/TBAU_Photos/TBAU_7.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        F101: file(relativePath: { eq: "TBAU/101.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        F102: file(relativePath: { eq: "TBAU/102.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        F103: file(relativePath: { eq: "TBAU/103.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        F201: file(relativePath: { eq: "TBAU/201.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        F202: file(relativePath: { eq: "TBAU/202.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        F203: file(relativePath: { eq: "TBAU/203.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        F301: file(relativePath: { eq: "TBAU/301.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        F302: file(relativePath: { eq: "TBAU/302.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        F303: file(relativePath: { eq: "TBAU/303.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        F401: file(relativePath: { eq: "TBAU/401.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        F402: file(relativePath: { eq: "TBAU/402.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        F403: file(relativePath: { eq: "TBAU/403.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        variableDiagram: file(relativePath: { eq: "TBAU/Diagram.png" }) {
          childImageSharp {
            fluid(maxHeight: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return(

        <Page>
         <SEO title="The Bloom Around Us" />
          <Header/>


         <Title style={{top: '50%'}}>The Bloom Around Us</Title>


         <BloomBody style={{top: '55%'}}><i>The Bloom Around Us</i> is an interactive visualisation developed as design research into the human connection to technology. It seeks to create empathetic technological experiences, rethinking the way digital interfaces are designed for humans.</BloomBody>

        <Parallax obj={<ParallaxSize obj={<FlowerImg fluid={data.F101.childImageSharp.fluid}/>} speed={-40} offset={-500} xPos={60}/>} speed={1.8} offset={30} />
        <Parallax obj={<ParallaxSize obj={<FlowerImgAnti fluid={data.F102.childImageSharp.fluid}/>} speed={-60} offset={-700} xPos={60}/>} speed={2} offset={80} />


        <Parallax obj={<ParallaxSize obj={<FlowerImgAnti fluid={data.F201.childImageSharp.fluid}/>} speed={-65} offset={-1400} xPos={80}/>} speed={3} offset={60}/>
        <Parallax obj={<ParallaxSize obj={<FlowerImg fluid={data.F203.childImageSharp.fluid}/>} speed={-60} offset={-1000} xPos={43}/>} speed={3.5} offset={20}/>

        <Parallax obj={<ParallaxSize obj={<FlowerImgAnti fluid={data.F301.childImageSharp.fluid}/>} speed={-50} offset={-1100} xPos={18}/>} speed={2.1} offset={30}/>
        <Parallax obj={<ParallaxSize obj={<FlowerImg fluid={data.F302.childImageSharp.fluid}/>} speed={-20} offset={-400} xPos={40}/>} speed={2} offset={70}/>

        <Parallax obj={<ParallaxSize obj={<FlowerImg fluid={data.F401.childImageSharp.fluid}/>} speed={-60} offset={-700} xPos={15}/>} speed={1.8} offset={80}/>
        <Parallax obj={<ParallaxSize obj={<FlowerImgAnti fluid={data.F402.childImageSharp.fluid}/>} speed={-60} offset={-1200} xPos={83}/>} speed={2} offset={10}/>




        <VidFrame>
            <Video
              videoSrcURL="https://player.vimeo.com/video/471820449"
              videoTitle="TheBloomAroundUs"
              videoClassName="TBAUVideo"
            />
        </VidFrame>



        <BloomBody style={{top: '280%'}}>For decades technological design has focussed on an aesthetic of minimal functionalism. Using Twitter as a representation of the technological landscape, <i>The Bloom Around Us</i> aims to rethink how we interact with technology and how we might reimagine its values to create more pleasant and beautiful interactions.</BloomBody>

        <Parallax obj={<ParallaxSize obj={<FlowerImg fluid={data.F202.childImageSharp.fluid}/>} speed={200} offset={500} xPos={30}/>} speed={2.5} offset={-180}/>
        <Parallax obj={<ParallaxSize obj={<FlowerImgAnti fluid={data.F203.childImageSharp.fluid}/>} speed={200} offset={2000} xPos={60}/>} speed={6} offset={-190}/>
        <Parallax obj={<ParallaxSize obj={<FlowerImg fluid={data.F201.childImageSharp.fluid}/>} speed={100} offset={2000} xPos={50}/>} speed={3.6} offset={-180}/>


        <BloomBody style={{top: '400%'}}>By incorporating values and cues inspired by nature, <i>The Bloom Around Us</i> subverts established principles of designing for digital systems. Using projection, the visualisation renders a live stream of tweets each represented by a unique flower. Tweets are sourced from the local area and transformed into an array of flowers arrangeable by viewer interaction. Alongside the visuals is a procedurally generated soundtrack, creating a melodic atmosphere influenced by the visual projections.</BloomBody>

        <Container>
          <DiagramImage
            imgStyle={{
              objectFit: "scale-down",
              objectPosition: "50% 50%",
            }}
            fluid={data.variableDiagram.childImageSharp.fluid}/>
        </Container>

        <Title style={{top: '600%'}}>Nature in technology</Title>


        <BloomBody style={{top: '650%'}}>Our visual understanding of empathy is guided by our ability to acknowledge a mutual understanding in movement and individuality. For digital flowers, the capacity to move instinctively and contain its own individuality allow humans to visually empathise. </BloomBody>


        <Parallax obj={
          <div style={{
              width: '20%',
              position: 'absolute',
              transform: `translate(-50%, -50%)`,
              left: `14%`
          }}>
            <FlowerImg fluid={data.F303.childImageSharp.fluid}/>
            </div>
          } speed={6} offset={140}/>

          <Parallax obj={
            <div style={{
                width: '35%',
                position: 'absolute',
                transform: `translate(-50%, -50%)`,
                left: `38%`
            }}>
              <FlowerImgAnti fluid={data.F103.childImageSharp.fluid}/>
            </div>
          } speed={3} offset={90}/>

          <Parallax obj={
            <div style={{
                width: '30%',
                position: 'absolute',
                transform: `translate(-50%, -50%)`,
                left: `62%`
            }}>
              <FlowerImg fluid={data.F203.childImageSharp.fluid}/>
              </div>
          } speed={5} offset={120}/>

          <Parallax obj={
              <div style={{
                  width: '20%',
                  position: 'absolute',
                  transform: `translate(-50%, -50%)`,
                  left: `86%`
              }}>
                <FlowerImgAnti fluid={data.F403.childImageSharp.fluid}/>
              </div>
          } speed={2.5} offset={50}/>

        <BloomBody style={{top: '820%'}}>Nature’s ability to create a calming and peaceful atmosphere is attributed to the senses that it appeals towards. The auditory sense is an overwhelming aspect that is able to fill the radius of a room. In <i>The Bloom Around Us</i>, piano notes are attributed to each flower to generate an atmosphere that continuously changes with the flowers that appear on screen. Each flower contains a particular note that is chosen based on a sentiment analysis of the tweet. </BloomBody>

              <Parallax obj={
                    <div>
                    <animated.div style={{ position: 'absolute', opacity: "0.5", transform: radians.interpolate(r => `translateY(${-200 * Math.sin(r + (0 * Math.PI) / 1.6)}px)`), left: `20%` }}> <Notes>Eb</Notes> </animated.div>
                    <animated.div style={{ position: 'absolute', opacity: "0.5", transform: radians.interpolate(r => `translateY(${-200 * Math.sin(r + (2 * Math.PI) / 1.6)}px)`), left: `30%` }}> <Notes>F</Notes> </animated.div>
                    <animated.div style={{ position: 'absolute', opacity: "0.5", transform: radians.interpolate(r => `translateY(${-200 * Math.sin(r + (4 * Math.PI) / 1.6)}px)`), left: `40%` }}> <Notes>G</Notes> </animated.div>
                    <animated.div style={{ position: 'absolute', opacity: "0.5", transform: radians.interpolate(r => `translateY(${-200 * Math.sin(r + (6 * Math.PI) / 1.6)}px)`), left: `50%` }}> <Notes>Ab</Notes> </animated.div>
                    <animated.div style={{ position: 'absolute', opacity: "0.5", transform: radians.interpolate(r => `translateY(${-200 * Math.sin(r + (8 * Math.PI) / 1.6)}px)`), left: `60%` }}> <Notes>Bb</Notes> </animated.div>
                    <animated.div style={{ position: 'absolute', opacity: "0.5", transform: radians.interpolate(r => `translateY(${-200 * Math.sin(r + (10 * Math.PI) / 1.6)}px)`), left: `70%` }}> <Notes>C</Notes> </animated.div>
                    <animated.div style={{ position: 'absolute', opacity: "0.5", transform: radians.interpolate(r => `translateY(${-200 * Math.sin(r + (12 * Math.PI) / 1.6)}px)`), left: `80%` }}> <Notes>D</Notes> </animated.div>
                    </div>
              } speed={3.8} offset={220}/>


            <BloomBody style={{top: '920%'}}>For humans and nature, the life & death cycle is an inevitable part of the living experience. Meanwhile, technological systems have an uncertainty about the longevity of information and data. In <i>The Bloom Around Us</i>, everything must die eventually, contrary to the notion of data surviving forever. Time creates change and so as the seasons shift, so too do the colours of the flowers change.</BloomBody>

            <Parallax obj={
              <animated.div style={{
                  width: radians.interpolate(r => `${-40 * Math.sin(r + (0 * Math.PI) / 1.6)}%`),
                  position: 'absolute',
                  transform: 'translate(-50%, -50%)',
                  left: `20%`
              }}>
                <FlowerImgAnti fluid={data.F101.childImageSharp.fluid}/>
              </animated.div>
            } speed={3} offset={280}/>

            <Parallax obj={
              <animated.div style={{
                  width: radians.interpolate(r => `${-20 * Math.sin(r + (2 * Math.PI) / 1.6)}%`),
                  position: 'absolute',
                  transform: 'translate(-50%, -50%)',
                  left: `40%`
              }}>
                <FlowerImg fluid={data.F201.childImageSharp.fluid}/>
              </animated.div>
            } speed={4} offset={280}/>

            <Parallax obj={
              <animated.div style={{
                  width: radians.interpolate(r => `${-30 * Math.sin(r + (4 * Math.PI) / 1.6)}%`),
                  position: 'absolute',
                  transform: 'translate(-50%, -50%)',
                  left: `60%`
              }}>
                <FlowerImgAnti fluid={data.F303.childImageSharp.fluid}/>
              </animated.div>
            } speed={3} offset={280}/>

            <Parallax obj={
              <animated.div style={{
                  width: radians.interpolate(r => `${-20 * Math.sin(r + (6 * Math.PI) / 1.6)}%`),
                  position: 'absolute',
                  transform: 'translate(-50%, -50%)',
                  left: `80%`
              }}>
                <FlowerImg fluid={data.F403.childImageSharp.fluid}/>
              </animated.div>
            } speed={4} offset={280}/>

          <PhotoBox style={{top: '1000%'}} theme={{ xVal: "70%" }}>
              <Img fluid={data.Img1.childImageSharp.fluid}/>
          </PhotoBox>



            <PhotoBox style={{top: '1100%'}} theme={{ xVal: "70%" }}>
                <Img fluid={data.Img3.childImageSharp.fluid}/>
            </PhotoBox>

            <PhotoBox style={{top: '1050%'}} theme={{ xVal: "30%" }}>
                <Img fluid={data.Img2.childImageSharp.fluid}/>
            </PhotoBox>

            <PhotoBox style={{top: '1150%'}} theme={{ xVal: "30%" }}>
                <Img fluid={data.Img4.childImageSharp.fluid}/>
            </PhotoBox>



          <BloomBody style={{top: '1230%'}}><a className='whiteText' href="/The-Bloom-Around-Us-About/">View technical case study</a></BloomBody>
          <BloomBody style={{top: '1240%'}}><a className='whiteText' href="/" target="_top">Back to Home</a></BloomBody>


          <BloomBody style={{top: '1250%'}}>This project was produced as part of the UTS Honours Program 2020. <br/><br/>
                Thank you to Aaron Seymour, Zoe Sadokierski, Aiden Barry, Madi Chan, Aaron Davis, Julie Nguyen & everyone who helped contribute to this project for their continual guidance and support.<br/><br/></BloomBody>

        </Page>
  )
}




export default TheBloomAroundUs
