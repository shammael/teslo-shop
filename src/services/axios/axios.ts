import fetchAxios from 'axios';

const axios = fetchAxios.create({
  baseURL: 'http://localhost:4000',
});

export default axios;
