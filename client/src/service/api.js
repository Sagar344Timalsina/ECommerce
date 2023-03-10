const axios = require('axios');

const API_URL = 'http://localhost:5000';//backend server

const {API_NOTIFICATION_MESSAGES, SERVICE_URLS} = require('../constants/config');

//creating common api
const axiosInstance = axios.create({
    baseURL:API_URL,

    timeout : 10000,
    headers:{
        "content-type":"application/json"
    }
})  

axiosInstance.interceptors.request.use(
    function (config){
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        //stopping the global loader here:
        return processResponse(response);
    },
    function(error){
        return Promise.reject(processError(error));
    }

)


//as a common response
//if api is success-> return {isSucess : true, data : obejct};
//if api is fail -> return (isFailure : true, status : string(error msg is pass),msg,code);

const processResponse = ()=>{
    if(response?.status === 200){
        return {
            isSucess : true, 
            data : response.data
        }
    }else{
        return {
            isFailure : true,
            status: response?.status,
            msg:response?.msg,
            code : response?.code
        }
    }
}

const processError = ()=>{
    if(error.response){
        //request send sucess but server response with a status other than falls out of range 500(not 200)
        console.log('Error in response:',error.toJSON());
        return{
            isError : true,
            msg : API_NOTIFICATION_MESSAGES.responseFailure,
            code : error.response.status
        }
    }else if(error.request){
        //request success but no response was received
        console.log('Error in request:',error.toJSON());
        return{
            isError : true,
            msg : API_NOTIFICATION_MESSAGES.requestFailure,
            code : ""
        }
    }else{
        //no response and request ie error in front end
        console.log('Error in network:',error.toJSON());
        // return{
        //     isError : true,
        //     msg : API_NOTIFICATION_MESSAGES.networkFailure,
        //     code : "
        // }
    }
}



const API = {};

// for(const [key,value] of Object.entries(SERVICE_URLS)){
//     API[key] = (body, showUploadProgress, showDownloadProgress){
//         axiosInstance({
//             method: value.method,
//             url : value.url,
//             data : body,
//             responseType : value.responseType,
//             onUploadProgress: function (progressEvent){
//                 if(showUploadProgress){
//                     let percentageC
//                 }
//             }
//         })
//     }
// }