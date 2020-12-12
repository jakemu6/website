import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Header from "../components/header";
import SEO from "../components/seo";
import Layout from "../components/halfLayout";

const RNAUTS = () => {

  const data = useStaticQuery(graphql`
    query RNAUTSImages{
      site {
        siteMetadata {
          title
          description
          author
        }
      }
      images: allFile( filter: {relativeDirectory: { eq: "RNAUTS" }}, sort: {fields: name} )
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
          <SEO title="RNA UTS" />


          <h2>

            <i>RNA x UTS || Sense of Belonging</i>
            <br /><br />
            Sense of Belonging is a campaign aimed at creating more awareness to the services available at the University of Technology Sydney. Through creative strategy and in-depth research, the team devised a strategy to create a wider sense of community, identifying key problems behind the university and its students. This greater community allows for more interaction between students to create a unified voice behind student’s feelings towards the university and its services.
            <br /><br />
            The outcome produced large banners used to share students thoughts and feelings alongside a book that details many different voices of students gratitude and ingratitude for the university. This book was printed and shared among many of the senior administrators of UTS.
            <br /><br />
            Created as part of a team including Ady Neshoda, Monica Steiner and Emma Sharp.
            <br /><br />
            Finalist for AGDA 2020 Student Print Awards
          </h2>
        </div>
        }
        images={
          <div>
                      <Header/>
            {data.images.nodes.map(image => (
                <Img className="galleryImage" key={image.id} fluid={image.childImageSharp.fluid} />
              )
            )
            }

          </div>

        }
        />
  )
}

export default RNAUTS;
