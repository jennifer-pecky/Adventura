import axios from "axios";

const baseUrl = "https://api-for-adventura-app.onrender.com/api/v1/";
const api = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    }
})

// api.interceptors.request.use((request) => {
//     return request
// })

export default api;