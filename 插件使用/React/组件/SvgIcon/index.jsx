
import React from 'react';
import { ReactSVG } from 'react-svg';


function SVGIcon(props) {
    // src传入的是引入svg文件的变量名   如   import home from '@/assets/svg/home.svg'   传入homne
    return (
        <ReactSVG src={props.src} className={props.className} />
    );
}

export default SVGIcon;
