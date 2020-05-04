/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 *
 *  This connects the layout to the redux store. Due to some refactoring, it's currently not in use, but
 *  left for future use.
 */

import Layout from './Layout';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps
});

const ConnectLayout = connect(
    mapStateToProps,
    null
)(Layout)

export default ConnectLayout;