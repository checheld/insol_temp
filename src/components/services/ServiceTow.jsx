import React from 'react'
import './style.scss'


import DsnGrid from "../DsnGrid";
import type {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";

const ServicesDetails = [
    {
        title: "DIGITAL PRODUCTS",
        description: `Development of web services of all complexity. CRM systems, architecture and more.`,
    },
    {
        title: "E-COMMERCE",
        description: `Online stores are one of the strong and key areas in our company. Development of any complexity, training and professional approach to increase your sales.`,
    },
    {
        title: "MOBILE DEVELOPMENT",
        description: `Our goal is to save you time and resources. Developing multi-platform applications using Flutter by Google.`,
    },
    {
        title: "CLOUD SERVICES",
        description: `Having huge experience in working with cloud services, we are ready to solve problems of any complexity.`,
    }
]

const ServiceTow = ({className, ...restProps}: DsnGridProps) => {
    return (
        <DsnGrid className={dsnCN('dsn-services service-tow', className)} {...restProps}>
            {ServicesDetails.map(
                (item, index) =>
                    <div className='service-item' key={index}>
                        <div className="line-before mb-20"/>
                        <h4 className='title-block'>{item.title}</h4>
                        <p className='mt-15 dsn-auto'>{item.description}</p>
                    </div>
            )}

        </DsnGrid>
    );
};


export default ServiceTow