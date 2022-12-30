import React, {useEffect} from 'react';

import {Container} from "react-bootstrap";
import DsnGrid from "../components/DsnGrid";

import HeaderNormalTow from "../components/header/HeaderNormalTow";
import Footer from "../components/footer/Footer";
import Map, {optionDroowMap} from "../components/Map/Map";
import InfoBox from "../components/contact/InfoBox";
import ContactForm from "../components/contact/ContactForm";
import NextPage from "../components/next/NextPage";
import { Helmet } from "react-helmet";


const headerContent = {
    title: 'Contact',
    description: `Let's Talk`
}

function Contact(props) {
    const ymaps = window.ymaps;

    useEffect(() => {
        ymaps.ready(init);
        function init(ymaps) {
            var myMap = new ymaps.Map("map", {
                center: [40.206597, 44.521862],
                zoom: 18
            }, {
                searchControlProvider: 'yandex#search'
            });

            var myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: [40.206597, 44.521862]
                },
                properties: {
                    iconContent: 'InSol Group',
                    hintContent: 'Armenia, Yerevan, 59 Komitas Ave'
                }
            },
                {
                    preset: 'islands#blackStretchyIcon'
                });
            myMap.geoObjects.add(myGeoObject);
            myMap.behaviors.disable('scrollZoom');
        }
    }, []);
    
    return (
        <React.Fragment>

            <Helmet>
                <title>InSol Group - Contact Us </title>
            </Helmet>

            {/*Start Header*/}
            <HeaderNormalTow description={headerContent.description}>
                {headerContent.title}
            </HeaderNormalTow>

            {/*Start Map*/}
            {/* <Map
                googleMapKey="AIzaSyDMyAS2jdzj-vdgBIFaIStYOWJtSlghndg"
                defaultZoom={10}
                options={optionDroowMap}
                height="80vh"
                defaultCenter={center}
                showMarker
            /> */}
            <div id="map" style={{ height: "80vh", width: '100%' }} />
            {/*Start Contact Form && Info Box*/}
            <Container style={{marginTop: '120px', marginBottom: '120px'}}>
                <DsnGrid col={2} colTablet={1}>
                    <InfoBox className="background-section p-30" />
                    <ContactForm />
                </DsnGrid>
            </Container>

            {/* <NextPage className="section-margin" to="/portfolio" text="See More Works.">
                Portfolio
            </NextPage> */}
            <Footer />


        </React.Fragment>
    );
}

export default Contact;