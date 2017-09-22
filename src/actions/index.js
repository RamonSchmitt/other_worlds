import axios from 'axios';
import {
  FETCH_DATA,
  FETCH_STARS,
  NEXT_PLANET,
  PREV_PLANET,
  NEXT_DISABLED,
} from '../actions/types';

const ROOT_URL = 'http://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json';

export function fetchData(star) {
  const url = `${ROOT_URL}&select=pl_hostname,pl_name,st_dist,pl_orbper&order=pl_hostname&where=pl_hostname like '${star}'`;
  const request = axios.request({
    url,
    method: 'get',
    withCredentials: false,
  });

  return {
    type: FETCH_DATA,
    payload: request,
  };
}

export function fetchStars() {
  const url = `${ROOT_URL}&select=pl_hostname`;
  const request = axios.request({
    url,
    method: 'get',
    withCredentials: false,
  });

  return {
    type: FETCH_STARS,
    payload: request,
  };
}

export function nextPlanet() {
  return {
    type: NEXT_PLANET,
  };
}

export function prevPlanet() {
  return {
    type: PREV_PLANET,
  };
}
