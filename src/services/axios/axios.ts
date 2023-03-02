import fetchAxios from 'axios';

const axios = fetchAxios.create({
  baseURL: 'https://teslo-backend-production-716f.up.railway.app',
});

export default axios;
