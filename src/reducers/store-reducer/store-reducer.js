import { combineReducers } from 'redux';
import answers from '../answers';
import charset from '../charset';
import scoreInfo from '../score';
import currentQuestion from '../current-question';
import user from '../user';

const StoreReducer = combineReducers({
  answers,
  charset,
  question: currentQuestion,
  scoreInfo,
  user,
});


export default StoreReducer;
