// @flow

import React, { type Node } from "react";
import styled, { css } from "styled-components";
import ScrollableAnchor from "react-scrollable-anchor";

type Props = {
  backgroundImage?: string,
  children: Node,
  id: string,
  title: string
};

const Section = ({ backgroundImage, children, id, title }: Props) => (
  <ScrollableAnchor id={id}>
    <Wrapper backgroundImage={backgroundImage}>
      <StyledTitle inverse={typeof backgroundImage === "string"}>
        {title}
      </StyledTitle>
      <Content inverse={typeof backgroundImage === "string"}>
        {children}
      </Content>
    </Wrapper>
  </ScrollableAnchor>
);

const Wrapper = styled.section`
  background-color: white;
  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: url(${backgroundImage});
      background-position: center;
      background-size: cover;
      &:before {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.7);
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `};
  transform: skewY(-3.5deg);
  text-align: justify;
  padding-top: 60px;
  padding-bottom: 60px;
  &:nth-child(odd) {
    background-color: #e6e6e6;
  }
`;

const Title = ({ children, inverse, ...other }) => (
  <h2 {...other}>
    <span>{children}</span>
  </h2>
);

const StyledTitle = styled(Title)`
  color: ${({ inverse }) => (inverse ? "#fff" : "#0071bb")};
  font-family: "Avenir", sans-serif;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 0.4em;
  margin-bottom: ${({ inverse }) => (inverse ? "40px" : "60px")};
  text-transform: uppercase;
  transform: skewY(3.5deg);
  & span {
    ${({ inverse }) =>
      !inverse &&
      css`
        border-bottom: 3px solid #0071bb;
        padding-left: 12px;
        padding-right: 0px;
        padding-bottom: 8px;
      `};
  }
  @media (max-width: 768px) {
    & span {
      font-size: 24px;
    }
  }
  @media (max-width: 500px) {
    & span {
      font-size: 20px;
    }
  }
  @media (max-width: 360px) {
    & span {
      font-size: 18px;
      letter-spacing: 0.2em;
    }
  }
`;

const Content = styled.div`
  ${({ inverse }) =>
    inverse &&
    css`
      color: #fff;
    `};
  transform: skewY(3.5deg);
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export default Section;
