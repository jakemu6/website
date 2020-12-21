import React from "react"
import PropTypes from "prop-types"

import ImageNav from "./imageNav"
import AboutText from "./aboutText"


import "./layout.css"


const Layout = ({ text, images }) => {
  return (
    <div>
      <AboutText>
        {text}
      </AboutText>
      <ImageNav>
      {images}
      </ImageNav>
    </div>
  )
}

Layout.propTypes = {
  text: PropTypes.node.isRequired,
  images: PropTypes.node.isRequired,
}

export default Layout
