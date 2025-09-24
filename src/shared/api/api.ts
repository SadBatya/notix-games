import axios from "axios";
import { AxiosInstance } from "axios";

export const rickAndMortyApi: AxiosInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});
