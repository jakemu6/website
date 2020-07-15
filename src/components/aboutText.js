import React from "react"
import MEDIA from '../helpers/mediaTemplates';
import styled from "styled-components"


const Container = styled.div`

background: white;
flex-direction: column;
display: flex;
top: 2rem;
padding-right: 2rem;


position: fixed;
align-items: left;
left: 45%;
margin: 0;



${MEDIA.TABLET`
    background: white;
    margin: 2rem;
    margin-bottom: 0rem;

    max-width: 95%;
    position: static;
    align-items: center;
    padding: 2rem;
    padding-bottom: 0;




  `};
${MEDIA.PHONE`
    background: white;
    margin: 2rem;
    margin-bottom: 0rem;

    max-width: 95%;
    position: static;
    align-items: center;
    padding: 2rem;
    padding-bottom: 0;






  `};
`


const AboutText = ({ children }) => {
  return(
    <Container>
      {children}
    </Container>
  )
}

export default AboutText
