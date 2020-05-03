import React from 'react';
import './css/FontTools.css'

export class FontTools extends React.Component<any, any>{

    updateFont(fontSize, fontControllingClass) {
        const layout = document.getElementsByClassName(fontControllingClass);
        // @ts-ignore
        for(const element of layout) {
            for(const child of element.children) {
                child.style.fontSize = fontSize;
            }
        }
    }

    componentDidMount(): void {
        const {fontSize, fontControllingClass} = this.props;
        this.updateFont(fontSize, fontControllingClass)
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        const {fontSize, fontControllingClass} = this.props;
        this.updateFont(fontSize, fontControllingClass);
    }

    render() {
        const {fontUp, fontDown} = this.props;

        return (
            <div className="FontTools">
                <div className="Font-buttons">
                    <button className="fontUp" id="up" onClick={fontUp}><i>aA<sup>[+]</sup></i></button>
                    <button className="fontDown" id="down" onClick={fontDown}><i>Aa<sup>[-]</sup></i></button>
                </div>
            </div>
        );
    }
}