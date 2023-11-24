import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'http://16.16.185.112/api/',
    headers:{
        'Content-Type':'application/json'
    },
});
 export default axiosInstance;