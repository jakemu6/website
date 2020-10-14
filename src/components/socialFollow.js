import { Link } from "gatsby"
import React from "react"




const SocialFollow = ({ siteTitle }) => (

  <div>
      <h2 style={{ margin: 0 }}>
      Get in touch with me @
      <br />      <br />

        <a href="mailto:jakemu6@gmail.com"
        className="email"
        >
          <h2>Email</h2>
        </a>
        <a
          href="https://www.instagram.com/jakes_makery/"
          className="instagram"
        >
          <h2>Instagram</h2>
        </a>

        <a
          href="https://github.com/jakemu6"
          className="github"
        >
          <h2>GitHub</h2>
        </a>



      </h2>
    </div>

)

export default SocialFollow
