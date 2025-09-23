import { booksApi } from "./api";

interface Params {
  search: string;
}

export const getBooks = ({ search }: Params) => {
  const response = booksApi.get(`?q=${search}`);

  return response;
};
