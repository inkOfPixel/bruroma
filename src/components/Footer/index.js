// @flow

import React, { Component } from "react";
import styled from "styled-components";
import { throttle } from "lodash";
import logo from "../../img/logo-text.svg";

type State = {
  visible: boolean
};

class Footer extends Component<{}, State> {
  state = {
    visible: false
  };

  componentDidMount() {
    document.addEventListener("scroll", throttle(this.handleScroll, 100));
  }

  handleScroll = (event: Event) => {
    const { visible } = this.state;

    if (window.scrollY >= 400 && !visible) {
      this.setState(prevState => ({
        visible: true
      }));
    } else if (window.scrollY < 400 && visible) {
      this.setState(prevState => ({
        visible: false
      }));
    }
  };

  render() {
    return (
      <Wrapper visible={this.state.visible}>
        <Logo src={logo} />
        <Content>
          © Copyright 2015 - Bru.ro.ma. srl<br />
          Reg.Impr.TV/C. F/P I.V.A.: 00846780260, Cap.Soc. € 100.000 i.v. REA
          TV: 166846<br />
          <br />
          Designed by <a href="http://www.inkofpixel.com">inkOfPixel</a>
        </Content>
      </Wrapper>
    );
  }
}

const Wrapper = styled.footer`
  background-color: #333;
  bottom: 0;
  left: 0;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  padding-bottom: 150px;
  padding-top: 150px;
  position: fixed;
  right: 0;
`;

const Logo = styled.img`
  height: 32px;
  width: 100%;
  margin-bottom: 40px;
`;

const Content = styled.div`
  color: #fff;
  text-align: center;
  & a {
    color: #fff;
    &:hover {
      color: #0071bb;
    }
  }
`;

export default Footer;
