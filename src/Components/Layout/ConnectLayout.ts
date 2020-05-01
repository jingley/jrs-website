import {Layout} from './Layout';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    fontSize: state.fontSizes[state.currentFontIndex],
    ...ownProps
});

const ConnectLayout = connect(
    mapStateToProps,
    null
)(Layout)

export default ConnectLayout;