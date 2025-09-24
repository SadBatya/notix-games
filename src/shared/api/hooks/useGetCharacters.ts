import { useQuery } from "@tanstack/react-query";
import { TANSTACK_KEYS } from "@/shared/constants";
import { type Characters } from "../types";
import { rickAndMortyApi } from "../api";
import { AxiosError } from "axios";

export const useGetCharacters = (name: string) =>
  useQuery({
    queryKey: [TANSTACK_KEYS.characters, name],
    queryFn: async () => {
      const response = await rickAndMortyApi.get<Characters>("/character", {
        params: {
          name,
        },
      });

      if (response.status === 404) {
        return { results: [], info: null };
      }

      return response.data;
    },
    retry: (failureCount, error: AxiosError) => {
      if (error.response?.status === 404) return false;
      return failureCount < 1;
    },
  });
