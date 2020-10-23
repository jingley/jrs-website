/**
 * @author Jon Ross Ingley <jingley22@gmail.com
 *
 * Customized configure store with logging modifications
 */
import {createStore} from 'redux';
import fontToolsReducer from './Components/FontTools/reducers/reducers';

/**
 * Logs to console for every dispatch
 */
const addLoggingToDispatch = (store) => {
    const rawDispatch = store.dispatch;
    //use in case group is not supported
    if(!console.group) {
        return rawDispatch;
    }
    return (action) => {
        console.group(action.type);
        console.log('%c prev state', 'color: gray', store.getState());
        console.log('%c action', 'color blue', action);
        const returnValue = rawDispatch(action);
        console.log('%c next state', 'color: green', store.getState());
        console.groupEnd();
        return returnValue;
    }
}

/**
 * Custom configure store
 */
const configureStore = () => {
    const store = createStore(fontToolsReducer);

    //only logging like this for development
    if(process.env.NODE_ENV !== 'production') {
        store.dispatch = addLoggingToDispatch(store);
    }

    return store;
}

export default configureStore;
