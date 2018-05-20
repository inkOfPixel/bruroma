// @flow

import React, { Component, type Node } from "react";
import styled, { css } from "styled-components";
import { throttle } from "lodash";
import logo from "./logo-icon-dark.svg";
import phoneDark from "./phone-dark.svg";
import phoneLight from "./phone-light.svg";

type Size = "small" | "large";
type State = {
  size: Size
};

class Header extends Component<{}, State> {
  state = {
    size: "large"
  };
  componentDidMount() {
    document.addEventListener("scroll", throttle(this.handleScroll, 100));
  }

  handleScroll = (event: Event) => {
    const { size } = this.state;

    if (window.scrollY >= 400 && size === "large") {
      this.setState(prevState => ({
        size: "small"
      }));
    } else if (window.scrollY < 400 && size === "small") {
      this.setState(prevState => ({
        size: "large"
      }));
    }
  };

  render() {
    const { size } = this.state;
    return (
      <Bar size={size}>
        <a href="#home">
          <Logo src={logo} visible={size === "small"} />
        </a>
        <PhoneIcon src={size === "small" ? phoneDark : phoneLight} />
        <PhoneNumber size={size}>+39 0438 430376</PhoneNumber>
        <Navigation>
          <NavigationLink to="#about" size={size}>
            about
          </NavigationLink>
          <NavigationLink to="#working" size={size}>
            lavorazioni
          </NavigationLink>
          <NavigationLink to="#contacts" size={size}>
            contatti
          </NavigationLink>
        </Navigation>
      </Bar>
    );
  }
}

let Bar = ({ children, size, ...other }: { children: Node, size: Size }) => (
  <div {...other}>
    <Wrapper size={size}>{children}</Wrapper>
  </div>
);

Bar = styled(Bar)`
  width: 100%;
  background-color: ${({ size }) =>
    size === "large" ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, 0.93)"};
  border-bottom: ${({ size }) =>
    size === "large" ? "solid 1px rgba(0, 0, 0, 0)" : "solid 1px #e6e6e6"};
  position: fixed;
  height: 80px;
  z-index: 999;
  transition: all 0.4s ease;
`;

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  height: 80px;
  ${({ size }) =>
    size === "small"
      ? css`
          margin-top: 0px;
          transition: all 0.4s ease;
        `
      : css`
          margin-top: 60px;
          transition: all 0.4s ease;
        `};
`;

let Navigation = ({
  children,
  className
}: {
  children: Node,
  className?: string
}) => (
  <nav className={className}>
    <ul>{children}</ul>
  </nav>
);

Navigation = styled(Navigation)`
  text-align: center;
  width: 100%;
  height: 120px;
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    line-height: 1;
    display: block;
  }
  @media (max-width: 880px) {
    display: none;
  }
`;

let NavigationLink = ({
  children,
  className,
  to
}: {
  children: Node,
  className?: string,
  to: string
}) => (
  <li className={className}>
    <a href={to}>{children}</a>
  </li>
);

NavigationLink = styled(NavigationLink)`
  display: inline-block;
  padding: 0;
  & a {
    text-decoration: none;
    display: block;
    padding: 35px 35px;
    font-family: "Avenir", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 12px;
    position: relative;
    color: ${({ size }) => (size === "small" ? "#333" : "#b2b2b2")};
    ${({ size }) => (size === "small" ? "font-weight: 500" : "")};
    letter-spacing: 0.2em;
    transition: color 0.25s;
    &:hover {
      color: ${({ size }) => (size === "small" ? "#0071bb" : "#fff")};
    }
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  position: fixed;
  top: 15px;
  left: 15px;
  ${({ visible }) => !visible && "display: none"};
`;

const PhoneIcon = styled.img`
  position: fixed;
  top: 22px;
  right: 160px;
  width: 36px;
  height: 36px;
`;

const PhoneNumber = styled.span`
  height: 50px;
  position: fixed;
  top: 35px;
  right: 15px;
  text-align: right;
  color: ${({ size }) => (size === "small" ? "#333" : "#fff")};
  font-size: 12px;
  letter-spacing: 2px;
  font-family: "Avenir", sans-serif;
  font-weight: ${({ size }) => (size === "small" ? "600" : "400")};
`;

export default Header;
