import axios from 'axios'
import {Toast} from 'antd-mobile'

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    Toast.loading('加载中',0)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
   Toast.hide()
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
