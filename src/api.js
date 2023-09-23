import axios from "axios";
  

const url = "http://localhost:4200/products";

export async function getProductsData(){
   return await  axios.get(url)
}

export async function deleteProduct(id){
    return await  axios.delete(`${url}/${id}`)
 }

 export async function postData(data){
    return await  axios.post(url, data,{headers:{"Content-Type":"application/json"}})
 }

 export async function editData(id,data){
    return await  axios.put(`${url}/${id}`, data,{headers:{"Content-Type":"application/json"}})
 }