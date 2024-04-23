import axios from "axios";

const api = axios.create({
  //baseURL: "http://localhost:5588",
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json"
  }
});

export default api;
