import React from "react"
import MEDIA from '../helpers/mediaTemplates';
import styled from "styled-components"


const Container = styled.div`
margin: 0;
max-width: 50%;
padding: 0rem;
display: flex;
flex-direction: column;
align-items: left;

${MEDIA.TABLET`
    margin: 0rem;
    max-width: 100%;

  `};
${MEDIA.PHONE`
    margin: 0rem;
    max-width: 100%;


  `};
`


const ImageNav = ({ children }) => {
  return(
    <Container>
      {children}
    </Container>
  )
}

export default ImageNav
