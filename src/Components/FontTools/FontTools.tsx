import React from 'react';
import './css/FontTools.css'

export class FontTools extends React.Component<any, any>{

    updateFont(fontSize) {
        const layout = document.getElementsByClassName('Layout');
        // @ts-ignore
        for(const element of layout) {
            for(const child of element.children) {
                console.log(child);
                child.style.fontSize = fontSize;
            }
        }
    }

    componentDidMount(): void {
        const {fontSize} = this.props;
        this.updateFont(fontSize)
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        const {fontSize} = this.props;
        this.updateFont(fontSize);
    }

    render() {
        const {fontUp, fontDown} = this.props;

        return (
            <div className="FontTools">
                <div className="Font-buttons">
                    <button className="fontUp" onClick={fontUp}><i>aA<sup>[+]</sup></i></button>
                    <button className="fontDown" onClick={fontDown}><i>Aa<sup>[-]</sup></i></button>
                </div>
            </div>
        );
    }
}