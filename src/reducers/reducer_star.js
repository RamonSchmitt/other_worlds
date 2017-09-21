import {
  FETCH_DATA,
  FETCH_STARS,
  NEXT_PLANET,
} from '../actions/types';

const INITIAL_STATE = {
  stellarData: [],
  starList: [],
  selectedPlanet: 0,
};

export default function (state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, stellarData: action.payload.data };
    case FETCH_STARS:
      return { ...state, starList: action.payload.data };
    case NEXT_PLANET:
      return { ...state, selectedPlanet: +1 };
    default:
      return state;
  }
}
