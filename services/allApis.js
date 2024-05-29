import { commonApi } from "./commonApi"
import base_url from "./server_url"

//  //register
export const userRegister=async(data)=>{
    return await commonApi("POST",`${base_url}/register`,data,"")
}

// //login
export const userLogin=async(data)=>{
    return await commonApi("POST",`${base_url}/login`,data,"")
}

export const bookCreate=async(data)=>{
    return await commonApi("POST",`${base_url}/Book`,data,"")
}

export const bookGetAll=async(data)=>{
    return await commonApi("GET",`${base_url}/Book`,data,"")
}

export const bookGetById=async(data)=>{
    return await commonApi("GET",`${base_url}/Book`,data,"")
}

export const bookUpdate=async(data)=>{
    return await commonApi("PUT",`${base_url}/Book`,data,"")
}