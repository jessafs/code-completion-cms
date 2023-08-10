// initialize common react axios helper


import axios from "axios"
// const axios = require('axios');
const axiosHelper = {
  // get: (url, params) => {
  //   return axios.get(url, { params }).then(({data})=>data);
  // },
  // post: (url, data) => {
  //   return axios.post(url, data).then(({data})=>{
  //     return data.data
  //   })
  // },
  // put: (url, data) => {
  //   return axios.put(url, data)
  // },

  // delete: (url) => {
  //   return axios.delete(url);
  // }
  get: (url, params) => {
    return axios.get(url, { params })
      .then(response => response.data)
      .catch(error => error);
  },

  post: (url, data) => {
    return axios.post(url, data)
      .then(({data})=>{
        return data.data
      })
      .catch(error => error);
  },

  put: (url, data) => {
    return axios.put(url, data)
      .then(response => response.data)
      .catch(error => error);  
  },

  delete: (url,params) => {
    return axios.delete(url,{params})  
      .then(response => response.data)  
      .catch(error => error);  		
  }	
};
export default axiosHelper;