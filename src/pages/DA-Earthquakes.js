import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

import Header from "../components/header";
import SEO from "../components/seo";

import styled from "styled-components";
import MEDIA from '../helpers/mediaTemplates';
import Layout from "../components/Layout";


const DA = () => {
  return(
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata{
              title
            }
          }
          DAMap: file(relativePath: { eq: "DAEarthquakes/DA-4.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Red: file(relativePath: { eq: "DAEarthquakes/DA-1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          RedCon: file(relativePath: { eq: "DAEarthquakes/REDConcept.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Green: file(relativePath: { eq: "DAEarthquakes/DA-2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          GreenCon: file(relativePath: { eq: "DAEarthquakes/GREENConcept.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Blue: file(relativePath: { eq: "DAEarthquakes/DA-3.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          BlueCon: file(relativePath: { eq: "DAEarthquakes/BLUEConcept.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}

      render={data => (
        <div
        style={{
          backgroundColor: 'black',
          height: '100%',
          width: '100%',
        }}>
        <Layout
        text={
          <>
            <SEO title="Data Arena: Earthquakes" />
            <Header siteTitle={data.site.siteMetadata.title} textColor="white"/>
            <h2 className="whiteText">
            {'Using the data recorded from earthquakes in the last 50 years, Data Arena: Earthquake uses 360 degree projection to engage with three different earthquake visualisations.'}
            <br />      <br />
            {"The magnitude of the room can be adjusted, with an accompanying digital map which details all the corresponding earthquakes from the room's magnitude."}
            <br />      <br />
            {'The project uses the Java based coding environment, Processing linked with data obtained from https://www.kaggle.com/usgs/earthquake-database'}
            </h2>
          </>
        }
        images={
          <>
          <Img fluid={data.DAMap.childImageSharp.fluid}/>
          <Img fluid={data.Red.childImageSharp.fluid}/>
          <Img fluid={data.RedCon.childImageSharp.fluid}/>
          <Img fluid={data.Green.childImageSharp.fluid}/>
          <Img fluid={data.GreenCon.childImageSharp.fluid}/>
          <Img fluid={data.Blue.childImageSharp.fluid}/>
          <Img fluid={data.BlueCon.childImageSharp.fluid}/>
          </>
        }
        />
        </div>
      )}
    />
  )
}

export default DA;
