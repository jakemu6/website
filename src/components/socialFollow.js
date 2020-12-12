import React from "react";
import styled from "styled-components";

const ImgRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`

const ImgColumn = styled.div`
  flex: 50%;
`

const SocialFollow = ({ siteTitle }) => (

  <div>
      <h2 style={{ margin: 0 }}>
      Get in touch with me @
      <br />      <br />
        <ImgRow>
          <ImgColumn>
            <a href="mailto:jakemu6@gmail.com" className="email">
              <h2>Email</h2>
            </a>
            <a href="https://github.com/jakemu6" className="github">
              <h2>GitHub</h2>
            </a>
          </ImgColumn>
          <ImgColumn>
            <a href="https://www.instagram.com/jakes_makery/" className="instagram">
              <h2>Instagram</h2>
            </a>
            <a href="https://www.linkedin.com/in/jakemu6/" className="linkedin">
              <h2>LinkedIn</h2>
            </a>
          </ImgColumn>
        </ImgRow>
      </h2>
    </div>

)

export default SocialFollow
