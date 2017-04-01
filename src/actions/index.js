import axios from 'axios';

const ROOT_URL = 'http://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json';

export const FETCH_DATA = 'FETCH_DATA'; // keep action types consistend between action creators and action reducers
export const FETCH_STARS = 'FETCH_STARS'; // keep action types consistend between action creators and action reducers

export function fetchData(star) {
  const url = `${ROOT_URL}&select=pl_hostname,pl_name,st_dist,pl_orbper&order=pl_hostname&where=pl_hostname like '${star}'`;
  const request = axios.request({
    url,
    method: 'get',
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
  });

  return {
    type: FETCH_STARS,
    payload: request,
  };
}
