import axios from 'axios';
import LoginForm from './models/login-form';
import objectToFormData from '@shared/utils/object-to-form-data';
import { onFulfilled } from '@shared/api/response-interceptors';
const api = axios.create({ baseURL: `${process.env.REST_API}/authservice` });

api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = token;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(onFulfilled, function (error) {
  return Promise.reject(error);
});

export default {
  async login(loginForm: LoginForm) {
    const formdata = objectToFormData(loginForm);
    const response = await api.post('/Login', formdata);
    return response.data;
  },
  async updateToken() {
    const response = await api.get('/UpdateToken');
    return response.data;
  }
};
