// @flow

import React, { Component } from "react";
import styled from "styled-components";

type Props = {
  src: string
};

class Map extends Component<Props> {
  render() {
    const { src } = this.props;
    return (
      <Wrapper>
        <MapFrame frameborder="0" src={src} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 60%;
  height: 400px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
`;

const MapFrame = styled.iframe`
  border: none;
  width: 100%;
  height: 400px;
`;

export default Map;
