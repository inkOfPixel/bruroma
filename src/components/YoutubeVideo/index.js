// @flow

import React, { Component } from "react";
import styled from "styled-components";

class YoutubeVideo extends Component {
	render() {
		return (
			<Wrapper>
				<InnerWrapper>
					<Iframe src={this.props.src} />
				</InnerWrapper>
			</Wrapper>
		);
	}
}

const Wrapper = styled.div`
	background-color: black;
	height: 600px;
	left: 0;
	overflow: hidden;
	position: fixed;
	top: 0;
	width: 100%;
`;

const InnerWrapper = styled.div`
	height: 800px;
	margin-top: -100px;
	position: relative;
`;

const Iframe = styled.iframe`
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
`;

export default YoutubeVideo;
