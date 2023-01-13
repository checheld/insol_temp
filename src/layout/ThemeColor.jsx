import React, { useState, useEffect } from 'react';
import './theme.scss';
import LightThemeIcon from '../components/icons/LightThemeIcon';
import NightThemeIcon from '../components/icons/NightThemeIcon';

interface  Props {
    setTheme: () => void
}

function ThemeColor({setTheme} : Props) {

    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    useEffect(() => {
        isToggled ? setTheme('v-light') : setTheme('v-dark')
    }, [isToggled]);

    return (
        <button className='themeContainer' onClick={toggleTrueFalse}>
            {isToggled ? <NightThemeIcon /> : <LightThemeIcon />}
        </button>
    );
}

export default ThemeColor;