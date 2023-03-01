import axios from './axios/axios';

const fetcher = <T extends never>(url: string) =>
  axios.get<T>(url).then((res) => res.data);

export default fetcher;
