import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

import "./layout.css"



const TBAUCustomLayout = ({ title, mainVideo, about }) => {
  return (
    <>
      {mainVideo}
      {title}
      {about}

    </>
  )
}

TBAUCustomLayout.propTypes = {
  title: PropTypes.node.isRequired,
  mainVideo: PropTypes.node.isRequired,
  about: PropTypes.node.isRequired,

}

export default TBAUCustomLayout
