import axios from "axios"

const api = axios.create({baseURL:"https://kate-brindes.herokuapp.com/server"});

export default api;