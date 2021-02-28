import React from "react"
import PropTypes from "prop-types"

import MEDIA from '../helpers/mediaTemplates';
import styled from "styled-components"


const Container = styled.div`
  width: ${props => props.size || "33"}%;
  max-width: ${props => props.size || "33"}%;
  display: inline-block;
  vertical-align: top;


  ${MEDIA.TABLET`
    width: 100%;
    max-width: 100%;
    `};
${MEDIA.PHONE`
  width: 100%;
  max-width: 100%;
  `};
`


const Column = ({ children, size }) => {
  return(
    <Container size={size}>
      {children}
    </Container>
  )
}

Column.propTypes = {
  size: PropTypes.string.isRequired,
}

export default Column
