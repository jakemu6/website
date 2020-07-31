import React from "react"
import MEDIA from '../helpers/mediaTemplates';
import BREAKPOINTS from '../constants/breakpoints';

import styled from "styled-components"
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: (BREAKPOINTS.TABLET) })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: (BREAKPOINTS.PHONE), maxWidth: (BREAKPOINTS.TABLET) })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: (BREAKPOINTS.PHONE) })
  return isMobile ? children : null
}


const Container = styled.div`
flex-direction: column;
display: flex;
top: 2rem;
padding-right: 2rem;
position: fixed;
align-items: left;
left: 52%;
margin: 0;

${MEDIA.TABLET`


    max-width: 100%;
    position: static;
    align-items: left;
    padding: 1rem;
    padding-bottom: 0;
    z-index: 10;

  `};
${MEDIA.PHONE`


  max-width: 100%;
  position: static;
  align-items: left;
  padding: 1rem;
  padding-bottom: 0;
  z-index: 10;
  `};
`


const AboutText = ({ children }) => {


  return(
    <Container>
      <Desktop>
      {children}
      </Desktop>
      <Tablet>
      {children}
      </Tablet>
      <Mobile>
      {children}
      </Mobile>
    </Container>

  )
}

export default AboutText
