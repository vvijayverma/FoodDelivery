import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"http://localhost:3000/api/"
});

const header={
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    }

axiosInstance.interceptors.request.use(
    function(config){
        config.headers = header;
        // if(localStorage.getItem("token")){
        //     config.headers.Authorization = "Bearer"+" "+localStorage.getItem("token");
        // }
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
);
export default axiosInstance;