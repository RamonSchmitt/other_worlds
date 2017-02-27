import { FETCH_DATA } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_DATA:
    console.log(action.type);
    return [ action.payload.data ];
  }
  return state
}
