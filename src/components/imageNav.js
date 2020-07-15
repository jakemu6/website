import React from "react"
import MEDIA from '../helpers/mediaTemplates';
import styled from "styled-components"
import Image from "../components/image"


const Container = styled.div`
margin: 0;
max-width: 45%;

padding: 2rem;
display: flex;
flex-direction: column;
align-items: center;

${MEDIA.TABLET`
    margin: 2rem;
    max-width: 95%;

  `};
${MEDIA.PHONE`
    margin: 2rem;
    max-width: 95%;


  `};
`


const ImageNav = () => {
  return(
    <Container>
      <Image />
    </Container>
  )
}

export default ImageNav
