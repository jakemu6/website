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
             Jake is a graphic designer living in Sydney, Australia. His skills are across both graphic design and front end development with practical knowledge in a diverse skill set. With a tenacious drive, he holds himself to high standards in all aspects of his work and is relentless in expanding his expertise.
           </h2>
           <h2>
             Jake has worked across the fields&#8217; of design and development with studio experience from XR development to the media publication, Hypebeast in New York City. He holds a Bachelor of Design in Visual Communication at the University of Technology Sydney with First Class Honours.
           </h2>
           <h2>
             Currently Jake is a designer at Grumpy Sailor Creative. He is also a research assistant at the University of Technology Sydney working on research into data visualisation and machine learning through VR environments.
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
