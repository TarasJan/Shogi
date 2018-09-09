import Constants from "../../constants/constants";
import Charsets from "../../helpers/charsets/charsets";

const charset = (state={}, action) => {
    switch(action.type) {
        case Constants.SET_CHARSET:
            if (action.charsetName) return Charsets[action.charsetName];
            return state;
        default:
            return state;
    }
    state
};

export default charset;