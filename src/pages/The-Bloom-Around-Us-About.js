import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import styled from "styled-components";
import MEDIA from '../helpers/mediaTemplates';
import "../components/layout.css"
import Header from "../components/header";


import LifeDeathGif from '../images/TBAU/GIFS/LifeDeath.gif'
import MovementGif from '../images/TBAU/GIFS/Movement.gif'


const Title = styled.h3`
  color: #0a0a0a;
  font-size: 45px;
  text-align: center;
  ${MEDIA.TABLET`
  `};
  ${MEDIA.PHONE`
    font-size: 30px;
  `};
`


const ImgRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 50rem;
  margin: auto;
`

const ImgColumn = styled.div`
  flex: 50%;
  ${MEDIA.TABLET`
    flex: 100%;
  `};
  ${MEDIA.PHONE`
    flex: 100%;
  `};
`

const ImageContainer = styled(Img)`
  max-width: 50rem;
  display: block;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const GIF = styled.img`
  max-width: 50rem;
  width: 120%;
  display: block;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  ${MEDIA.TABLET`
  `};
  ${MEDIA.PHONE`
  `};
`

const BloomBody = styled.p`

  margin: auto;
  max-width: 50rem;
  position: relative;
  text-align: left;

  font-family: albertan-pro, sans-serif;
  font-weight: 500;
  font-style: normal;

  font-size: 20px;
  line-height: 1.4;

  color: black;
  ${MEDIA.TABLET`
    padding-left: 1rem;
    padding-right: 1rem;
  `};
  ${MEDIA.PHONE`
    padding-left: 1rem;
    padding-right: 1rem;
  `};
`

const SubHead = styled.p`

  margin: auto;
  max-width: 50rem;
  position: relative;
  text-align: left;

  font-family: albertan-pro, sans-serif;
  font-weight: 700;
  font-style: normal;

  font-size: 20px;
  letter-spacing: 1.2px;
  line-height: 1.4;
  color: black;
  ${MEDIA.TABLET`
    padding-left: 1rem;
    padding-right: 1rem;
  `};
  ${MEDIA.PHONE`
    padding-left: 1rem;
    padding-right: 1rem;
  `};
`

const TBAUAbout = () => {

  const data = useStaticQuery(graphql`
    query {
      TBAU_1: file(relativePath: { eq: "TBAU/TBAU_Photos/TBAU_1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      TBAU_2: file(relativePath: { eq: "TBAU/TBAU_Photos/TBAU_2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      TBAU_3: file(relativePath: { eq: "TBAU/TBAU_Photos/TBAU_3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      TBAU_4: file(relativePath: { eq: "TBAU/TBAU_Photos/TBAU_4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      TBAU_5: file(relativePath: { eq: "TBAU/TBAU_Photos/TBAU_5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      TBAU_6: file(relativePath: { eq: "TBAU/TBAU_Photos/TBAU_6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      TBAU_7: file(relativePath: { eq: "TBAU/TBAU_Photos/TBAU_7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      TBAU_FlowerDesigns: file(relativePath: { eq: "TBAU/TBAU_Photos/TBAU_FlowerDesigns.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      TwitterFlow: file(relativePath: { eq: "TBAU/TBAU_Photos/twitterFlow.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)


  return(

          <div style={{overflowX: 'hidden'}} >
          <SEO title="The Bloom Around Us About" />
          <Header/>

              <Title>
              <br />
              {'The Bloom Around Us'}
              </Title>
              <br />

              <BloomBody>
                <a className='github' href="https://github.com/jakemu6/TheBloomAroundUs">View source code on GitHub</a>
                <br />              <br />

              </BloomBody>

              <SubHead>
              Concept
              </SubHead>

                <BloomBody>
                The Bloom Around Us is a research design project about the human connection to technology. Through redesigning interfaces to incorporate aspects of nature, the project aims to reframe the way that technology and human interactions are typically experienced.
                <br />
                </BloomBody>


                <ImageContainer fluid={data.TBAU_1.childImageSharp.fluid}/>


                <SubHead>
                Build Summary
                </SubHead>

                <BloomBody>
                The Bloom Around Us is an application created in Java using the <a href="https://android.processing.org/">Processing for Android</a> library. The application is loaded to a tablet which uses twitter’s API to open a live stream of tweets in the local area. Each tweet is then converted from its data into a unique digital flower, appearing on the screen in real-time. The screen is then projected through a projector and interaction with the flowers can be made through the tablet.
                <br /><br />
                </BloomBody>

                <ImageContainer fluid={data.TBAU_5.childImageSharp.fluid}/>


                <SubHead>
                Design Direction
                </SubHead>

                <BloomBody>
                The aim of The Bloom Around Us is to leverage soft interactions which defy the typical aesthetic style that we receive in technology. The technology aesthetic is one designed out of functionality and minimalism, ignoring the need for beautiful and pleasant interaction. Characteristics such as beauty in technological systems is lesser seen due to our predispositions that machine is made to be fast and functional. Beauty creates empathy as humans are able to build a common relationship. While beauty is perceived as a subjective opinion, a more universal approach to creating beauty is to look at the things that humans are already very good at creating relationships with. A common relationship that many humans have is one to nature and the natural world.
                <br /><br />
                As humans we tend to gravitate to the natural world as we are apart of it and can feel as though there is a common bond that allows us to create empathy. For example, visually seeing imperfections in flowers allow humans to relate to and feel naturally closer to an aspect we feel ourselves. This imperfect beauty concept is described as Wabi-Sabi and is the principle of which this project creates beauty.
                <br /><br />
                </BloomBody>

                <SubHead>
                Twitter
                </SubHead>

                <BloomBody>
                Twitter has a wide range of voices and is an expansive reflection of a technological landscape. Twitter also has an extensive API that allows for tweets to be easily accessible and for creating a visualisation of twitter. The Bloom Around Us uses a filtered twitter stream by using the <a href="http://twitter4j.org/en/">twitter4j</a> package. This allows for a stream of tweets that can be filtered based on keywords or location. Using the geolocation sensor inside a tablet, the application creates a filter based off the latitude and longitude of the device.
                <br /><br />
                Each tweet is analysed to create variables for each flower. The information that is obtained from the tweet is non-obtrusive and makes it difficult for the flowers to be tied to any specific individual. The goal of the project was not to create any insights into the tweets or the location but instead to create beauty and pleasant interactions with technology. As each tweet is received, the application also receives information about its user. This information is dissected to create the variables which determine each flower that is produced.
                <br /><br />
                Each tweet also goes through an additional analysis using the <a href='https://stanfordnlp.github.io/CoreNLP/'>CoreNLP</a> library. Tweets are posted through a local server that is run by a different machine on the same network. The server quickly returns an analysis on the words in the tweet which includes a sentiment analysis. This sentiment analysis returns a value which determines whether the tweet is positive or negative. This sentiment value is used in creating the auditory experience to create a pleasant atmosphere.
                <br /><br />
                </BloomBody>

                <ImageContainer fluid={data.TwitterFlow.childImageSharp.fluid}/>


                <SubHead>
                Flower Design
                </SubHead>

                <BloomBody>
                Flowers are generated procedurally over four styles continuously changing over time. They are drawn using loops and vector points which create random points to create unique yet similar flowers. Flowers are pre-rendered using the PShape attribute allowing faster processing speeds to create although lack the ability to be animatable bar scaling of size and rotation. Each flower was designed in an iterative process taking inspiration from real flower shapes and programmed to be unique and imperfect.
                <br /><br />
                The colour of each flower is created depending on the seasons and influence of the tweet’s user. The current season is detected by the application and then creates an array of colours which match that season. Each season has an array of 20 possible colours which are chosen by the tweet user’s influence. Influence is calculated by followers/following with a higher influence determining a darker colour.
                <br /><br />
                Shapes in the processing environment are filled with a solid flat colour that can be layered using the opacity to create texture. Following the guidance from <a href='https://thebookofshaders.com'>The Book of Shaders</a>, fragment shaders were written in GLSL to incorporate texture into the flowers using noise.
                <br /><br />
                </BloomBody>

                <ImageContainer fluid={data.TBAU_FlowerDesigns.childImageSharp.fluid}/>


                <SubHead>
                Movement
                </SubHead>

                <BloomBody>
                Movement in the visualisation is made to be slow and methodical. A key component in designing the movement system of flowers was by utilising the precedent of the <a href='https://www.red3d.com/cwr/boids/'>flocking algorithm</a> by Craig Reynolds. By adjusting the algorithm, the flowers could individually calculate their own individual forces applied. These forces include:
                <br /> - Separation: The flowers would detect other flowers around them and move away to ensure that they are not overlapping.
                <br /> - Centring: Flowers have a slight force which slowly brings them towards the centre of the screen
                <br /> - Cohesion: Flowers have a slight attraction force which causes them to bunch together should they be close enough to each other.
                <br /><br />
                Movement is constantly being calculated for each flower and each force is weighed appropriately to look natural. Slow interfaces run parallel to the need for fast information and instead creates more appreciation for each tweet individually.
                <br /><br />
                </BloomBody>

                <GIF src={MovementGif}/>


                <SubHead>
                Life & Death
                </SubHead>

                <BloomBody>
                Life & death is concept that is hardly produced in the technological world. Our ability to save things to hard drives or upload to the cloud creates the mindset that things in technology live on forever. By subverting this concept in technology, The Bloom Around Us humanises each flower to be special as they are temporary just like in nature.
                <br /><br />
                Each flower has a life meter which begins to count down as soon as they are spawned. This life meter is usually not reached because there is also a limit on the maximum amount of flowers allowed on the screen. Therefore flowers will usually die before their life meter is complete because of the overcrowding. This is to prevent significant lag and can be adjusted depending on the system’s processing power. Growth and dying also have animations which would have them scale up and down in size respectively. This animation is also programmed to be slow and unobtrusive.
                <br /><br />
                </BloomBody>

                <GIF src={LifeDeathGif}/>


                <SubHead>
                Sound Generation
                </SubHead>

                <BloomBody>
                The auditory experience consists of a chord progression and a melody all played over the E flat major scale. The piano sound files are from the <a href='http://theremin.music.uiowa.edu/'>University of Iowa Electronic Music Studios</a> which provide a wide range of instrument samples.
                <br /><br />
                Using the sentiment analysis of each tweet, a corresponding note is attached to each flower. The note attached includes two different sound files that are of the same note, a lower chord progression note and a higher melody note. The timing of when the note is played corresponds to the time that the flower was created, for the chord note, this is played every 4 seconds while the melody note is played every second. These notes will then play the same notes ever 4 bars in tandem with any other flowers that appeared in that time frame. The size of each flower also determines the volume of each flower. Smaller flowers will have a lower volume while bigger flowers will have a higher volume.
                <br /><br />
                The final result is a simple piano rhythm that is constantly changing with the addition and removal of the flowers on screen.
                <br /><br />
                </BloomBody>

                <SubHead>
                Hardware
                </SubHead>

                <BloomBody>
                The original production uses a Lenovo M10 FHD tablet, which connects to a Google Chromecast, allowing it to cast the screen to any available television or projector. It also requires a strong wi-fi signal to run without significant lag. For the sentiment analysis to also operate, the project requires a seperate machine that is able to run a local server on the same network.
                <br /><br />
                The <a href='http://ketai.org/'>Ketai</a> library allows for the tablet to utilise the sensors in the app. The gps sensor inside devices can be accessed to allow for the device to automatically detect the location of which to pull tweets. This bounding box for tweets is created by finding the nearest two integers for both the latitude and longitude.
                <br /><br />
                The tablet also allows for interaction through touch input. This allows for the flowers to be arranged and interacted with, creating more interesting and pleasing arrays. This interaction only allows for flowers to be moved and does not allow them to be removed or created.
                <br /><br />
                </BloomBody>
                <ImgRow>
                <ImgColumn>
                <a href='/The-Bloom-Around-Us/' target="_top"><BloomBody>Back to Project Page</BloomBody></a>
                </ImgColumn>
                <ImgColumn>
                <a href='/' target="_top"><BloomBody>Back to Home</BloomBody></a>
                </ImgColumn>
                </ImgRow>
                <br /><br />

          </div>

  )
}




export default TBAUAbout
