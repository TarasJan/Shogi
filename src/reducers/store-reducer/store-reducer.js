import { combineReducers } from 'redux';
import answers from '../answers';
import charset from '../charset';
import scoreInfo from '../score';
import currentQuestion from '../current-question';

const StoreReducer = combineReducers({
  answers,
  charset,
  question: currentQuestion,
  scoreInfo,
});


export default StoreReducer;
