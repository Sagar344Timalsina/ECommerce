//API_NOTIFICATION_MESSAGES

export const API_NOTIFICATION_MESSAGES = {
    loading :{
        title:'Loading...',
        message:'Data is being loaded, Please wait'
    },
    success:{
        title:'Sucess',
        message:'Data is Scucessfully loaded'
    },
    responseFailure:{
        title: 'Error',
        message : 'An error occured while fetching response from the server. Please try again'
    },
    requestFailure:{
        title : ' Error',
        message : 'An error occured while parsing the request data'
    },
    networkError:{
        title: 'Error',
        message : 'Unable to connect with the server.Please internet connectivity and try agin later'
    }
}


//API service call:

export const SERVICE_URLS = {
    userSignup:{url:'/signup',method:'POST'}
}