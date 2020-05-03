import React from 'react';
import style from './logo.module.css';

const Logo = ({logoText1, logoText2}) => {
    return(
        <div className={style.logo}>
            {logoText1}<span className={style.second}>{logoText2}</span>
        </div>
    );
}

export default Logo;