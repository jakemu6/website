import React from "react"
import PropTypes from "prop-types"


import Column1 from "./Column"
import Column2 from "./Column"

import "./layout.css"

import styled from "styled-components"

const Wrapper = styled.div`
max-width: 1600px;
position: relative;
    margin: 0 auto;
`

const TwoColumnLayout = ({ Column1Content, Column2Content, Column1Size, Column2Size }) => {
  return (
    <Wrapper>

      <Column1 size={Column1Size}>
        {Column1Content}
      </Column1>

      <Column2 size={Column2Size}>
        {Column2Content}
      </Column2>

    </Wrapper>
  )
}

TwoColumnLayout.propTypes = {
  Column1Content: PropTypes.node.isRequired,
  Column2Content: PropTypes.node.isRequired,
  Column1Size: PropTypes.string.isRequired,
  Column2Size: PropTypes.string.isRequired,
}


export default TwoColumnLayout
