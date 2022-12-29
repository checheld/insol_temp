import React from 'react'
import AngularIcon from '../icons/AngularIcon';
import FlutterIcon from '../icons/FlutterIcon';
import NetIcon from '../icons/NetIcon';
import NodejsIcon from '../icons/NodejsIcon';
import ReactIcon from '../icons/ReactIcon';
import './style.scss';

const ServiceIcons = () => {
    return (
        <div className='iconsContainer'>
            <div className='iconContainer'>
                <NetIcon />
                <p className='techName'>.NET</p>
            </div>
            <div className='iconContainer'>
                <AngularIcon />
                <p className='techName'>ANGRULAR</p>
            </div>
            <div className='iconContainer'>
                <NodejsIcon />
                <p className='techName'>NODE.JS</p>
            </div>
            <div className='iconContainer'>
                <ReactIcon />
                <p className='techName'>REACT.JS</p>
            </div>
            <div className='iconContainer'>
                <FlutterIcon />
                <p className='techName'>FLUTTER</p>
            </div>
        </div>
    );
};


export default ServiceIcons