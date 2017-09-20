import {
  FETCH_DATA,
  FETCH_STARS,
} from '../actions/types';

const INITIAL_STATE = {
  stellarData: [],
  starList: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, stellarData: action.payload.data };
    case FETCH_STARS:
      return { ...state, starList: action.payload.data };
    default:
      return state;
  }
}
