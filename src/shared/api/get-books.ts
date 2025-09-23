import { booksApi } from "./api";

interface Params {
  search: string;
}

export const getBooks = ({ search }: Params) => {
  const response = booksApi.get(`${search ? `?q=${search}` : ""}`);

  return response;
};
