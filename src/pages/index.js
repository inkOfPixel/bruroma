// @flow

import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Header from "../components/Header";
import Section from "../components/Section";
import logo from "./logo-text.svg";
import technicalDrawing from "./technical-drawing.jpg";
import laserCut from "./lasercut.jpg";
import punching from "./punching.jpg";
import bending from "./bending.jpg";
import welding from "./welding.jpg";

const IndexPage = () => (
	<div>
		<Header />
		<Hero>
			{/* <YoutubeVideo src="https://www.youtube.com/embed/pqUDw-C0A0M?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;vq=hd1080&amp;playlist=pqUDw-C0A0M" /> */}
			<HeaderContent>
				<Logo src={logo} alt="Bruroma logo" />
			</HeaderContent>
		</Hero>
		<Content>
			<Section id="about" title="Chi siamo">
				Situata nel nord est Italia, Bruroma é un' azienda leader nella
				lavorazione dell' acciaio inox che fa della qualità il suo punto
				di forza<br />
				<br />
				Grazie agli oltre 30 anni nel settore Bruroma ha acquisito la
				conoscenza e l' esperienza necessarie per tradurre il progetto
				del cliente in un prodotto di elevato livello costruttivo.<br />
				<br />
				La costante ricerca di soluzioni migliori ha spinto l' azienda a
				studiare e brevettare prodotti propri che permettono ai clienti
				di usufruire di soluzioni originali e all' avanguardia.
			</Section>
			<Section id="working" title="lavorazioni">
				<h3>Tecnologie all' avanguardia</h3>
				Bruroma dispone delle tecnologie più avanzate per la lavorazione
				dell' acciaio inox e di altri materiali su richiesta.<br />
				<br />
				<h3>Ciclo produttivo efficiente e flessibile</h3>
				L' azienda é dotata di un ciclo produttivo che parte dalla
				definizione del progetto nell' ufficio tecnico e termina con la
				consegna di un prodotto che rispetta tutti i requisiti
				preventivati.<br />
				<br />
				<h3>Produzione su misura</h3>
				Grazie alla flessibilità della struttura tecnologica Bruroma può
				spaziare dalla lavorazione di piccoli pezzi in serie alla
				costruzione di grandi impianti e strutture su misura.
			</Section>
			<Section
				id="technical"
				title="Ufficio tecnico"
				backgroundImage={technicalDrawing}
			>
				L' ufficio tecnico grazie ai programmi CAD-CAM di ultima
				generazione é in grado di ricevere i disegni del cliente da
				analizzare ed ottimizzare per la produzione.<br />
				<br />
				La presenza di personale altamente specializzato nella
				modellazione della lamiera permette anche di realizzare nuovi
				progetti in base ai requisiti del cliente, aiutandolo nella
				ricerca della soluzione ottimale.
			</Section>
			<Section
				id="lasercut"
				title="Taglio laser"
				backgroundImage={laserCut}
			>
				Il laser di cui é dotata Bruroma permette di lavorare su diversi
				materiali (principalmente acciaio inox, alluminio e ottone), su
				spessori fino a 25mm e su lamiere anche da 2000x4000mm.<br />
				<br />
				Tutte queste caratteristiche consentono di poter essere
				flessibili sulle dimensioni del prodotto potendo produrre sia
				piccoli pezzi che grandi strutture.
			</Section>
			<Section
				id="punching"
				title="Punzonatura"
				backgroundImage={punching}
			>
				La punzonatrice consente di economizzare in termini di tempo e
				costo alcune operazioni di taglio sulla lamiera, come ad esempio
				l' applicazione di una serie di fori su di un pezzo.<br />
				<br />
				Il risparmio in termine di tempo e costi della punzonatura é
				notevole rispetto all' esecuzione di queste operazioni con la
				tecnologia laser.
			</Section>
			<Section id="bending" title="Piegatura" backgroundImage={bending}>
				Le presse piegatrici con lunghezza di 4000 mm e fino a 170
				tonnellate di pressione consentono un' ampia gamma di
				lavorazioni su piccole e grandi dimensioni con estrema
				precisione.
			</Section>
			<Section
				id="welding"
				title="Saldatura e pulitura"
				backgroundImage={welding}
			>
				L' esperienza e la professionalità del personale specializzato
				garantiscono una saldatura di altissima qualità su qualsiasi
				tipo di prodotto, di grandi o di piccole dimensioni.La saldatura
				viene effettuata con diverse tecnologie.<br />
				<br />
				Per ottenere un elevata finitura anche dal punto di vista
				estetico disponiamo della strumentazione necessaria per la
				pulitura e la lucidatura dell' acciaio.
			</Section>
		</Content>
	</div>
);

const Hero = styled.header`
	position: fixed;
	width: 100%;
	height: 600px;
`;

const YoutubeVideo = styled(({ className, src }) => (
	<div className={className}>
		<div className="video-wrapper">
			<iframe src={src} />
		</div>
	</div>
))`
	background-color: black;
	height: 600px;
	left: 0;
	overflow: hidden;
	position: fixed;
	top: 0;
	width: 100%;
	& .video-wrapper {
		height: 800px;
		margin-top: -100px;
		position: relative;
		& iframe {
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			width: 100%;
		}
	}
`;

const HeaderContent = styled.div`
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
`;

const Content = styled.main`
	position: relative;
	padding-top: 600px;
	z-index: 20;
`;

export default IndexPage;