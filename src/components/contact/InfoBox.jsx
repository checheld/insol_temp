import React from 'react';
import './style.scss'
import {dsnCN} from "../../hooks/helper";

function InfoBox({className}) {
    return (

        <div className={dsnCN('box-info-contact', className)}>
            <h3>Start a new project?</h3>
            <h5 className="mt-30">Let's get acquainted</h5>
            <p className="mt-10">
                Contact us in any way convenient for you and we will help you
            </p>

            <ul className="mt-30">
                {/* <li>
                    <span className="mr-10">Call Us</span>
                    <a href="tel:+1 (800) 990 8877" target="_blank" rel="noreferrer">+1 (800) 990 8877</a>
                </li> */}
                <li>
                    <span className="mr-10">Telegram</span>
                    <a href="http://t.me/+1 (800) 990 8877" target="_blank" rel="noreferrer">+1 (800) 990 8877</a>
                </li>
                <li>
                    <span className="mr-10">Email</span>
                    <a href="mailto:info@example.com" target="_blank" rel="noreferrer">info@example.com</a>
                </li>
                <li>
                    <span className="mr-10">Address</span>
                    <a href="#0" target="_blank" rel="noreferrer">Armenia, Yerevan, 59 Komitas Ave</a>
                </li>
            </ul>
        </div>

    );
}

export default InfoBox;