import React from 'react';
import style from './logo.module.css';

class Logo extends React.Component{
    render(){
        return(
            <div className={style.logo}>
                {this.props.logoText1}<span className={style.second}>{this.props.logoText2}</span>
            </div>
        )
    }
}

export default Logo;