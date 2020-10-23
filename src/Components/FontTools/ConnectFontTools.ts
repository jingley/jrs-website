/**
 * @author Jon Ross Ingley
 *
 * Connects FontTools component to redux store so that it can access the global font size prop
 */

import {FontTools} from './FontTools';
import {fontUp, fontDown} from './actions/actions';
import {connect} from 'react-redux';

/**
 * Takes props from the redux store and maps it to the component
 */
const mapStateToProps = state => ({
    //state.fontSizes is an array of sizes
    //state.currentFontIndex is the current index
    fontSize: state.fontSizes[state.currentFontIndex],
});


/**
 * Dispatches actions with the fontUp and fontDown action creators
 */
const ConnectFontTools = connect(
    mapStateToProps,
    {fontUp: fontUp,
    fontDown: fontDown}
)(FontTools);

export default ConnectFontTools;