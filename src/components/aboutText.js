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
position: fixed;
top: 0;
left: 50%;
bottom: 0;
width: 50%;
z-index: 1000;
overflow-y: auto;
-ms-overflow-style: none;
scrollbar-width: none;
padding-right: 2rem;
padding-top: 2rem;


&::-webkit-scrollbar {
    display: none;
}
${MEDIA.TABLET`
    width: 100%;
    position: static;
    align-items: left;
    padding: 2rem;
    padding-bottom: 0;
    z-index: 10;
  `};
${MEDIA.PHONE`
  width: 100%;
  position: static;
  align-items: left;
  padding: 2rem;
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
