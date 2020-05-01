import React from 'react';
import './css/FontTools.css'

export default class FontTools extends React.Component {

    state = {
        fontSizes: ['70%','80%','90%','100%','110%','120%','130%'],
        currentSize: 3
    }

    fontUp = () => {
        const layoutBody = document.getElementById('Layout-fonts');
        if(layoutBody !== null){
            if((this.state.currentSize + 1 ) < 6) {
                this.state.currentSize = this.state.currentSize + 1;
                layoutBody.style.fontSize = this.state.fontSizes[this.state.currentSize];
            }
        }
    };

    fontDown = () => {
        const layoutBody = document.getElementById('Layout-fonts');
        if(layoutBody !== null){
            if( (this.state.currentSize -1 ) > 0 ) {
                this.state.currentSize = this.state.currentSize - 1;
                layoutBody.style.fontSize = this.state.fontSizes[this.state.currentSize];
            }
        }
    };

    render() {
        return (
            <div className="FontTools">
                <p className="fontText">Font Sizing Tools</p>
                <button className="fontUp" onClick={this.fontUp}>+</button>
                <button className="fontDown" onClick={this.fontDown}>-</button>
            </div>
        );
    };
};