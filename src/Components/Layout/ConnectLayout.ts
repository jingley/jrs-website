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