import React from "react"
import PropTypes from "prop-types"


import Column1 from "./Column"
import Column2 from "./Column"
import Column3 from "./Column"

import "./layout.css"

import styled from "styled-components"

const Wrapper = styled.div`
max-width: 1600px;
position: relative;
margin: 0 auto;
`

const ThreeColumnLayout = ({ Column1Content, Column2Content, Column3Content, Column1Size, Column2Size, Column3Size }) => {
  return (
    <Wrapper>

      <Column1 size={Column1Size}>
        {Column1Content}
      </Column1>

      <Column2 size={Column2Size}>
        {Column2Content}
      </Column2>

      <Column3 size={Column3Size}>
        {Column3Content}
      </Column3>

    </Wrapper>
  )
}

ThreeColumnLayout.propTypes = {
  Column1Content: PropTypes.node.isRequired,
  Column2Content: PropTypes.node.isRequired,
  Column3Content: PropTypes.node.isRequired,
  Column1Size: PropTypes.string.isRequired,
  Column2Size: PropTypes.string.isRequired,
  Column3Size: PropTypes.string.isRequired,
}


export default ThreeColumnLayout
