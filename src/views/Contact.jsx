import React, {useEffect} from 'react';

import {Container} from "react-bootstrap";
import DsnGrid from "../components/DsnGrid";

import HeaderNormalTow from "../components/header/HeaderNormalTow";
import Footer from "../components/footer/Footer";
import Map, {optionDroowMap} from "../components/Map/Map";
import InfoBox from "../components/contact/InfoBox";
import ContactForm from "../components/contact/ContactForm";
import NextPage from "../components/next/NextPage";
import {Helmet} from "react-helmet";


const headerContent = {
    title: 'Contact',
    description: `Lat's Tock`
}

function Contact(props) {

    // const center = {lat: 30.0489206, lng: 31.258553};
    const ymaps = window.ymaps;
    
    useEffect(() => {
        ymaps.ready(init);
        function init() {
            var myMap = new ymaps.Map("map", {
                center: [47.21795105, 38.92467227],
                zoom: 19
            });
            var myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: [47.21795105, 38.92467227]
                },
                properties: {
                    iconContent: 'InSol',
                    hintContent: 'адрес фирмы в сплывающем окне'
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
                <title>Droow - Contact Us </title>
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
            <div id="map" style={{height: "80vh", width: '100%'}}></div>
            {/*Start Contact Form && Info Box*/}
            <Container>
                <DsnGrid col={2} colTablet={1}>
                    <InfoBox className="background-section p-30"/>
                    <ContactForm/>
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