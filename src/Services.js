import axios from "axios";

const api = axios.create({
  baseURL: "https://staging-academic-tracker-api.herokuapp.com",
});

export default api;
