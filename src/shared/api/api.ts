import axios from "axios";
import { AxiosInstance } from "axios";

export const booksApi: AxiosInstance = axios.create({
  baseURL: "https://openlibrary.org/search.json",
  // headers: {
  //   "Content-Type": "application/json",
  // },
});
