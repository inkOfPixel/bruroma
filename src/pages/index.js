// @flow

import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Header from "../components/Header";
import Section from "../components/Section";
import Map from "../components/Map";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import technicalDrawing from "./technical-drawing.jpg";
import laserCut from "./lasercut.jpg";
import punching from "./punching.jpg";
import bending from "./bending.jpg";
import welding from "./welding.jpg";

const IndexPage = () => (
	<div>
		<Header />
		<Hero />
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
			<Section id="contacts" title="Contatti">
				<Contacts>
					Bru.ro.ma. srl<br />
					Via Leonardo Da Vinci, 2<br />
					31010 Godega di Sant' Urbano (TV)<br />
					<br />
					Tel. <b>+39 0438 430376</b>
					<br />
					Fax <b>+39 0438 430396</b>
					<br />
					Mail <b>info@bruroma.com</b>
				</Contacts>
				<Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2775.158707111446!2d12.378642099999992!3d45.928127700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47796ca36443939f%3A0xf7a59b680b8f9006!2sBru.ro.ma.+S.r.l.!5e0!3m2!1sen!2sit!4v1441376814275" />
			</Section>
		</Content>
		<Footer />
	</div>
);

const Content = styled.main`
	position: relative;
	padding-top: 540px;
	padding-bottom: 400px;
	z-index: 20;
`;

const Contacts = styled.div`
	text-align: center;
`;

export default IndexPage;
