import axios from 'axios';
import { apiKey } from 'src/constants/config';

export const axiosAuth = axios.create();

//we intercept every requests
axiosAuth.interceptors.request.use(
  async function (config) {
    //anything you want to attach to the requests such as token
    config.url = `${config.url}?api_key=${apiKey}`;
    return config;
  },
  error => Promise.reject(error),
);

//we intercept every response
axiosAuth.interceptors.request.use(
  async function (config) {
    return config;
  },
  error =>
    //check for authentication or anything like that
    Promise.reject(error),
);
