import { useQuery } from "@tanstack/react-query";
import { getBooks } from "@/shared/api";
import { TANSTACK_KEYS } from "@/shared/constants";

interface Params {
  search: string;
}

export const useGetBooks = ({ search }: Params) =>
  useQuery({
    queryKey: [TANSTACK_KEYS.books, search],
    queryFn: () => getBooks({ search }),
  });
