import React from "react"
import TwoColumnLayout from "../components/twoColumnLayout"
import SEO from "../components/seo"
import SocialFollow from "../components/socialFollow"
import homeThumbnails from '../components/homeThumbnails'

import styled from "styled-components";
import MEDIA from '../helpers/mediaTemplates';


const TextContainer = styled.div`
position: fixed;
top: 0;
bottom: 0;
max-width: 533px;
z-index: 1000;
width: 33%;
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


const IndexPage = () => {

  return(
         <TwoColumnLayout
           Column1Size="66"
         Column1Content={
           <div>
             {homeThumbnails.map(({ id, src, title, href}) =>
               <a key={id} href={href}>
                 <img className='homeThumbnails' key={id} src={src} title={title} alt={title}/>
               </a>
             )}
          </div>
         }
         Column2Size="33"
         Column2Content={
           <TextContainer>
           <SEO title="Home" />

           <h2>
             Jake Mu is a graphic designer & developer living in Sydney, Australia. His design practise is in digital experiences that subvert the ways we use technology as a tool for thought and reflection.

             Previously Jake has completed his honours degree in Visual Communications at the University of Technology Sydney. He has also worked as a design intern for Hypebeast New York and Mod Studio Sydney.
           </h2>

           <h1>
             Graphic Design  ||  Creative Code  ||  Data Visualisation  ||  UI/UX  ||  Front End Web-Dev  ||  Creative Strategy
           </h1>
           <SocialFollow/>
           </TextContainer>

         }
         />
  )




}


export default IndexPage
