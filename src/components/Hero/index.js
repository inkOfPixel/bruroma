// @flow

import React, { Component } from "react";
import styled from "styled-components";
import YoutubeVideo from "../YoutubeVideo";
import logo from "../../img/logo-text.svg";

class Hero extends Component {
	render() {
		return (
			<Wrapper>
				{/* <YoutubeVideo src="https://www.youtube.com/embed/pqUDw-C0A0M?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;vq=hd1080&amp;playlist=pqUDw-C0A0M" /> */}
				<HeroContent>
					<Logo src={logo} alt="Bruroma logo" />
				</HeroContent>
			</Wrapper>
		);
	}
}

const Wrapper = styled.header`
	position: fixed;
	width: 100%;
	height: 600px;
`;

const HeroContent = styled.div`
	position: relative;
	background-color: rgba(0, 0, 10, 0.5);
	width: 100%;
	height: 600px;
	z-index: 10;
`;

const Logo = styled.img`
	position: fixed;
	top: 270px;
	height: 60px;
	width: 100%;
	@media (max-width: 768px) {
		width: 80%;
		left: 50%;
		transform: translateX(-50%);
	}
`;

export default Hero;
