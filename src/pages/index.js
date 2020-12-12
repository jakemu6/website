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
           <h1>
              Jake Mu is a graphic designer & developer from Sydney, Australia.<br />
           </h1>
           <h2>
          My design practice is based around creating digital experiences with additional experience in print media.
          I’m interested in creating digital experiences that create beauty and wonder with a strong creative concept behind every experience.
          <br /><br />
           Previously: <br />
           Honours in Visual Communications at UTS, <br />Design Intern at Hypebeast NYC, <br />Design Intern at MOD Studio SYD.
           <br /><br />
           </h2>
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
