import {FONT_DOWN, FONT_UP} from '../actions/actions';

const fontToolsReducer = (state={fontSizes: ['70%','80%','90%','100%','110%','120%','130%'],currentFontIndex: 3}, action) => {
    switch (action.type) {
        case FONT_UP: {
            return Object.assign({}, state,
                {
                    currentFontIndex: (state.currentFontIndex + 1 <= 6) ? state.currentFontIndex + 1 : state.currentFontIndex
                });
        }
        case FONT_DOWN: {
            return Object.assign({}, state,
                {
                    currentFontIndex: (state.currentFontIndex - 1 >= 0) ? state.currentFontIndex - 1 : state.currentFontIndex
                });
        }
        default:
            return state;
    }
};

export default fontToolsReducer;