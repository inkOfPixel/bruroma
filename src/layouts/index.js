// @flow

import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import favicon from "./favicon.png";
import "normalize.css";
import "./global.css";

type Props = {
	children: Function
};

const TemplateWrapper = ({ children }: Props) => (
	<div>
		<Helmet>
			<title>Bruroma | Lavorazione acciaio inox</title>
			<meta
				name="description"
				content="Bruroma é un' azienda specializzata nella lavorazione dell' acciaio. Contattaci per scoprire i nostri servizi!"
			/>
			<meta
				name="keywords"
				content="Bruroma, acciaio, taglio laser, piegatura, saldatura"
			/>
			<link rel="shorcut icon" href={favicon} type="favicon" />
		</Helmet>
		<div>{children()}</div>
	</div>
);

export default TemplateWrapper;
