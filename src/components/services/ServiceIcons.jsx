import React from 'react'
import AngularIcon from '../icons/AngularIcon';
import FlutterioIcon from '../icons/Flutterio';
import NetIcon from '../icons/NetIcon';
import NodejsIcon from '../icons/NodejsIcon';
import ReactIcon from '../icons/ReactIcon';
import './style.scss';

const ServiceIcons = () => {
    return (
        <div className='iconsContainer'>
            <NetIcon />
            <AngularIcon />
            <NodejsIcon />
            <ReactIcon />
            <FlutterioIcon />
        </div>
    );
};


export default ServiceIcons