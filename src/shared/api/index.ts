// src/axios.ts
import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Create an instance of axios
const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000'
});

// Add a request interceptor
api.interceptors.request.use(
  (value: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>> => {
    // Do something before request is sent
    console.log('Request Interceptor:', value);
    // You can add headers or do other modifications
    return value;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    // Any status code that lies within the range of 2xx causes this function to trigger
    console.log('Response Interceptor:', response);
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    console.log('Response Interceptor Error:', error);
    return Promise.reject(error);
  }
);

export default api;
