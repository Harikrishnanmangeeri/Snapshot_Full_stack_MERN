import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://snapshot-998j.onrender.com/',
    headers:{
        'Content-Type':'application/json'
    },
});
 export default axiosInstance;