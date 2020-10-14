import React, { useState, useEffect } from "react"
import { useSpring, animated, interpolate } from "react-spring";
import PropTypes from "prop-types"


export function debounce(func, wait = 5, immediate = false) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const ParallaxSize = ({ obj, speed, offset, xPos }) => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(
    () => {
      const handleScroll = () => setScrollY(window.scrollY + offset);
      window.addEventListener("scroll", debounce(handleScroll));
      return () => window.removeEventListener("scroll", debounce(handleScroll));
    },
    [debounce]
  );

  const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
    springscrollY: 0
  }));
  const parallaxLevel = speed
  springsetScrollY({ springscrollY: scrollY });
  const interpHeader = springscrollY.interpolate(o => `${o / parallaxLevel}%`);
  console.log({interpHeader});


  return (
    <div>
      <animated.div
        style={{
          width: interpHeader,
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          left: `${xPos}%`
        }}>
        {obj}
    </animated.div>
   </div>
  );

};

ParallaxSize.propTypes = {
  obj: PropTypes.node.isRequired,
  speed: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  xPos: PropTypes.number.isRequired,

}

export default ParallaxSize;
