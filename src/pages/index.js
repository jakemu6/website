import React from "react"

import Layout from "../components/halfLayout"
import SEO from "../components/seo"
import SocialFollow from "../components/socialFollow"
import homeThumbnails from '../components/homeThumbnails'

const IndexPage = () => {

  return(
         <Layout
         text={
           <div>
           <SEO title="Home" />

           <h2>
             Jake Mu is a graphic designer & developer living in Sydney, Australia. His design practise is in digital experiences that subvert the ways we use technology as a tool for thought and reflection.

             Previously Jake has completed his honours degree in Visual Communications at the University of Technology Sydney. He has also worked as a design intern for Hypebeast New York and Mod Studio Sydney.
           </h2>

           <h1>
             Graphic Design  ||  Creative Code  ||  Data Visualisation  ||  UI/UX  ||  Front End Web-Dev  ||  Creative Strategy
           </h1>
           <SocialFollow/>
           </div>
         }
         images={
           <div>
             {homeThumbnails.map(({ id, src, title, href}) =>
               <a key={id} href={href}>
                 <img className='homeThumbnails' key={id} src={src} title={title} alt={title}/>
               </a>
             )}
          </div>
         }
         />
  )




}


export default IndexPage
