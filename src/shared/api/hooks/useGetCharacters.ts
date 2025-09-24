import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "@/shared/api";
import { TANSTACK_KEYS } from "@/shared/constants";

export const useGetCharacters = (name: string) =>
  useQuery({
    queryKey: [TANSTACK_KEYS.characters, name],
    queryFn: () => getCharacters({ name }),
  });
