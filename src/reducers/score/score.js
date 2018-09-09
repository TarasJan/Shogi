import Constants from "../../constants/constants";

const scoreInfo = (state={}, action) => {
    const {score, limit} = state;
        switch(action.type) {
            case Constants.INCREASE_SCORE: return {score: score + action.delta, limit};
            case Constants.RESET_SCORE: return {score: action.value, limit};
            default: return state;
        }
    };

export default scoreInfo;