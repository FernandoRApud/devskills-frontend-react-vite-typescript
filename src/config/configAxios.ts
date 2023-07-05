/* eslint-disable no-param-reassign */
import axios from 'axios';
import { getLocalStorage, removeAllLocalStorage } from '../hooks/localStorageHook';
import { removeAllSessionStorage } from '../hooks/sessionStorageHook';
import { message } from 'antd';

const defaultOptions = {
  baseURL: 'http://localhost:8081/',
  headers: {
    'Content-Type': 'application/json',
  },
};

const clientAxios = axios.create(defaultOptions);

clientAxios.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 401) {
    removeAllLocalStorage();
    removeAllSessionStorage();
  }
  if(error.response.data.message) message.error(`Error: ${error.response.data.message}`);
  return Promise.reject(error);
});

clientAxios.interceptors.request.use((config) => {
  const token = getLocalStorage('token');
  if (config.headers) config.headers.Authorization = `Bearer ${token}` ?? '';
  return config;
});

export default clientAxios;
