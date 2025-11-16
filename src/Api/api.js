//api js

import axios from "axios"


let BASE_API = "http://localhost:2345"

export const apiBase = async(route ,method, payload)=>{
    console.log(route,method)
    try {
       
    const options = {
        method,
        url: `${BASE_API}/${route}`,
        data:payload?payload:null,
        withCredentials: true,
        validateStatus: () => true
    }

    let response = await axios(options);
    return response.data

    } catch (error) {
        console.error("API Error:", error);
        throw error.response ? error.response.data : error;
    }
}