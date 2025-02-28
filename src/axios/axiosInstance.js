import axios from 'axios';

const axiosInstance = axios.create({
    baseURL : "http://116.202.210.102:3081",
    headers : {

    }
})

export default axiosInstance