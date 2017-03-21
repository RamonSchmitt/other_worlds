import axios from 'axios';

const ROOT_URL = 'http://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_hostname,pl_name,st_dist,pl_orbper&order=pl_hostname&format=json';

export const FETCH_DATA = 'FETCH_DATA'; // keep action types consistend between action creators and action reducers

export function fetchData(star) {
  const url = `${ROOT_URL}&where=pl_hostname like '${star}'`;
  const request = axios.request({
    url,
    method: 'get',
  });

  return {
    type: FETCH_DATA,
    payload: request,
  };
}
