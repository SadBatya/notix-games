import { rickAndMortyApi } from "./api";
import { Characters } from "./types";

interface Params {
  name?: string;
}

export const getCharacters = async ({ name }: Params) => {
  const response = await rickAndMortyApi.get<Characters>("/character", {
    params: {
      name,
    },
  });

  return response.data;
};
