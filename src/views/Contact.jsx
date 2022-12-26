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
        var myMap;
        var script;
        ymaps.ready(init);
        function init(ymaps) {
            myMap = new ymaps.Map("map", {
                center: [47.22961357876832, 38.917702905338054],
                zoom: 19
            }, {
                searchControlProvider: 'yandex#search'
            });

            var myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: [47.22961357876832, 38.917702905338054]
                },
                properties: {
                    iconContent: 'InSol Group',
                    hintContent: 'ул. Дзержинского 65А, Таганрог, Ростовская обл., 347905'
                }
            },
                {
                    preset: 'islands#blackStretchyIcon'
                });
            myMap.geoObjects.add(myGeoObject);
            myMap.behaviors.disable('scrollZoom');
        }

        var head = document.getElementsByTagName('head')[0];
        var select = document.getElementById('language');
        select.createMap = function () {
            var language = this.value;
            if (myMap) {
                myMap.destroy();
            }
            script = document.createElement('script');
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            script.src = 'https://api-maps.yandex.ru/2.1/?onload=init_' + language + '&lang=' + language + '_RU&ns=ymaps_' + language;
            head.appendChild(script);
            window['init_' + language] = function () {
                init(window['ymaps_' + language]);
            }
        };
        document.getElementById('language').addEventListener("change", select.createMap);
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
            <div style={{position: 'relative'}}>
                <select id="language"  className='map-selector'>
                    <option value="ru">ru</option>
                    <option selected value="en">en</option>
                </select>
                <div id="map" style={{ height: "80vh", width: '100%' }} />
            </div>
            {/*Start Contact Form && Info Box*/}
            <Container>
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