import React, { useState, useEffect } from "react"
import { useSpring, animated, interpolate } from "react-spring";
import PropTypes from "prop-types"


export function debounce(func, wait = 10, immediate = true) {
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

const Parallax = ({ obj, speed, offset }) => {
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
  const interpHeader = springscrollY.interpolate(o => `translateY(${o / parallaxLevel}px)`);

  return (
    <div>
      <animated.div style={{ transform: interpHeader}}>
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
