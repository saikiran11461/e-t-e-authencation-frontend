//api js

import axios from "axios"


let BASE_API = process.env.REACT_APP_API_URL

export const apiBase = async(route ,method, payload)=>{
   
    try {
       
    const options = {
        method,
        url: `${BASE_API}/${route}`,
        data:payload?payload:null,
        withCredentials: true,
        validateStatus: () => true
    }

    let response = await axios(options);
    return response

    } catch (error) {
        throw error.response ? error.response.data : error;
    }
}