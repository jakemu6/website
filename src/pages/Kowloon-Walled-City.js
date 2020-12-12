import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Header from "../components/header";
import SEO from "../components/seo";
import Layout from "../components/halfLayout";

const KWC = () => {


  const data = useStaticQuery(graphql`
    query KWCImages{
      images: allFile( filter: {relativeDirectory: { eq: "KWC" }}, sort: {fields: name} )
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

  console.log(data)

  return(
        <Layout
        text={
          <>
          <SEO title="Kowloon Walled City" />
          <Header siteTitle="Jake Mu" />
          <h2>
            <i>Kowloon Walled City</i>
            <br /><br />
            {'Kowloon Walled City is a publication which visually explores the life of the most densely populated area in the world. Created in response to the ISTD lost brief, the book explores the lost city that many people called their home.'}
            <br /><br />
            {'Inspired by the works of Greg Girard and his interviews within the city, the book is an interactive exploration of the voices from the city.'}
          </h2>
          </>
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

export default KWC;
