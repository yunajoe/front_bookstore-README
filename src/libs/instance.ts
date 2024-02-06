import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://3.34.0.178:8080',
});

export default instance;
