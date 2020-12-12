import React from "react"


const Video = ({ videoSrcURL, videoTitle, videoClassName, ...props }) => (
  <>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      className={videoClassName}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </>
)
export default Video
