import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import Header from "../components/header";
import SEO from "../components/seo";
import Layout from "../components/halfLayout";

const DA = () => {
  const data = useStaticQuery(graphql`
    query DAEarthquakesImages{
      images: allFile( filter: {relativeDirectory: { eq: "DAEarthquakes" }}, sort: {fields: name} )
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
  `
  )


  return(
        <div>
        <Layout
        text={
          <div>
            <SEO title="Data Arena: Earthquakes" />
            <Header/>
            <h2>
              <br />

            {'Using the data recorded from earthquakes in the last 50 years, Data Arena: Earthquake uses 360 degree projection to engage with three different earthquake visualisations.'}
            <br />      <br />
            {"The magnitude of the room can be adjusted, with an accompanying digital map which details all the corresponding earthquakes from the room's magnitude."}
            <br />      <br />
            {'The project uses the Java based coding environment, Processing linked with data obtained from https://www.kaggle.com/usgs/earthquake-database'}
            </h2>
          </div>
        }
        images={
          <div>
            {data.images.nodes.map(image => (
                <Img className="galleryImage" key={image.id} fluid={image.childImageSharp.fluid} />
              ))
            }
          </div>
        }
        />
        </div>
  )
}

export default DA;
