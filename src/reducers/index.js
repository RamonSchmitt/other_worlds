import { combineReducers } from 'redux';
import StarReducer from './reducer_star';

const rootReducer = combineReducers({
  otherWorlds: StarReducer,
});

export default rootReducer;
