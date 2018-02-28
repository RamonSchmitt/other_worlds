import {
  FETCH_DATA,
  FETCH_STARS,
  NEXT_PLANET,
  PREV_PLANET,
} from '../actions/types';

const INITIAL_STATE = {
  stellarData: [],
  starList: [],
  selectedPlanet: 0,
};

export default function (state = INITIAL_STATE, action) {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, stellarData: action.payload, selectedPlanet: 0 };
    case FETCH_STARS:
      return { ...state, starList: action.payload };
    case NEXT_PLANET:
      return { ...state, selectedPlanet: state.selectedPlanet + 1 };
    case PREV_PLANET:
      return { ...state, selectedPlanet: state.selectedPlanet - 1 };
    default:
      return state;
  }
}
