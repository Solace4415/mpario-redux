import axios from "axios";

const API = axios.create({ baseURL: "https://covidnigeria.herokuapp.com/api" });

export const fetchdata = () => API.get("/");
