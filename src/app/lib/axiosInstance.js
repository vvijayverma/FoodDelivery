import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://food-delivery-eight-mu.vercel.app/"
});

const header={
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://food-delivery-eight-mu.vercel.app/',
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