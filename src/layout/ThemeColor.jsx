import React, { useState, useEffect } from 'react';
import './theme.scss';
import LightThemeIcon from '../components/icons/LightThemeIcon';
import NightThemeIcon from '../components/icons/NightThemeIcon';

function ThemeColor({setTheme, currentWidth}) {

    const [isToggled, setToggled] = useState(false);
    const [classAbsolute, setClassAbsolute] = useState('themeContainer');
    const toggleTrueFalse = () => setToggled(!isToggled);

    useEffect(() => {
        currentWidth < 426 && setClassAbsolute('themeContainerNavbar')
    }, [currentWidth]);

    useEffect(() => {
        isToggled ? setTheme('v-light') : setTheme('v-dark')
    }, [isToggled]);

    return (
        <button className={classAbsolute} onClick={toggleTrueFalse}>
            {isToggled ? <NightThemeIcon /> : <LightThemeIcon />}
        </button>
    );
}

export default ThemeColor;