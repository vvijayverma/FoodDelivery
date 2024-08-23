import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://food-delivery-puce-ten.vercel.app/api/"
    // https://food-delivery-puce-ten.vercel.app/api/
    // https://eazyeats-two.vercel.app/
});

const header={
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
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