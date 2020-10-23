/**
 * @author Jon Ross Ingley
 *
 * FontTools component
 * This component adds 2 buttons that allow for changes to the font size of a specified class.
 */
import React from 'react';
import './css/FontTools.css'

export class FontTools extends React.Component<any, any>{

    /**
     * This function updates the font on the specified controlling class
     * The function traverses the HTMLCollection from the class and changes
     * the font in all of the children
     * @param fontSize              the font size to update to
     * @param fontControllingClass  the class to change the font in
     */
    updateFont(fontSize, fontControllingClass) {
        const layout = document.getElementsByClassName(fontControllingClass);
        // @ts-ignore
        for(const element of layout) {
            for(const child of element.children) {
                child.style.fontSize = fontSize;
            }
        }
    }

    /**
     * Need to change the font on mount to keep the size consistent across session
     */
    componentDidMount(): void {
        const {fontSize, fontControllingClass} = this.props;
        this.updateFont(fontSize, fontControllingClass)
    }

    /**
     * Need to change the font on update to rerender after clicking the button
     */
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        const {fontSize, fontControllingClass} = this.props;
        this.updateFont(fontSize, fontControllingClass);
    }

    render() {
        //action creators for the buttons
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