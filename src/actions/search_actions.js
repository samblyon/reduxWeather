import axios from 'axios';

const API_KEY = 'eabf2898736f0c4cdfb13ebd885e218e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const doSearch = function (query) {
  query = query || "San Francisco"
  return axios.get(ROOT_URL, {
    params: {
      q: query.split(' ').join('-')
    }
  });
}
