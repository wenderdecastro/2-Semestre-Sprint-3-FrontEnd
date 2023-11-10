import axios from "axios"

const apiPort = "7118";
const urlLocal = `https://localhost:${apiPort}/api`;
// const externalApiUrl = null;

const api = axios.create({
    baseURL: urlLocal
})

  export default api;
  