import React, { Component } from "react"
import styled from "styled-components"

const Nav = styled.div`
  position: fixed;
  z-index: 100;
  left: 2rem;
  bottom: 2rem;
  color: black;
  background-color: white;
  opacity: 0.9;
`;

const NavText = styled.h2`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 0rem;
  color: inherit;
  font-family: jaf-bernino-sans,sans-serif;
  font-weight: 400;
  font-style: italic;
  text-rendering: optimizeLegibility;
  font-size: 2rem;
  line-height: 1.25;
`;

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollPos: 0,
      show: true
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)

  }
  handleScroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos
    });
  }


  render() {
    return (
      <a href='/'>
        <Nav
        className={this.state.show ? 'active' : 'hidden'}
        >
          <NavText>
            {'Jake Mu || Home'}
          </NavText>
        </Nav>
      </a>

    );
  }
}
