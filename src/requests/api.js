import axios from "axios";

const jsonplaceholder = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
});
const URL = {
    post: '/posts',
    user: '/users',
}

export const posts = {
    fetchPosts: () => jsonplaceholder.get(URL.post).then(response => {
        try {
            const {data} = response;
            return data;
        }catch (err){
            return err.response || err;
        };
    })
}

export const users = {
    fetchUsers: () => jsonplaceholder.get(URL.user).then(response => {
        try {
            const {data} = response;
            return data;
        }catch (err){
            return err.response || err;
        };
    })
}