import { combineReducers } from 'redux';
import StarReducer from './reducer_star';


const rootReducer = combineReducers({
  stellarData: StarReducer,
});

export default rootReducer;
