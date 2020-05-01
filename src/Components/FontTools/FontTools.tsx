import React from 'react';
import './css/FontTools.css'

export const FontTools = (props) =>{

        const {fontUp, fontDown} = props;

        return (
            <div className="FontTools">
                <div className="Font-buttons">
                    <button className="fontUp" onClick={fontUp}><i>aA<sup>[+]</sup></i></button>
                    <button className="fontDown" onClick={fontDown}><i>Aa<sup>[-]</sup></i></button>
                </div>
            </div>
        );
}