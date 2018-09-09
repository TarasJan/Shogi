import { combineReducers } from 'redux';
import answers from './../answers';
import charset from './../charset';
import scoreInfo from './../score';
import currentQuestion from './../current-question';

const StoreReducer = combineReducers({
        question: currentQuestion,
        answers,
        charset,
        scoreInfo
    });


export default StoreReducer;