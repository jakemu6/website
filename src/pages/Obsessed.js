import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header";
import SEO from "../components/seo"
import Layout from "../components/halfLayout";

const Obsessed = () => {

  const data = useStaticQuery(graphql`
    query ObsessedImages{
      images: allFile( filter: {relativeDirectory: { eq: "Obsessed" }}, sort: {fields: name} )
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
          <SEO title="Obsessed: Compelled to make" />
          <Header/>

          <h2>
            <i>Obsessed: Compelled to make</i>
            <br /><br />

          {'Obsessed: Compelled to make is an event/exhibition hosted by the Australian Design Centre. The event presents the work of 14 artists and looks into the mind of makers and the day to day. The flyer is folded out into a 3D room which displays various spaces of artists.'}
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
  )
}









export default Obsessed;
