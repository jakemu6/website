import React, { useState, useEffect } from "react"
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types"




const Parallax = ({ obj, speed, offset }) => {

  const [scrollY, setScrollY] = useState(offset);


  function debounce(func, wait = 2, immediate = true) {
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

  useEffect(() => {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener("scroll", debounce(handleScroll));
      return () => window.removeEventListener("scroll", debounce(handleScroll));
    },
    [offset],
    [debounce]
  );

  const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
    springscrollY: 0
  }));
  const parallaxLevel = speed;
  springsetScrollY({ springscrollY: scrollY });
  const interpHeader = springscrollY.interpolate(o => `translateY(${o / parallaxLevel}px )`);

  return (
    <div style={{ position: 'relative' , top: `${offset}vh` }}>
      <animated.div style={{ transform: interpHeader }}>
          {obj}
      </animated.div>
   </div>
  );

};

Parallax.propTypes = {
  obj: PropTypes.node.isRequired,
  speed: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,

}

export default Parallax;
