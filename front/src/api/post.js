import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL

export const getPostRequests = async () => await axios.get(API_URL)

export const createPostRequest = async  (post) => {
    const form = new FormData();

    for (let key in post){
        form.append(key, post[key]);
    }
    
    return await axios.post(API_URL, form, {
        headers: {
            "Content-Type" : "multipart/form-data",
        }
    })
}
export const deletePostRequest = async id => await axios.delete(API_URL + '/' + id)

export const getPostRequest = async id => await axios.get(API_URL + '/' +  id)

export const updatePostRequest = async (id, post) => {
    const form = new FormData();

    for (let key in post){
        form.append(key, post[key]);
    }
    return await axios.put(`${API_URL}/${id}`, form, {
        headers: {
            "Content-Type" : "multipart/form-data",
        }
    })}